if (kb.pressing('up')) {
	player.direction = 'up';
	if (kb.pressing('left')) player.direction += 'left';
	if (kb.pressing('right')) player.direction += 'right';
} else if (kb.pressing('down')) {
	player.direction = 'down';
	if (kb.pressing('left')) player.direction += 'left';
	if (kb.pressing('right')) player.direction += 'right';
} else if (kb.pressing('left')) {
	player.direction = 'left';
} else if (kb.pressing('right')) {
	player.direction = 'right';
} else {
	player.speed = 0;
}
