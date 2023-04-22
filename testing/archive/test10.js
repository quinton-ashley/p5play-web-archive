let player, gems;

function setup() {
	createCanvas(160, 456);

	player = new Sprite();

	player.overlap(gems, collect);

	gems = new Group();
	gems.diameter = 10;
	gems.x = () => random(0, width);
	gems.y = () => random(0, height);
	gems.amount = 80;
}

function collect(player, gem) {
	gem.remove();
}

function draw() {
	clear();
	// player.moveTowards(mouse.x, mouse.y);

	if (player.mouse.hovers()) {
		player.color = 'red';
	}

	if (gems.mouse.hovers()) {
		gems.color = 'green';
	}
}
