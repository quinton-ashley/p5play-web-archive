let g0, g1, player, wall;

function setup() {
	new Canvas(500, 100);

	g0 = new Group();
	g1 = new Group();

	wall = new g0.Sprite(250, 50, 30, 400, 's');
	wall.color = 'purple';
	player = new g1.Sprite(50, 50);
}

function draw() {
	clear();
	player.moveTowards(mouse);

	if (kb.pressing('space')) {
		player.color = 'purple';
		g0.overlaps(g1);
	} else {
		player.color = 'orange';
		g1.collides(g0);
	}
}
