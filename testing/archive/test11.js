let sprite;

function setup() {
	new Canvas(500, 200);

	sprite = new Sprite([
		[200, 100],
		[300, 20],
		[300, 140],
		[200, 140],
		[200, 100]
	]);
}

function draw() {
	clear();

	if (mouse.pressing()) {
		sprite.visible = false;

		beginShape();
		vertex(200, 100);
		vertex(300, 20);
		vertex(300, 140);
		vertex(200, 140);
		vertex(200, 100);
		endShape(CLOSE);
	} else sprite.visible = true;
}
