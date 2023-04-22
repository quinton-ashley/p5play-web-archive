let hero;

function preload() {
	hero = new Sprite(50, 10, 32, 32);
	hero.spriteSheet = '../learn/assets/questKid.png';
	hero.anis.offset.x = 2;
	hero.anis.frameDelay = 20;

	hero.addAnis({
		run: { line: 0, frames: 8 },
		jump: { line: 1, frames: 6 },
		roll: { line: 2, frames: 5 },
		turn: { line: 3, frames: 7 }
	});
	hero.ani = 'run';
}

function setup() {
	new Canvas(125, 48, 'pixelated x4');
}

function draw() {
	clear();
	if (kb.presses('r')) hero.ani = 'run';
	if (kb.presses('j')) hero.ani = 'jump';
	if (kb.presses('l')) hero.ani = 'roll';
	if (kb.presses('t')) hero.ani = ['turn', '!<turn', '++'];
}
