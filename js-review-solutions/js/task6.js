/* 6 FOR LOOP II
AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
//PLAYING WITH FOR LOOP AND TEXT

//1 make a text object to hold the string "test" , fill white , textSize 28 ,center of screen
//2 make a for loop to repeat 10 times: start at 0 and finish at 9
--> in tht loop: output  the incrementor variable as text , as well use the incrementor to 
offset the xposition of the text (i.e. if i ==1 then xpos ==20, if i ==2 xpos ==40 etc..)

//3 make another for loop to repeat 15 times: start at 15 end at 1
--> in tht loop: output  the decrementor variable as text , as well use the decrementor to 
offset the yposition of the text (i.e. if i ==1 then ypos ==20, if i ==2 ypos ==40 etc..)

//4 USING THE SAME FOR LOOP AS (3) can you make the the greatest number start at the 
// top and the smallest output at the bottom?


//6: use a nested for loop to draw a grid of evenly spaced circles in for loop...
//6 A: make it work for a circle size that is a multiple of 5 (up to 100) - just by changing one variable.
//6 B: make all circles the same random color  - only switches on page reload
//6 C: have this random color change when the user presses SPACE 
//6 D: on mouse click change the circles to squares if they were circles and to circles if they were squares
//6 E: on load make every even row circles and every odd row squares. Switch on mous press
*/

let randomColor = {};
let isCircle = true;
let isEven = true;

function setup() {
  createCanvas(500, 500);
  background(0);
  console.log("running in the setup"); 
  textSize(28);
  randomColor = {
    r: random(255),
    g: random(255),
    b: random(255),
  };

}

function draw() {
  background(0);
  fill(255);
  text("test",width/2,height/2);
   for(let i = 0; i< 10; i++){
    text(i,width/12+(i*20),height/12);
   }


   for(let i =0; i<15; i++){
    text(i,width/12,(height/12+(i*30)));
   }

}

