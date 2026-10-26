let coral = "#fc5347"
let c = 30;

function setup() {
	createCanvas(600, 600);
  
    background("white");
	
	strokeWeight(3)
}

function draw() {

	if (dist(230,282,mouseX,mouseY) === 0)
	for (let i = 0; i <10; i++) {
		c--;
	}

	stroke("black")
	fill("white")
    ellipse(230,282,70,50)
    
    fill("white")
	stroke("black")
    ellipse(230,287,70,37)

    fill(coral)
	stroke("black")
    ellipse(230,287,30,32)
  
	
    fill("white")
	stroke("white")
    ellipse(238,286,15,12)

	fill("white")
	stroke("white")
    ellipse(265,289,15,12)
  
}


