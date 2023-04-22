let player, wall;

function setup() {
	new Canvas(500, 100);

	wall = new Sprite(250, 50, 30, 100, 's');
	wall.color = 'purple';
	player = new Sprite(50, 50);
}

function draw() {
	clear();
	player.moveTowards(mouse);

	if (kb.pressing('space')) {
		player.color = 'purple';
		player.overlaps(wall);
	} else {
		player.color = 'orange';
		player.collides(wall);
	}
}
