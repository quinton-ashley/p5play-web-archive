let dominoes, balls, gap, maxY;

let fps;

async function setup() {
	new Canvas();
	world.gravity.y = 10;
	noStroke();

	textSize(50);

	balls = new Group();
	balls.d = 20;

	dominoes = new Group();
	dominoes.w = 5;
	dominoes.h = 19;
	dominoes.mass = 0.01;
	gap = 10;

	maxY = 700;

	let floorY = tower(width / 2, 200, true);
	new Sprite(
		[
			[0, floorY],
			[width, floorY]
		],
		'static'
	);
}

function tower(x, y, isLast) {
	new dominoes.Sprite(x, y - 13).rotation = 90;
	new dominoes.Sprite(x - gap, y);
	if (isLast) new dominoes.Sprite(x + gap, y);

	y += dominoes.w + dominoes.h + 2;
	if (y > maxY) return y - dominoes.h + 2;

	tower(x - gap, y, false);
	if (isLast) return tower(x + gap, y, isLast);
}

let frameRates = [60];
let avg;

function draw() {
	if (!mouse.pressing()) {
		background(0, 0, 0, 50);
	} else {
		background(0);
	}

	if (frame % 60 === 0) {
		avg = round(frameRates.reduce((a, b) => a + b) / frameRates.length);
		frameRates = [];
	}
	frameRates.push(getFPS());
	fill(255);

	text('fps: ' + avg, 10, 100);

	if (kb.presses(' ')) {
		balls.removeAll();
		dominoes.removeAll();
		tower(width / 2, 200, true);
	}

	if (mouse.presses()) {
		new balls.Sprite(mouse.x, mouse.y);
	} else if (mouse.pressing()) {
		balls.at(-1).moveTowards(mouse);
	} else {
		world.step(1 / 240); // slow motion!
	}
}
