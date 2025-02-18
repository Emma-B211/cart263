class Flower_E {
    constructor(x,y,size,stemLength,petalColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.stemLength = stemLength;

        this.stemThickness = 5;
        this.petalThickness = 4;
        this.flowerStemDiv = document.createElement("div");
        this.flowerPetalDiv = document.createElement("div");

        // Color information
        this.stemColor = {
          r: 50,
          g: 150,
          b: 50,
        };
        this.petalColor = petalColor;
        this.centreColor = {
          r: 50,
          g: 0,
          b: 0,
        };

        let self = this;//keep a copy of 'this'

        this.flowerPetalDiv.addEventListener("click", changeColor);
        function changeColor(e) {
            console.log(e.target);
            console.log(this);
            console.log(self);
            self.petalColor = {
                r: parseInt(Math.random() * 256),
                g: parseInt(Math.random() * 256),
                b: parseInt(Math.random() * 256),
            };
            self.flowerPetalDiv.style.borderColor = `rgb(${self.petalColor.r},${self.petalColor.g},${self.petalColor.b})`;
        }

    }

            //render method
  renderFlower_E() {
    this.flowerStemDiv.classList.add("flower");
    this.flowerStemDiv.style.width = this.stemThickness+"px";
    this.flowerStemDiv.style.height = this.stemLength+"px";
    this.flowerStemDiv.style.background = `rgb(${this.stemColor.r},${this.stemColor.g},${this.stemColor.b})`;
    this.flowerStemDiv.style.left = this.x+"px";
    this.flowerStemDiv.style.top = this.y-this.stemLength+"px";
     //add to the DOM
     document.getElementsByClassName("grass")[0].appendChild(this.flowerStemDiv);
this.flowerPetalDiv.classList.add("petal");
     this.flowerPetalDiv.style.width = this.size+"px";
     this.flowerPetalDiv.style.height = this.size+"px";
     this.flowerPetalDiv.style.borderRadius = "0px";
     this.flowerPetalDiv.style.background = `rgb(${this.centreColor.r},${this.centreColor.g},${this.centreColor.b})`;
     this.flowerPetalDiv.style.left = (this.x-this.size/2)+"px";
     this.flowerPetalDiv.style.top = (this.y-this.stemLength-this.size/2)+"px";
     this.flowerPetalDiv.style.borderWidth = this.petalThickness+"px";
     this.flowerPetalDiv.style.borderColor =  `rgb(${this.petalColor.r},${this.petalColor.g},${this.petalColor.b})`;
      //add to the DOM
      document.getElementsByClassName("grass")[0].appendChild(this.flowerPetalDiv);
   }
 
}