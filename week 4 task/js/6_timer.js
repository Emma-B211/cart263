window.onload = function () {

    let gridArray = [];
  for (let i = 0; i < 24; i++) {
    //for each x - make a column of changing y's
    let gridCol = [];
    for (let j = 0; j < 24; j++) {
      //create a grid cell with a div
      let parent = document.getElementById("parent");
      let d = document.createElement("div");
      d.classList.add("grid-cell");
      parent.appendChild(d);
 
      d.style.left = (i + 1) * 25 + "px";
      d.style.top = (j + 1) * 25 + "px";
      gridCol[j] = d;
    }
    //put each grid row into the grid array
    gridArray[i] = gridCol;
  }
  console.log(gridArray);
}