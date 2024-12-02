var sandy=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(67, 53,171);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle

  stroke(206,162,253) // an RGB color for the circle's border
  strokeWeight(3);
  fill(255,sandy,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(255,sandy,sandy,255); // center of canvas, 20px dia
  
  fill(219,214,255,mouseY);
  ellipse(mouseX,mouseY,50,50);
}



function mousePressed() {

if(sandy>=500){
  sandy=0
}else{
  sandy=sandy+6;
}


}



