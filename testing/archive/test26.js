let ball, flipper;
let flipperImg, ballImg;

function preload() {
	p5play.disableImages = true;
	flipperImg = loadImage('flipper.png');
	ballImg = loadImage('ball.png');
}
function setup() {
	new Canvas(400, 400);
	ball = new Sprite(200, -20, 30);
	flipper = new Sprite(250, 300, [
		[0, -40],
		[-140, 20],
		[0, 40],
		[140, 20],
		[0, -40]
	]);
	flipper.collider = 'kinetic';
	flipper.image = flipperImg;
	flipper.addCollider(-72, 0, 40);
	flipper.addCollider(68, 0, 79);
	flipper.debug = true;
	flipper.offset.x = -60; // Offset doesn't work with polygon collider

	flipper.rotation = -20;
	world.gravity.y = 5;
}

function draw() {
	background(150);
	if (kb.presses('space')) {
		flipper.rotateTo(20, 5);
	}
	if (kb.pressed('space')) {
		flipper.rotateTo(-20, 5);
	}

	if (ball.pos.y > 500) {
		ball.remove();
		ball = new Sprite(200, -20, 30);
	}
}
