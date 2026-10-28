let FG_COLOR = "#FFFFFF"
let BG_COLOR = "#FFFFFF"
let STROKE_COLOR = "#000000"
let DECORATION_COLOR = FG_COLOR
let DECORATION_DOT_COLOR = "#000000"

const palettes = [
	["red", "white", "black"],
	["black", "red", "white"],
	["white", "red", "black"],
    ["red", "black", "white"],
    ["white", "black", "red"],
	["black", "white", "red"]
]

const setPalette = (palette) => {
	[FG_COLOR, BG_COLOR, STROKE_COLOR] = palette
	DECORATION_COLOR = FG_COLOR
	DECORATION_DOT_COLOR = BG_COLOR
}

function setup() {
	createCanvas(600, 600);
    setPalette(random(palettes));
  
    background(BG_COLOR);
	stroke(STROKE_COLOR)
	strokeWeight(3)
}

function draw() {
    fill(FG_COLOR)
    circle(mouseX,mouseY,30)
}


