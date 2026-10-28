let gridSize = 40
let cols, rows
function setup() {
  createCanvas(800, 800);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}


function draw() {
  background("black");
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize/2
      let y = j * gridSize + gridSize/2
      
      let upValue = map(sin(frameCount*0.1+i+j), -1, 1, -10, 10)
      push()
        translate(0,upValue) // wave
        translate(x, y) 

        //circle
        push()
        fill("#ffe252")
        ellipse(0,0,gridSize*5, gridSize*2) 
        // translate (x,y,gridSize*2)
        pop()
      
        // mouth
        push()
        fill("black")
        triangle(0,0+gridSize*0.1, 0+gridSize*2, gridSize*0.1,gridSize*0.1,gridSize*2)
        rotate(frameCount*0.1)
        pop()
      
        // eyes
        push()
        fill("black")
        let size = map(sin((frameCount*0.1+i+j)), -1, 1, gridSize*2, gridSize*2)
        circle(0+size*.3,0-size*.3, size*.2) 
        pop()

      pop()
      
    }
  }
}
