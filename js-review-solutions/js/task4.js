/* 3 BOOLEANS:: MORE...
//AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
/* create 3 rectangles ecah 1 is the height of the canvas and 1/3 of the width
position the first rectangle in the first third, the second in the scond third and the third at the end
nostroke and each rectangle should be a different varying color of blue.

//NEXT: if the mouse is over the 1st rectangle change the color of the first rectangle to white
//SAME for other TWO
//***if the mous is NOT over a given rectangle 
// make sure that those rectangles have their original color***
// USE objects for the color...
*/


let colorOne = {r:0,g:125,b:125}
let colorTwo = {r:0,g:125,b:255}
let colorThree = {r:0,g:255,b:255}

function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup");
}

function draw() {
  //<<WHAT ABOUT TOP OR BOTTOM>>>
   if(mouseY>height || mouseY<0){

    colorOne.r = 0
    colorOne.g=125
    colorOne.b =125
    
    colorTwo.r = 0;
    colorTwo.g =125;
    colorTwo.b = 255;

    colorThree.r = 0;
    colorThree.g = 255;
    colorThree.b = 255;
  
}
// FIRST THIRD
  else if(mouseX > 0 && mouseX < (width) / 3){
     colorOne.r = 255
     colorOne.g=255
     colorOne.b =255
   
    colorTwo.r = 0;
    colorTwo.g =125;
    colorTwo.b = 255;

    colorThree.r = 0;
    colorThree.g = 255;
    colorThree.b = 255;

  }
  //MIDDLE
  else if (mouseX > width / 3 && mouseX < (2 * width) / 3) {
    colorOne.r = 0
    colorOne.g=125
    colorOne.b =125

    colorTwo.r = 255;
    colorTwo.g =255;
    colorTwo.b = 255;
 

    colorThree.r = 0;
    colorThree.g = 255;
    colorThree.b = 255;
  }

  //RIGHT
  else if(mouseX > (2 * width) / 3 && mouseX < width){
    colorOne.r = 0;
    colorOne.g=125;
    colorOne.b =125;
    
    colorTwo.r = 0;
    colorTwo.g =125;
    colorTwo.b = 255;

    colorThree.r = 255;
    colorThree.g = 255;
    colorThree.b = 255;

  }

  //HANDLE CASE FOR TWO FAR OFF RIGHT OR LEFT
  else if(mouseX>width || mouseX<0){
   
    colorOne.r = 0;
    colorOne.g=125;
    colorOne.b =125;

    colorTwo.r = 0;
    colorTwo.g =125;
    colorTwo.b = 255;

    colorThree.r = 0;
    colorThree.g = 255;
    colorThree.b = 255;
}

//DRAW
  background(0);
  noStroke();

  fill(colorOne.r,colorOne.g, colorOne.b);
  rect(0, 0, width / 3, height);

  fill(colorTwo.r, colorTwo.g, colorTwo.b);
  rect(width / 3, 0, width / 3, height);
  

  fill(colorThree.r, colorThree.g, colorThree.b);
  rect((2 * width) / 3, 0, width / 3, height);
}
