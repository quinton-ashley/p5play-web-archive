// let sprite;

// function setup() {
// 	new Canvas(238, 80);

// 	sprite = new Sprite();
// 	sprite.h = 20;
// }

// function draw() {
// 	clear();
// 	if (mouse.presses()) {
// 		log(mouse.x, mouse.y);
// 		sprite.rotateTo(mouse, 5);
// 	}
// }

// Creating sprite using sprite sheets for animation

let instructions = 'This one is a bit tricky! Use wasd to move and jump.';

let mouse_moved = false;
let touch_started = false;
let tileFrames, tiles, signs, ground, fakeGround, exit, exitSign, explosion, player, tileSheet;

function preload() {
	width = 800;
	height = 400;

	world.gravity.y = 10;

	// Create the Player sprite and add it's animations
	player = new Sprite(70, 200, 70, 94);
	player.spriteSheet = loadImage('../demos/assets/player_spritesheet.png');
	player.addImg('walk', [
		[0, 0],
		[71, 0],
		[142, 0],
		[0, 95],
		[71, 95],
		[142, 95],
		[213, 0],
		[284, 0],
		[213, 95],
		[355, 0],
		[284, 95]
	]);
	player.addImg('stand', [284, 95]);
	player.addAni('jump', [
		[66, 190],
		[422, 95]
	]);
	player.ani.frameDelay = 16;
	player.ani.looping = false;

	player.layer = 2;
	player.rotationLock = true;
	player.autoResetAnimations = true;

	tileSheet = loadImage('../demos/assets/tiles_spritesheet.png');

	tileFrames = loadJSON('../demos/assets/tiles.json');
}

function resetPlayer() {
	player.vel.x = 0;
	player.vel.y = 0;
	player.x = 70;
	player.y = 280;
}

function setup() {
	new Canvas(800, 400);

	// Load tiles sprite sheet from frames array once frames array is ready
	tiles = new Group();
	tiles.collider = 'kinematic';
	tiles.layer = 1;
	tiles.w = 70;
	tiles.h = 70;
	tiles.spriteSheet = tileSheet;
	// Load the frame data for the tiles
	tiles.addAnis(tileFrames);

	ground = new tiles.Group();
	// ground.friction = 0;
	fakeGround = new ground.Group();
	// Draw the ground tiles
	for (let i = 0; i < 4; i++) {
		if (i < 2) {
			new ground.Sprite('castle', 70 + i * 140, 340 + i * 20);
		} else {
			new fakeGround.Sprite('castle', 70 + i * 140, 340);
		}
	}

	exit = new ground.Sprite('castle', 630, 365);

	signs = new tiles.Group();
	signs.collider = 'none';
	// Draw the sign tiles
	exitSign = new signs.Sprite('signExit', 630, 295);
	new signs.Sprite('signRight', 210, 295);

	// makes the sprite's collider smaller
	player.w = 20;

	fakeGround[1].collider = 'none';
}

function draw() {
	background(0);
	fill(255);
	text(instructions, 16, 16);

	if (player.ani.name == 'jump' && player.y > 280) {
		player.ani = 'walk';
	}

	if (kb.presses('up')) {
		player.ani = 'jump';
		player.vel.y = -3;
	}
	if (player.colliding(ground)) {
		if (kb.presses('left')) {
			player.ani = 'walk';
			player.ani.frameDelay = 4;
			player.mirror.x = true;
		} else if (kb.presses('right')) {
			player.ani = 'walk';
			player.ani.frameDelay = 4;
			player.mirror.x = false;
		}
	}

	if (kb.pressing('left')) {
		player.vel.x = -2;
	} else if (kb.pressing('right')) {
		player.vel.x = 2;
	}

	if (abs(player.vel.x) < 0.1) {
		player.ani = 'stand';
	}

	if (kb.presses('space')) {
		resetPlayer();
	}

	if (player.collides(fakeGround[0])) {
		resetPlayer();
		instructions = "Can't step on that! Press space to reset.";
	}

	if (player.collides(exit)) {
		exit.vel.y = -6;
		exitSign.vel.y = -6;
		instructions = 'You win!';
	}

	allSprites.debug = mouse.pressing();

	allSprites.draw();
}
