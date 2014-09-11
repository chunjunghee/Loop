function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill()
  
  stroke(255, 0, 0);
  
/*
  var x;

  x = 100;9
  ellipse(x * 150, 100, 50, 50);

  x = 250;
  ellipse(x * 150, 100, 50, 50);

  x = 300;
  ellipse(x * 150, 100, 50, 50);
  */


function draw() {
  background(128, 0, 64);

  ellipse(320, 240, mouseX, mouseY);
}