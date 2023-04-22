// memory leak test

function setup() {
	new Canvas(800, 800);
}

function draw() {
	clear();
	new Sprite(random(width), random(height), 5);

	if (frame % 600 == 0) {
		allSprites.removeAll();
	}
}
