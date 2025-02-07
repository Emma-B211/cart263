setup_B();
/** THEME: CHAOS  */
function setup_B() {
  console.log("in b");
  /**************************************************** */
  //get the buttons
  activateButtons_B(`#TEAM_B`, "ani_canvB");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_B(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");

    // Create the GO button
    let button = document.createElement("div");
    button.classList.add("TEAM_A_box");
    button.textContent = "GO";
    parentCanvas.appendChild(button);

    let isAnimating = false;
    let squares = [];
    let aniRef = null;
    let aniSpeed = 1;

    // Function to create and center squares
    function createSquare() {
      let offset = 30;
      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          let square = document.createElement("div");
          square.classList.add("TEAM_A_square");
          square.style.width = '20px';
          square.style.height = '20px';
          square.style.position = 'absolute'; // Position squares absolutely

          // Calculate position for each square in the grid
          square.style.left = (offset * i) + "px";
          square.style.top = (offset * j) + "px";

          parentCanvas.appendChild(square);
          squares.push(square); // Add square to the array
        }
      }
    }

    // Create the grid of squares
    createSquare();

    // Handle the start/stop functionality for the animation
    button.addEventListener("click", animationHandler);

    function animationHandler() {
      if (!isAnimating) {
        // Start animation: show squares and begin animation
        squares.forEach(square => square.style.display = "block");
        isAnimating = true;
        this.textContent = 'STOP';
        aniRef = window.requestAnimationFrame(animate);
      } else {
        // Stop animation: cancel the animation frame
        cancelAnimationFrame(aniRef);
        isAnimating = false;
        this.textContent = 'GO';
      }
    }

    // The animation loop for resizing the squares
    function animate() {
      console.log('Animating');

      // Reverse direction when square reaches a certain size
      if (parseInt(squares[0].style.width) > 30 || parseInt(squares[0].style.width) < 10) {
        aniSpeed *= -1;
      }

      // Loop through every square and change its size
      for (let j = 0; j < squares.length; j++) {
        let currentWidth = parseInt(squares[j].style.width);
        let currentHeight = parseInt(squares[j].style.height);

        // Adjust width and height based on animation speed
        squares[j].style.width = (currentWidth + aniSpeed) + "px";
        squares[j].style.height = (currentHeight + aniSpeed) + "px";
      }

      // Keep the animation running by requesting the next frame
      aniRef = window.requestAnimationFrame(animate);
    }
  }

}



/**************** ANI B ************************************ */
/** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
/**************** ANI B ************************************ */
/**************** TASK *******************************************
 * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
 * 1: use the function window.setInterval() to create a pattern that changes over time
 * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
 *  - you can use simple shapes and colors, images etc...
 * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive
 
 *
 * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
 * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
 * this is so that your styles are not overriden by other teams.
 * NOTE::: All your code is to be added here inside this function -
 * remember you can define other functions inside....
 * Do not change any code above or the HTML markup.
 * **/
function aniB(parentCanvas) {
  console.log("in B");
}
/**************** ANI C ************************************ */
/** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
/**************** ANI C ************************************ */
/**************** TASK *******************************************
  * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
  * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
  * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
  * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
  * 
  * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
  * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
  * this is so that your styles are not overriden by other teams.
  * NOTE::: All your code is to be added here inside this function -
  * remember you can define other functions inside....
  * Do not change any code above or the HTML markup.
  * **/


function aniC(parentCanvas) {

  console.log("in C");
  /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
  windowKeyDownRef = function (e) {
    //code for key down in here
    console.log(e)
    //SAMPLE KEY CHECK (you do not have to use)
    if (e.code === "Space") {
      console.log("team-space down")
    }
  };

  /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
  windowKeyUpRef = function (e) {
    //SAMPLE KEY CHECK (you do not have to use)
    if (e.code === "Space") {
      console.log("space up");
      console.log("team-space up")
    }

  };

  //DO NOT REMOVE
  window.addEventListener("keydown", windowKeyDownRef);
  window.addEventListener("keyup", windowKeyUpRef);
}

