class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    // let VideoObj= new VideoObj(x,y,w,h,videoElement,context,CanvaseElement);
    // VideoObj.addMouseMoveListener();
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY =10;
    this.shapeCol = "#000000";
    //this.newCol="#704214";
   this.newCol="#704214";
   this.userProvidedBlur=0;
   this.userProvidedSepia=0;
// this.initEventListener();
    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");
    this.userProvidedBlur  = 0;
    let self = this;
    
    this.initEventListener();

    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;
      console.log(self.userProvidedBlur);
    });

    // this.canvas.addEventListener("mousemove",(e)=> this.updatePositionRect(e));
    // this.canvas.addEventListener("click",(e)=> this.clickCanvas(e));
  }
  initEventListener(){
    this.canvas.addEventListener("mousemove", (e)=> this.updatePositionRect(e));
    this.canvas.addEventListener("click", (e)=> this.clickCanvas(e));
  }

  display() {
    this.context.save();
     this.context.filter = `blur(${this.userProvidedBlur}px)`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50,50)
    this.context.restore();

    this.context.filter=`sepia(${this.userProvidedSepia}px)`
  }

    //called when rectangle color is to be updated
  changeColor(newCol){
   /** FILL IN */
  //  let filterButton_sepia = document.getElementById("filter_button_sepia");
  //  let sepiaInput = document.getElementById("sepianum");
  //  let self=this;
  //  //this.context.fillStyle=this.newCol;
  //  //this.context.fillRect(this.shapeX,this.shapeY,50,50);
  //  //this.context.restore();

  //  filterButton_sepia.addEventListener("click",function(){
  //   // get sepia value
  //   self.userProvidedSepia=sepiaInput.value;
  //  // console.log("sepia value: ", self.userProvidedSepia)
  //   //sepiaInput= sepiaInput.value;
  //   this.shapeCol= newCol;
  //   console.log("rectangle color change to:", self.shapeCol);
  //  });
  }

  //called when rectangle Pos is to be updated
  updatePositionRect(mx,my){
     /** FILL IN */
    //  this.canvas.addEventListener("click", function (e) {
    //   self.clickCanvas(e);
    // });

    let mx= e.clientX - self.canvas.getBoundingClientRect().left;
     let my= e.clientY - self.canvas.getBoundingClientRect().top;

      this.shapeX= mx-25;
      this.shapeY=my-25;

      
   
    }
     //self.overCanvas(e);
// update the position of the rectangle
    //  self.rect.x=mx-self.rect.width/2;
    //  self.rect.y=my-self.rect.height/2;

     //self.render();

      // this.mouseOffsetX= parseInt(mx-this.canvasBoundingRegion.x);
      // this.mouseOffsetY=parseInt(my-this.canvasBoundingRegion.y)
   clickCanvas(e){
    this.shapeCol=this.shapeCol==="#000000" ? this.newCol: "000000";
    console.log("rectangle color change to:", this.shapeCol); 
    
    this.render();
   }

    
    addMouseMoveListener(){
        this.canvas.addEventListener("mousemove",(e)=> {
          this.updatePositionRect(e);
        })
      }
   render(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.display();
   }
    
  
  update(videoElement) {
    this.videoElement = videoElement;
  }

}