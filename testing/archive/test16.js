let player;

function setup() {
	new Canvas(250, 100, 'pixelated x2');
	allSprites.tileSize = 32;

	player = new Sprite();
	player.layer = 1;
	player.spriteSheet = '../learn/assets/questKid.png';

	player.addAnis({
		'idle-worry': { line: 0, frames: 13 },
		walk: { line: 1, frames: 8 }
	});

	player.ani = 'walk';

	player.anis.frameDelay = 6;
	player.anis.offset.x = 2;

	player.debug = true;
}

function draw() {
	clear();
}
