class Sun{
    constructor(x,y, sunColor){
        this.x = x;
        this.y = y;
        this.sunColor = sunColor;
        this.sunDiv =  document.createElement("div");
        this.vx = 1;
        this.vy =1;
        self = this;
      
        window.addEventListener("keydown", function handleKeyDown(event) {
            //call the handleKeyDown method of class
            self.handleKeyDown(event);
          });



    }

    handleKeyDown(event) {
        console.log("key pressed");
        console.log(this);
       // console.log(event);
     
        //LINEAR MOVEMENT
        //go up
        if (event.key === "w") {
          console.log("up");
          this.y -= this.vy;
          this.updateDivPos();
        }
        if (event.key === "a") {
          console.log("left");
          this.x -= this.vx;
          this.updateDivPos();
        }
        if (event.key === "s") {
          console.log("down");
          this.y += this.vy;
          this.updateDivPos();
        }
        if (event.key === "d") {
          console.log("right");
          this.x += this.vx;
          this.updateDivPos();
        }
    }

    renderSun(){
    // //sun - IN the sky
    this.sunDiv.classList.add("sun");
    this.sunDiv.style.background = `rgb(${this.sunColor.r},${this.sunColor.g},${this.sunColor.b})`;
    // //append to the SKY div
    document.querySelector(".sky").appendChild(this.sunDiv);
    }

    updateDivPos() {
        console.log("update")
        this.sunDiv.style.left = this.x + "px";
        this.sunDiv.style.top = this.y + "px";
      }

}