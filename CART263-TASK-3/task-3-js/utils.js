  /*** HELPER SCRIPT :: NO NEED TO CHANGE */
  let windowKeyDownRef = null;
  let windowKeyUpRef = null;

  /**************************************************** */
  /* global function to clear all animation refs */
  function cancelALlTimerrefs() {
   
  
    if(windowKeyDownRef!==null){
      window.removeEventListener("keydown",windowKeyDownRef);
    }

    if(windowKeyUpRef!==null){
      window.removeEventListener("keyup",windowKeyUpRef);
    }
 
    window.cancelRequestAnimFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
      );
    })();

    for (let i = 1; i < 99999; i++) {
      window.clearInterval(i);
      window.cancelRequestAnimFrame(i);

     
    }
  }
  /**************************************************** */

  /* global function to reset canvases */
  function resetCanvases(teamCanvases) {
    let otherCanvases = document.querySelectorAll(teamCanvases);
    //clear
    for (canvas of otherCanvases) {
      //reset the canvas
      canvas.innerHTML = "";
      canvas.style.display = "none";
      canvas.replaceWith(canvas.cloneNode(true));
    }
    cancelALlTimerrefs();
  
  }


/**************************************************** */
function resetButtons(teamButtons,activeButton){
    for (let button of teamButtons) {
        button.classList.remove("active-button");
    }
    activeButton.classList.add("active-button");
}