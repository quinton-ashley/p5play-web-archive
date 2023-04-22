let hero, floor;

function preload() {
	hero = new Sprite(62, 24, 32, 32);
	hero.spriteSheet = '../learn/assets/questKid.png';
	hero.anis.offset.x = 2;
	hero.anis.offset.y = 2;
	hero.anis.frameDelay = 8;

	hero.addAnis({
		run: { row: 0, frames: 8 },
		jump: { row: 1, frames: 6 },
		roll: { row: 2, frames: 5, frameDelay: 14 },
		turn: { row: 3, frames: 7 },
		stand: { row: 3, frames: 1 }
	});
	hero.ani = 'stand';
}

function setup() {
	new Canvas(125, 48, 'pixelated x4');
	world.gravity.y = 10;
	allSprites.pixelPerfect = true;

	floor = new Sprite(62.5, 48, 125, 8, 's');
	floor.color = color(133, 228, 62);
}

function draw() {
	clear();

	if (kb.presses('up')) hero.ani = ['jump', 'stand'];
	if (kb.presses('down')) hero.ani = ['roll', 'stand'];

	if (kb.pressing('left')) hero.vel.x = -1;
	else if (kb.pressing('right')) hero.vel.x = 1;
	else hero.vel.x = 0;

	if (hero.ani.name != 'jump' && hero.ani.name != 'roll') {
		if (kb.pressing('left')) {
			hero.ani = 'run';
			hero.mirror.x = true;
		} else if (kb.pressing('right')) {
			hero.ani = 'run';
			hero.mirror.x = false;
		} else {
			hero.ani = 'stand';
		}
	}
}
