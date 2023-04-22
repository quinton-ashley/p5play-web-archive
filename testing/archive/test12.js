let bird;

function setup() {
	createCanvas(windowHeight, windowWidth);

	bird = loadAnimation('assets/explode_sprite_sheet.png', { size: [73, 76], frames: 12 });
}

function draw() {
	clear();
	animation(bird, 100, 100);
}
