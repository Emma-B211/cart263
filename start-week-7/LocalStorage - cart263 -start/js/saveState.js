window.onload = function () {
  //end on load //ONLY HOLD THE SAVE FUNCTIONALITY
  let theButtons = document.getElementsByClassName("titleBar");
  for (let i = 0; i < theButtons.length; i++) {
    theButtons[i].addEventListener("click", saveStateHandler);
  }

  function saveStateHandler(event) {
    console.log(this.parentElement); // get parent element
    console.log(this.parentElement.querySelector("input").value); // get the input
    // if there is data
    if (this.parentElement.querySelector("input").value !== "") {
      saveStateOfOption(
        this.id,
        this.parentElement.querySelector("input").value
      );
      //reset input val
      this.parentElement.querySelector("input").value = "";
    }
  }
  // the function to save the input INTO LOCAL STORAGE
  function saveStateOfOption(id, stringToSave) {
     let key = "temp"
//     // let value= "valueToSavetwo_2"
//     // localStorage.setItem(key,value);

//     let array=["TEST_a", "TEST_b","TEST_c"];
// localStorage.setItem(key,JSON.stringify(array));

// let s = localStorage.getItem("temp_2")
// console.log(s)
let receivedArray= localStorage.getItem(id)
//console.log(JSON.parse(receivedArray));
let revArray=JSON.parse(receivedArray);
revArray.push(stringToSave)
localStorage.setItem(key,JSON.stringify(revArray))

// let newArr=[];
// newArr.push(stringToSave);
// localStorage.setItem(id, JSON.stringify(newArr));
  }
};
