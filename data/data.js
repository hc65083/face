let myData
let colors = ["pink", "blue"]

async function setup() {
  createCanvas(800, 500);
  myData = await loadJSON('data.json');
  console.log(myData)
}

function draw() {
  background(220);
  
  for (let i = 0; i < myData.length; i++) {
    let type = myData[i]
    let x = (i+1) * 50
    let y
    let num = map(type.size, 0, 100, 3, 7)
    let petalLen = 0
    

    if (type.size === "s") {
      petalLen = height * 0.1 // shorter
    } 

    else if (type.size === 'n') {
      petalLen = height * 0.2 // longer
    }

  drawFlower(x, y, petalLen, petal, type.filament)
  }
}

function drawFlower(x, y, petalLen, spread, filament) {

  // petals
  push()
  translate(x, y)
  let slice = TWO_PI / num
  let gap = slice * 0.3 // small gap between petals
  
  for (let i = 0; i < num; i++) {
    let petal = slice - gap
    push()
    rotate(i * slice)
    translate(5, 0) // dist from center
    fill(c)
    arc(0,0, 64, 64, -petal/2, petal/2)
    pop()
  }
  pop()

  // center filament
  push()
  translate(x,y)
  drawfilament(filament)
  pop()
}

function drawStem(x, y, num, c, filament) {
  let waviness = 10   
  let waveFreq = 0.05 
  
  // stem
  push()
  translate(x, y)
  noFill()          // without this, the wavy line gets filled in like a shape
  stroke('#4F7A3A')
  strokeWeight(4)
  beginShape()
  for (let i = 0; i <= petalLen; i += 5) {
    let wave = sin(i * waveFreq) * waviness
    vertex(wave, i)
  }
  endShape()
  pop()
  
  // spread
  let spread = 20
  push()
  translate(x, y)
  for (let i = 0; i < num; i++) {
    let d = petalLen * (i + 1) / (num + 1)   // how far down the stem
    let wave = sin(d * waveFreq) * waviness  // where the stem is at that height
    push()
    translate(wave, d)
    if (i%2===0) scale(-1,1)
    translate(8, 0)    // dist from mid
    rotate(radians(-60))
    fill(c)
    rect(0, 0, spread, spread, 0, spread / 2, spread / 2, spread / 2)
    // circle(0,0,20)
    pop()
  }

  pop()

  // filament
  push()
  translate(x,y)
  drawFilament(filament)
  pop()
}

function drawFilament(filament) {
  if (filament === 'e') {
    fill("LightYellow")
    circle(0,0,20)
  } 

  else {
    fill("LightYellow")
    circle(0,0,30)
  }

}

