window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

      //a draw a rect:
  context.fillStyle = "rgba(255,0,0,255)";
  // draw a rect
  context.fillRect(canvas.width / 2, canvas.height / 2, 50, 50);
  // cut out a rect inside
  context.clearRect(canvas.width / 2 + 12.5, canvas.height / 2 + 12.5, 25, 25);

  context.fillStyle = "#8ED6FF"; // change the color we are using
  let xPos = canvas.width / 3;
  let yPos = canvas.height / 2;
  let radius = 40;
  let startAngle = 0;
  let endAngle = Math.PI * 2; //full rotation
  context.strokeStyle = "#FF0000"; // change the color we are using
  context.arc(xPos, yPos, radius, startAngle, endAngle, true);
  context.fill(); // set the fill
  context.lineWidth = 2; //change stroke
  context.stroke(); //set the stroke

  context.beginPath();
context.arc(xPos,yPos,radius,startAngle,endAngle, true);
context.fill(); // set the fill
context.lineWidth=2; //change stroke
context.stroke();//set the stroke
context.closePath();
 
//SECOND
context.strokeStyle = "#0000FF"; // change the color we are using
context.beginPath();
context.arc(xPos+200,yPos,radius,startAngle,endAngle, true);
context.fill(); // set the fill
context.lineWidth=2; //change stroke
context.stroke();//set the stroke
context.closePath();
  };

