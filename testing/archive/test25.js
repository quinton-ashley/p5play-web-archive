let player, groundSensor, grass, water, coins;
let grassImg, waterImg, coinsImg, charactersImg;

let score = 0;

function preload() {
	grassImg = loadImage('grass.png');
	waterImg = loadImage('water.png');
	coinsImg = loadImage('coin.png');
	charactersImg = loadImage('characters.png');
}

function setup() {
	new Canvas(200, 160, 'pixelated');
	world.gravity.y = 10;
	allSprites.pixelPerfect = true;

	grass = new Group();
	grass.layer = 0;
	grass.collider = 'static';
	grass.img = grassImg;
	grass.tile = 'g';

	water = new Group();
	water.layer = 2;
	water.collider = 'static';
	water.img = waterImg;
	water.h = 8;
	water.tile = 'w';

	coins = new Group();
	coins.collider = 'static';
	coins.spriteSheet = coinsImg;
	coins.addAni({ w: 16, h: 16, row: 0, frames: 14 });
	coins.tile = 'c';

	new Tiles(
		[
			'cc',
			'gg                                     g',
			' ',
			'   gg',
			'       c                        c  g',
			'      ggg    c                  g',
			'            ggg             g                 ccc',
			'                                              ccc',
			'     c c c       c c                          ccc',
			'gggggggggggwwwwwggggg  ggggggggggg            ggg'
		],
		8,
		8,
		16,
		16
	);

	player = new Sprite(48, 100, 12, 12);
	player.layer = 1;
	player.anis.w = 16;
	player.anis.h = 16;
	player.anis.offset.y = 1;
	player.anis.frameDelay = 8;
	player.spriteSheet = charactersImg;
	player.addAnis({
		idle: { row: 0, frames: 4 },
		knockback: { row: 0, frames: 1 },
		run: { row: 1, frames: 3 },
		jump: { row: 1, col: 3, frames: 2 }
	});
	player.ani = 'idle';
	player.rotationLock = true;

	// IMPORTANT! prevents the player from sticking to the sides of walls
	player.friction = 0;

	player.overlaps(coins, collectCoin);

	textAlign(CENTER);
}

function collectCoin(player, coin) {
	coin.remove();
	score++;
}

function draw() {
	background('skyblue');
	fill(255);

	text('Score: ' + score, 160, 20);

	// make the player slower in water
	if (player.colliding(water)) {
		player.drag = 20;
		player.friction = 10;
	} else {
		player.drag = 0;
		player.friction = 0;
	}

	// player.isMidAir is a custom property added to the player
	// it's set to true when the player starts jumping
	// and set to false when the player lands on the grass or water
	if (player.collides(water)) {
		player.isMidAir = false;
	}

	for (let grassBlock of grass) {
		if (player.collides(grassBlock)) {
			let ang = player.angleTo(grassBlock);
			if (ang > 45 && ang < 135) {
				player.isMidAir = false;
			}
		}
	}

	// player is falling
	if (player.collided(grass)) {
		player.isMidAir = true;
	}

	if (kb.presses('space') && !player.isMidAir) {
		player.ani = 'jump';
		player.vel.y = -4.5;
		player.isMidAir = true;
	}

	if (kb.pressing('left')) {
		player.ani = 'run';
		player.vel.x = -1.5;
		player.mirror.x = true;
	} else if (kb.pressing('right')) {
		player.ani = 'run';
		player.vel.x = 1.5;
		player.mirror.x = false;
	} else {
		player.ani = 'idle';
		player.vel.x = 0;
	}

	// if player falls, reset them
	if (player.y > 400) {
		player.speed = 0;
		player.x = 48;
		player.y = 100;
	}

	camera.x = player.x + 52;
}
