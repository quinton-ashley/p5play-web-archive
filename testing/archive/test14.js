let boxes, smallBoxes, bigBoxes;

function setup() {
	new Canvas(100, 528);

	boxes = new Group();
	boxes.h = 10;
	boxes.bounciness = 1;

	smallBoxes = new boxes.Group();
	smallBoxes.w = 20;

	bigBoxes = new boxes.Group();
	bigBoxes.w = 60;
}

function draw() {
	clear();

	if (mouse.presses('left')) {
		new smallBoxes.Sprite(mouse.x, mouse.y);
	}
	if (mouse.presses('right')) {
		new bigBoxes.Sprite(mouse.x, mouse.y);
	}
	if (kb.presses('space')) {
		boxes.removeAll();
	}
}
