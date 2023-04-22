let s0, s1, s2, s3;
let floor;

function setup() {
	new Canvas(800, 800);
	// world.gravity.y = 10;

	s0 = new Sprite(400, 450);
	s1 = new Sprite(400, 350);
	s2 = new Sprite(350, 400);
	s3 = new Sprite(450, 400);

	floor = new Sprite(
		[
			[0, 0],
			[width, 0],
			[width, height],
			[0, height],
			[0, 0]
		],
		's'
	);
	floor.shape = 'chain';

	// noLoop();
}

function draw() {
	clear();

	// each sprite essentially has its own gravity
	s0.applyForce(0, 10);
	s1.applyForce(0, -10);
	s2.applyForce(-10, 0);
	s3.applyForce(10, 0);

	if (kb.pressing('up')) s0.vel.y = -5;
	if (kb.pressing('down')) s1.vel.y = 5;
	if (kb.pressing('left')) s2.vel.x = 5;
	if (kb.pressing('right')) s3.vel.x = -5;
	// noLoop();
}
