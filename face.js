let SKIN = "#f0ddc6"

function setup() {
	createCanvas(600, 600);
  
    background("white");
	stroke("black")
	strokeWeight(3)
}

function draw() {

    fill("black")
    ellipse(300,320,450,550)
  
    fill(SKIN)
    ellipse(300,300,300,400)
    //nose
    fill(0,0,0,0)
    triangle (320,350,280,350,300,300)  
  
    //eyes
  
    fill(SKIN)
    ellipse(230,280,70,50)
    ellipse(380,280,70,50)
    
    fill("white")
    ellipse(230,287,70,37)
    ellipse(380,287,70,37)

    fill("brown")
    ellipse(230,287,30,32)
    ellipse(380,287,30,32)
  
    fill("white")
    ellipse(236,286,11,11)
    ellipse(386,286,11,11)
  
    //mouth
    fill(0,0,0,0)
    arc(340,400,40,40,-.3,3.2)

    //hair
    fill("black")
    arc(190,140,250,200,-.5,2.2)
    arc(390,140,200,200,.4,-2.2)
}


