let group;
let spriteAbove, spriteBelow, spriteLeft, spriteRight;

function setup() {
	new Canvas(400, 400);
	group = new Group();
	spriteAbove = new Sprite(0, -1, 100);
	spriteBelow = new Sprite(0, height + 1, 100);
	spriteLeft = new Sprite(-1, 0, 100);
	spriteRight = new Sprite(width + 1, 0, 100);

	group.push(spriteAbove);
	group.push(spriteBelow);
	group.push(spriteLeft);
	group.push(spriteRight);
}

function draw() {
	background(220);
	group.cull(0);
	console.log(`FRAME ${frameCount}
Above: ${group.includes(spriteAbove)}
Below: ${group.includes(spriteBelow)}
Left: ${group.includes(spriteLeft)}
Right: ${group.includes(spriteRight)}`);
	noLoop();
}
function mousePressed() {
	redraw();
}
