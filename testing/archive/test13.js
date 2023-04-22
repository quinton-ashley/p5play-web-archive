let img;
function setup() {
	createCanvas(100, 100);
	img = createImage(100, 100);
	img.loadPixels();
	noLoop();
}
/**
 * @param {p5.Vector} v
 * @param {number} n
 */
function vectorPow(v, n) {
	const r = v.mag();
	const theta = v.heading();
	const rn = Math.pow(r, n);
	const tn = theta * n;
	return createVector(rn * cos(tn), rn * sin(tn));
}
/**
 * @param {p5.Vector} v1
 * @param {p5.Vector} v2
 * @description https://www.nagwa.com/en/explainers/597140740835/
 */
function vectorDiv(v1, v2) {
	const [a, b] = v1.array();
	const [p, q] = v2.array();
	return createVector(a * p + b * q, b * p - a * q).div(sq(p) + sq(q));
}
/**
 * @param {p5.Vector} z
 * @param {(x:p5.Vector) => p5.Vector} p
 * @param {(x:p5.Vector) => p5.Vector} dp
 */
function getLastPosition(z, p, dp) {
	for (let index = 0; index < 30; index++) {
		const newz = z.copy().sub(vectorDiv(p(z), dp(z)));
		if (newz.equals(z)) {
			return newz;
		}
		z = newz;
	}
	return z;
}
const f = (/** @type {p5.Vector} */ x) => vectorPow(x, 4).sub(1); // z^4-1
const df = (/** @type {p5.Vector} */ x) => vectorPow(x, 3).mult(4); // 4z^3
function plot() {
	for (let i = 0; i < img.width; i++) {
		for (let j = 0; j < img.height; j++) {
			const p = getLastPosition(createVector(map(i, 0, img.width, -2, 2), map(j, 0, img.height, -2, 2)), f, df);
			const r = map(sin(p.x), -1, 1, 0, 255);
			const g = map(sin(p.y), -1, 1, 0, 255);
			const b = map(p.mag(), 0, 2, 0, 255);
			img.set(i, j, color(r, g, b));
		}
	}
}

function draw() {
	background(100);
	plot();
	img.updatePixels();
	image(img, 0, 0);
}
