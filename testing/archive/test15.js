let sprite;

function setup() {
	new Canvas(250, 100, 'pixelated');

	sprite = new Sprite();
	sprite.ani = spriteArt(`
wwwwwww
wbwwwbw
wwbwbww
wwwbwww
wwbwbww
wbwwwbw
wwwwwww`);
}

function draw() {
	clear();

	// press a number key to change the scale
	for (let i = 0; i < 10; i++) {
		if (kb.presses(i + '')) {
			// sets the x and y scale to the same value, uniform scaling
			sprite.scale = i;
		}
	}

	// set x and y scale separately for non-uniform scaling
	if (kb.presses('x')) {
		sprite.scale.x = random(0.1, 6);
	}
	if (kb.presses('y')) {
		sprite.scale.y = random(0.1, 6);
	}

	// double in size!
	// note this way only works for uniform scaling
	if (kb.presses('d')) {
		sprite.scale *= 2;
	}

	// press the mouse to see the sprite collider
	allSprites.debug = mouse.pressing();
}

// Note when the sprite's collider is scaled it removes
// the older collider and "teleports" the new collider
// into existence, there is no way to smoothly scale
// the collider, it just appears at the new scale

// Note if you apply non-uniform scaling to an image
// and then go back to applying uniform scaling
// the image gets a little messed up for some reason
// possible p5.js scale function bug?
