/* WELCOME TO TASK 2 CART 263 */

window.onload = setup;

function setup () {
    console.log("go task 2");

 
/* GIVEN * : An object containing the current settings for drawing 
*  THESE  presets will need to be modified ... 
*/  
    let currentPresets = {
        color: "red",
        stroke: 1,
        shape: "square" && "circle",
        borderRadius: "0px",
        isDrawing: true,
        drawingMode: "mouse-move",
        opacity: 1
      };

/* GIVEN *  a reference to the div in which we will allow for drawing ... 
*
*/
let pCanvas = document.getElementById("mouseCanvas");

/* GIVEN *  the event listener to detect if the mouse is moving in the div 
* with id `mouseCanvas`. The callback function is addAPoint
*
*/
  pCanvas.addEventListener("mousemove", addAPoint);


/* GIVEN *  this function when called will check if drawing 
* is true and the drawing mode is mouse-move then it will call the function to create a new point
*
*/

function addAPoint(event) {
    if (currentPresets.isDrawing === true && currentPresets.drawingMode === "mouse-move") {
      createNewDrawingPoint(event.clientX, event.clientY);
    }
  }


 /* GIVEN *  the event listener to detect if the mouse is being clicked in the div 
  * with id `mouseCanvas`
  * TO DO *
  * WILL HAVE DUAL FUNCTIONALITY (DEPENDENT ON THE DDRAWING MODE)
  * EITHER WILL SWITCH DRAWING OFF (LIKE LIFTING UP YOUR PEN)
  * OR
  * WILL ADD A POINT TO THE CANVAS 
  
  */
  pCanvas.addEventListener("click", function (event) {
    if (currentPresets.drawingMode === "mouse-move") {
      //turn drawing on / off
      // TO DO
     
    }
    //the click is now the drawing mode :)
    else {
      // TO DO
    }
  });


/* GIVEN * function to create a new drawing point.
*
*/
function createNewDrawingPoint(mouseX, mouseY) {
    //get the mouse canvas
    let pCanvas = document.getElementById("mouseCanvas");
    // get the RENDERED coordinates
    let renderedCoordinates = pCanvas.getBoundingClientRect();

    //create a new DIV
    let newDiv = document.createElement("div");
    newDiv.classList.add("point");

    //calculate the point to draw on the canvas
    let offsetX = Math.floor(mouseX - renderedCoordinates.x);
    let offsetY = Math.floor(mouseY - renderedCoordinates.y);
 

    // set the left and top
    newDiv.style.left = offsetX + "px";
    newDiv.style.top = offsetY + "px";

    //add the dot to the canvas
    pCanvas.appendChild(newDiv);


    //set the stroke width
    newDiv.style.width = currentPresets.stroke + "px";
    newDiv.style.height = currentPresets.stroke + "px";

        /**** NOTE HOW THE PRESETS ARE USED TO ASSIGN THE STYLE */
    //also set the border radius
    newDiv.style.borderRadius = currentPresets.borderRadius;
    //color
    newDiv.style.background = currentPresets.color;
    //opacity
    newDiv.style.opacity = currentPresets.opacity;
  }

  /**************************BUTTONS************************* */

  /*A:: COLOR BUTTONS ********************************************/
  /* TO DO: 
  *  1: Access each color button and assign an event listener to listen for the click event
  *  2:Write a callback function - that when a specific color button is clicked,
  *  access its id - and use the id to set the current drawing color (currentPresets.color)
  *  3: Finally access all the current points drawn (hint: they all have the class name `point`)
     and change their current background color to the selected color.
  */
  //brings color buttons into existence as a variable
let colorButtons = document.querySelectorAll(".color-button");
//this for loop applies to each button
//i acts as a variable representing each buttoon that gets put in as the array of the function, increasing each time
for (let i = 0; i < colorButtons.length; i++) {
colorButtons[i].addEventListener("click", function (e) {
//used to identify the clicked colorbuttons id/name
console.log(colorButtons[i].getAttribute("id"))
//the current presets color variable exists and gains the same color id as the clicked color button
currentPresets.color = colorButtons[i].getAttribute("id")
//checking this
console.log(currentPresets.color)
//now changing all the points to be the same color
//need a variable representing them all
let points = document.querySelectorAll(".point")
//for loop targetting each point in the array
for (let point of points) {
//the background/color is equal to the same color as our current preset color
point.style.background = currentPresets.color
}
});
}
   
   /*B:: STROKE BUTTON ********************************************/
  /* TO DO: 
  *  1: Access the stroke button and assign an event listener to listen for the click event
  *  2: Write a callback function - that when the stroke button is clicked, access  the variable
  *   currentPresets.stroke - and check if it is < 10  - if it is add by 1, else set it to 1.
  *   Update the value in the button
  *  3: Finally access all the current points drawn (hint: they all have the class name `point`)
     and change their current stroke value to the updated value.
  */
   
let strokeButton = document.querySelector("#change-stroke-button");

strokeButton.addEventListener('click',clickStroke)

function clickStroke(){
let pointValue = document.getElementsByClassName('point');
console.log(pointValue)
if(currentPresets.stroke<10){
currentPresets.stroke+=1
} else {
currentPresets.stroke = 1
}
for(let i = 0; i < pointValue.length; i++){
pointValue[i].style.width = currentPresets.stroke + "px";
pointValue[i].style.height = currentPresets.stroke + "px";
}
console.log(currentPresets.stroke);
strokeButton.querySelector('p').textContent=currentPresets.stroke;
}

  /*C:: SHAPE BUTTON ********************************************/
  /* TO DO: 
  *  1: Access the shape and assign an event listener to listen for the click event
  *  2: Write a callback function - that when the shape button is clicked, access the variable
  *   currentPresets.shape - and check if it is "circle" or "square"  
  *   - if it is "square": set the currentPresets.shape  to "circle" and the opposite (circle to square)
  *   Upate currentPresets.borderRadius to "0px" if the updated preset is square and to "5px" otherwise
  *   Update the value in the  shape button as well
  *  3: Finally access all the current points drawn (hint: they all have the class name `point`)
     and change their current border-radius value to the updated value.
  */
     let shapeButton = document.querySelector("#change-shape-button");
shapeButton.addEventListener("click",squareShape)

function squareShape(e){
  console.log(e);
  changeShape();
  function changeShape(){
    const points= document.querySelectorAll((".point"))
if(currentPresets.shape === "square"){
  currentPresets.shape="circle";
  currentPresets.borderRadius="5px";
 shapeButton.innerHTML= "<p>circle</p>";
  //document.querySelectorAll(".point");
for (let i = 0; i < points.length; i++){
  document.querySelectorAll(".point")[i].style.borderRadius="5px"

}
} else{
  currentPresets.shape="square";
  currentPresets.borderRadius="0px";
  shapeButton.innerHTML="<p> square </p>"
  //document.querySelectorAll(".point")
  for (let i = 0; i < points.length; i++){
    document.querySelectorAll(".point")[i].style.borderRadius="0px"
  
  }

}
  }

};


   /*D:: CHANGE DRAWING MODE ********************************************/
  /* TO DO: 
  *  1: Access the shape and assign an event listener to listen for the click event
  *  2: Write a callback function - that when the mode button is clicked, access the variable
  *   currentPresets.drawingMode - and check if it is "mouse-move" or "mouse-click"  
  *   - if it is "mouse-move": set the currentPresets.drawingMode  to "mouse-click" and the opposite (mouse-click to mouse-move)
  *   Update the value in the  shape button as well
  *  3: FILL IN THE CONDITION IN THE GIVEN EVENT listener for clicking the mouse and add the codeto add a point if the drawing mode is mouse-click
  *  OR 
  *   FILL IN THE CONDITION IN THE GIVEN EVENT listener for clicking the mouse and add the code to  toggle the drawing mode:
  *   turn drawing off it is on or on if it is off (when the drawing mode is mouse-move)
  */
  let modeButton = document.querySelector("#change-mode-button");

  modeButton.addEventListener("click", function () {
  if (currentPresets.drawingMode === "mouse-move") {
  currentPresets.drawingMode = "mouse-click";
  modeButton.textContent = "Mouse Click";
  } else {
  currentPresets.drawingMode = "mouse-move";
  modeButton.textContent = "Mouse Move";
  }
  });
  
  pCanvas.addEventListener("click", function (event) {
  if (currentPresets.drawingMode === "mouse-move") {
  currentPresets.isDrawing = !currentPresets.isDrawing;
  } else {
  createNewDrawingPoint(event.clientX, event.clientY);
  }
  });

   /*E:: OPACITY BUTTON ********************************************/
  /* TO DO: 
  *  1: Access the opacity button and assign an event listener to listen for the click event
  *  2: Write a callback function - that when the opacity button is clicked, access  the variable
  *   currentPresets.opacity - and check if it is > 0.0  - if it is  then decrement it by 0.1, else set it to 1.0.
  *   Update the value in the button
  *  3: Finally access all the current points drawn (hint: they all have the class name `point`)
     and change their current opacity value to the updated value.
  */
//1:CHANGE OPACITY WHEN BUTTON CLICKED AND RESET ONCE BELLOW 0
let opacityButton = document.querySelector("#change-opacity-button");
document.querySelector("#change-opacity-button").addEventListener("click", changeOpacity)

function changeOpacity(e) {
console.log("opacity clicked");
console.log(currentPresets.opacity);
console.log("Now: " + currentPresets.opacity.toFixed(1));
if (currentPresets.opacity > 0.1) {
currentPresets.opacity -= 0.1 //lower opacity by 0.1
} else {
currentPresets.opacity = 1.0 //reset back to 1 once it reaches bellow 0
}

//2: UPDATE BUTTON
opacityButton.querySelector('p').textContent=currentPresets.opacity.toFixed(1);

//3:CHANGE CURRENT POINTS
// access all elements with the class "point"
let points = document.querySelectorAll(".point");

// Loop through each element and update its opacity
points.forEach(point => {
point.style.opacity = currentPresets.opacity;
});

console.log(`Updated opacity: ${currentPresets.opacity}`);
}


  /*F:: ERASE BUTTON ********************************************/
  /* TO DO: 
  *  1: Access the erase button and assign an event listener to listen for the click event
  *  2: Write a callback function - that when the erase button is clicked, 
  *  remove all points (hint: they all have the class name `point`) from the drawing div
  */
  document.getElementById("change-erase-button").addEventListener("click", function () {

    console.log("erase button clicked");
    
    let points = document.querySelectorAll(".point");
    points.forEach((point) => {
    point.remove();
    });
    });
  }
 //end setup
