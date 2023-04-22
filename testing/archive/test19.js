let group;
let spriteInGroup;
let other;

function setup() {
	new Canvas(400, 400);
	group = new Group();
	spriteInGroup = new Sprite(200, 200, 100, 100, 'dynamic');
	group.add(spriteInGroup);
	group.moveTo(100, 100, 1);
	other = new Sprite(300, 200, 100, 100, 'dynamic');
	other.addSpeed(1, 180);
}

function draw() {
	background(220);
	console.log(
		`FRAME: ${frameCount}
group.collides(other): ${group.collides(other)}
group.colliding(other): ${group.colliding(other)}
group.collided(other) :${group.collided(other)}
spriteInGroup.collides(other): ${spriteInGroup.collides(other)}
spriteInGroup.colliding(other): ${spriteInGroup.colliding(other)}
spriteInGroup.collided(other): ${spriteInGroup.collided(other)}
other.collides(group: ${other.collides(group)}
other.colliding(group): ${other.colliding(group)}
other.collided(group): ${other.collided(group)}`
	);
	noLoop();
}
function mousePressed() {
	redraw();
}
