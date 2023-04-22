function setup() {
	new Canvas();
}

function draw() {
	clear();
	if (touches) {
		for (let touch of touches) {
			ellipse(touch.x, touch.y, 200, 200);
		}
	}
}
