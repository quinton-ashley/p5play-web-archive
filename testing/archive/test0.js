new Q5('global');

function setup() {
	new Canvas(200, 200);

	let balls = new Group();
	balls.x = 100;
	balls.y = 100;
	balls.d = 20;
	balls.overlap(balls);
	balls.amount = 8;

	let directions = ['up', 'down', 'left', 'right', 'upLeft', 'upRight', 'downLeft', 'downRight'];

	for (let i = 0; i < balls.length; i++) {
		balls[i].move(80, directions[i], 1);
	}
}

function draw() {
	background(0);

	fill(255);
	ellipse(100, 100, 100, 100);
}
