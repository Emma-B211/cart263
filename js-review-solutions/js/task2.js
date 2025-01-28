// 1: create three ellipses - each one has a different color,size and position
//DO NOT USE OBJECTS
//DO NOT USE ARRAYS
//DO NOT USE LOOPS
//NO ANIMATION
//ONLY use  variables for: x,y,width,height and color (r,g,b)
//DO NOT USE RANDOM

/* (SAME AS 1 - BUT NOW MAKE A CUSTOM FUNCTION usign the following signature:: )

function drawEllipse(x,y,w,h,r,g,b){}

// write the body of the functions
then all you have in your setup()
is three calls to drawEllipse(...)
*/

function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup"); 


  //A: start in setup:
  //1A:


  drawEllipse(40,50,40,40,150,60,125);
  drawEllipse(80,90,50,50,160,60,125);
  drawEllipse(140,150,70,70,160,60,175);


}

function drawEllipse(x,y,w,h,r,g,b){
  fill(r, g, b);
  ellipse(x, y, w, h, r, g, b);

}

function draw() {}
