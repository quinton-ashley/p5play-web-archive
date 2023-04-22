let sprite;

function setup() {
	new Canvas(238, 80);

	sprite = new Sprite();
	sprite.h = 20;
}

function draw() {
	clear();
	if (mouse.presses()) {
		log(mouse.x, mouse.y);
		sprite.rotateTo(mouse, 5, 0);
	}
}

async function ro() {
	await sprite.rotateTo(68, 16, 5);
	await delay(1000);
	sprite.rotateTo(67, 8, 5);
}
