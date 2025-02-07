setup_H();
function setup_H() {
  console.log("in h");
  /**************************************************** */
  //get the buttons
  activateButtons_H(`#TEAM_H`, "ani_canvH");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_H(team, teamCanvas) {
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
   * NOTE::: All your code is to be added here inside this function a -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in H_A");

    //create a button element
    let button = document.createElement("div");
    button.classList.add("TEAM_H_box");
    button.textContent = "GO";
    parentCanvas.appendChild(button);
    let isPlaying = false; //to control the animation start or stop
    let aniRef = null;
    let circles = []; //empty array of circles
    let aniSpeed = 1;

    //call to setup the animation before running
    setupAnimation();

    function setupAnimation() {
      //offset
      let offset = 60;
      //make a grid of circles - STATIC
      for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
          let circle = document.createElement("div");
          circle.classList.add("TEAM_H_circle");
          circle.style.width = `20px`;
          circle.style.height = `20px`;

          circle.style.left = offset + i * 25 + "px";
          circle.style.top = offset + j * 25 + "px";
          parentCanvas.appendChild(circle);
          circles.push(circle);
        }
      }
    }

    //add event listener to the button
    button.addEventListener("click", animationHandler);

    function animationHandler() {
      if (isPlaying === false) {
        isPlaying = true;
        this.textContent = "STOP";
        //START
        aniRef = window.requestAnimationFrame(animate);
      } else {
        //STOP
        window.cancelAnimationFrame(aniRef);
        this.textContent = "GO";
        isPlaying = false;
      }
    }

    function animate() {
      console.log("go");

      //check to change speed
      if (
        parseInt(circles[0].style.width) > 28 ||
        parseInt(circles[0].style.width) < 1
      ) {
        aniSpeed *= -1;
      }

      //only animate evry second one
      for (let i = 0; i < circles.length; i += 2) {
        circles[i].style.width =
          parseInt(circles[i].style.width) + aniSpeed + "px";
        circles[i].style.height =
          parseInt(circles[i].style.height) + aniSpeed + "px";
        circles[i].style.borderRadius =
          parseInt(circles[i].style.height) + aniSpeed + "px";
      }

      //CONTINUE ANIMATION
      aniRef = window.requestAnimationFrame(animate);
    }
  }
  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in some mouse click event listeners somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function a -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in H_B");

    //get the rendered bounding Box of parent and use the width and height
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);

    //make a grid of cells
    for (let i = 20; i < boundingBoxParent.width; i += 20) {
      for (let j = 20; j < boundingBoxParent.height; j += 20) {
        //create a div and place in the grid
        let rect = document.createElement("div");
        rect.classList.add("TEAM_H_h_cell");
        parentCanvas.appendChild(rect);
        rect.style.left = `${j}px`;
        rect.style.top = `${i}px`;
        rect.style.width = "10px";
        rect.style.height = "10px";
        rect.style.opacity = 1;
        rect.setAttribute("isactive", "false");

        //add an event listener to each div...
        rect.addEventListener("click", clickEventHandlerOnRec);
      }
    }

    /****** callback for click on a rect in the grid **********/
    function clickEventHandlerOnRec() {
      //this is the element that was clicked on
      //ensure that this only works for the FIRST MOUSE CLICK
      if (this.getAttribute("isactive") === "false") {
        //add ONE set interval call for each rect when it is clicked
        //the callback will be opacityChange
        let intervalRef = window.setInterval(opacityChange, 25);
        this.setAttribute("isactive", "true");
        //keep track of this... why?
        let self = this;
        //callback function triggered by the setInterval
        function opacityChange() {
          console.log("go");
          self.style.opacity -= 0.05;

          //will cancel the setInterval when complete...
          if (self.style.opacity <= 0) {
            clearInterval(intervalRef);
          }
        }
      }
    }
  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /****************ANI C************************************ */
    /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function a -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   * NO requestAnimationFrame(), setInterval() nor setTimeout()
   */

  function aniC(parentCanvas) {
    console.log("in H_C");

    //set background color  of canvas
    parentCanvas.style.backgroundColor = "rgb(175, 47, 83)";
    let randomWords = ["dew", "more", "hoops", "now", "super", "kick"];

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      //add a new word when we press space
      if (e.code === "Space") {
        console.log("h-space down");
        let newWord = document.createElement("span");
        let randomIndex = Math.floor(Math.random() * randomWords.length);

        newWord.textContent = randomWords[randomIndex];
        newWord.classList.add("TEAM_H_h_word");
        parentCanvas.appendChild(newWord);
      }
      //remove a word when we press backspace
      else if (e.code === "Backspace") {
        console.log("h-backspace down");
        let words = document.querySelectorAll(".TEAM_H_h_word");
        if (words.length !== 0) {
          words[words.length - 1].remove();
        }
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      //code for key down in here
      if (e.code === "Space") {
        console.log("space up");
        console.log("h-space up");
      }
    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
}
