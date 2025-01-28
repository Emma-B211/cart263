// 1: create three ellipses - each one has a different color,size and position
//DO NOT USE OBJECTS
//DO NOT USE ARRAYS
//DO NOT USE LOOPS
//NO ANIMATION
//DO NOT USE CUSTOM FUNCTIONS
//ONLY use  variables for: x,y,width,height and color (r,g,b)
//DO NOT USE RANDOM
//REUSE THE SAME VARIABLES FOR EACH ELLIPSE

function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup"); 
  //A: start in setup:
  //1:
  let x = 40;
  let y = 50;
  let w = 40;
  let h = 40;
  let r = 150;
  let g = 60;
  let b = 125;

  fill(r, g, b);
  ellipse(x, y, w, h, r, g, b);

  //REUSE THE SAME VARIABLES
  x+=40;
  y+=40;
  w+=10;
  h+=10;
  r+=50;

  fill(r, g, b);
  ellipse(x, y, w, h, r, g, b);

  //REUSE THE SAME VARIABLES
  b+=50;
  x+=60;
  y+=60;
  w+=20;
  h+=20;
  fill(r, g, b);
  ellipse(x, y, w, h, r, g, b);


}

function draw() {}
