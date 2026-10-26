let opacity = 255

// circles
let circleNumSlider
let circleGapSlider

// lines 1
let lines1NumSlider
let lines1LenSlider
let lines1DistSlider
let lines1SpinSlider
let lines1ColorPicker
let lines1StrokeWeightSlider
let showLines1Checkbox

// lines 2
let lines2NumSlider
let lines2LenSlider
let lines2DistSlider
let lines2SpinSlider
let lines2ColorPicker
let lines2StrokeWeightSlider
function setup() {
  createCanvas(400, 400);
  strokeWeight(30)
  strokeCap(PROJECT)
  // circles
  createP('Circles')
  createElement('label', 'num')
  circleNumSlider = createSlider(1,10, 1) // min, max, default, step
  createElement('label', 'gap')
  circleGapSlider = createSlider(50,150, 10)

  // lines 1
  createP('Lines 1')
  createElement('label', 'num')
  lines1NumSlider = createSlider(1,12)
  lines1LenSlider = createSlider(30, 150, 60)
  lines1DistSlider = createSlider(0, 150, 100)
  lines1SpinSlider = createSlider(0, 360, 90, 5)
  lines1ColorPicker = createColorPicker("#ffff00")
  lines1StrokeWeightSlider = createSlider(10, 60, 30)
  showLines1Checkbox = createCheckbox('show', true);

  // lines 2
  createP('Lines 2')
  createElement('label', 'num')
  lines2NumSlider = createSlider(1,12)
  lines2LenSlider = createSlider(30, 150, 60)
  lines2DistSlider = createSlider(0, 150, 100)
  lines2SpinSlider = createSlider(0, 360, 0, 5)
  lines2ColorPicker = createColorPicker("#00ffff")
  lines2StrokeWeightSlider = createSlider(10, 60, 30)

  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('myCanvas', 'jpg');
  })
}

function draw() {
  background(0);
  translate(width/2, height/2)
  if (showLines1Checkbox.checked()) {
    drawLines()
  }
  
  drawLines2()
  drawCircles()
}

function drawCircles() {
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value()
  for(let i=0; i < num; i++) {
    push()
    noFill()
    strokeWeight(10)
    stroke(255,0,255,opacity)
    circle(0,0, (i+1) * gap)
    pop()
  }
}

function drawLines() {
  let num = lines1NumSlider.value()  // slider input
  let len = lines1LenSlider.value() //// slider input
  let c = color(lines1ColorPicker.value())
  c.setAlpha(opacity)
  for(let i = 0; i < num; i++) {
    push()
    strokeWeight(lines1StrokeWeightSlider.value())
    stroke(c) // color picker
    // translate(100,0)
    rotate(i/num * TWO_PI)
    translate(lines1DistSlider.value() ,0) // dist from center
    rotate(radians(lines1SpinSlider.value())) // slider input
    line(-len/2,0,len/2,0)
    
    pop()
  }
  
}

function drawLines2() {
  let num = lines2NumSlider.value() // slider input
  let len = lines2LenSlider.value() // slider input
  let c = color(lines2ColorPicker.value())
  c.setAlpha(opacity)
  for(let i = 0; i < num; i++) {
    push()
    stroke(c)
    strokeWeight(lines2StrokeWeightSlider.value())
    rotate(i/num * TWO_PI)
    translate(lines2DistSlider.value(), 0) // distance from the center
    rotate(-radians(lines2SpinSlider.value())) // slider input    
    line(-len/2,0,len/2,0) 
    pop()
  }
}