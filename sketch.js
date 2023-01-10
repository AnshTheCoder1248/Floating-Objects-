let angle = 0;
function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);


}

function draw() {
  background(0);

  //Surface
  translate(60,300);
  fill(0,255,255);
  noStroke();
  plane(250,9);

  // OBJECT 1
  
  translate(-50,-102);
  fill(255,172,28);
stroke(0,255,255);
  rotate(45);
  push();
  strokeWeight(5);
  rotateX(angle);
  box(200,50);
  pop();


  //Object 2
  translate(-210,-50);
  fill(115,147,179);
  strokeWeight(5)
  stroke(255,255,255);
  push();
  rotate(302);
  rotateY(angle);
  cone(50,250);
  pop();
// Object 3
translate(-175,-150);
push();
rotate(45);
rotateX(angle);
strokeWeight(5);
stroke(255,172,28);
fill(112,128,144);
cylinder(100,50);
pop();


  // Object 3 Surface 2 
  translate(-115,-50);
  fill(0,255,255);
noStroke();
rotate(130);
  plane(250,9);

angle = angle + 1.0;
}

