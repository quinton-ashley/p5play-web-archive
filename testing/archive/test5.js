let player, ground;

function setup() {
	new Canvas(400, 400);
	world.gravity.y = 10;

	ground = new Sprite(200, 300, 400, 100, 's');
	ground.color = 'green';

	// player = new Sprite([
	// 	[200, 100],
	// 	[50, 50],
	// 	[100, 50],
	// 	[200, 100]
	// ]);
	// player = new Sprite(200, 100, [
	// 	[100, 40],
	// 	[-100, 40],
	// 	[0, -80]
	// ]);
	player = new Sprite(200, 100, 20, 'pentagon');
	player.color = 'red';

	player.addCollider(50, 0, 50);
	player.collider = 'static';

	// player.addCollider(50, 0, 50, 'pentagon');
	// player.addCollider(40, 40, [
	// 	[100, 40],
	// 	[-100, 40],
	// 	[0, -80]
	// ]);
}

function draw() {
	clear();

	if (mouse.presses()) {
		new Sprite(mouse.x, mouse.y, 20);
	}
}
