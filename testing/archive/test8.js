let splats;

function setup() {
	new Canvas(500, 160);

	splats = new Group();
	splats.addAni('../learn/assets/asterisk_explode0001.png', 11);

	new splats.Sprite();
}

function draw() {
	clear();
}
