window.onload = async function () {
    console.log("task 7-8");

    try {
        let response = await fetch('data/iris.json');
        let parsedResultJS = await response.json();
        // console.log(parsedResultJS);

        let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d32d3f", "#d3a73f"];

        let irisesWithColors = parsedResultJS.map(iris => {
            const randomColor = possibleColor[Math.floor(Math.random() * possibleColor.length)];

            return {
                ...iris,
                color: randomColor
            };
        });

        // to sorted
        const irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);
        console.log(irisesWithColorsSorted);

        // sepal width greater than 1.2
        const allSepalWidthsGreaterThan1_2 = irisesWithColors.every(iris => iris.sepalWidth > 1.2);
        // console.log(allSepalWidthsGreaterThan1_2);
        // petal width every < 3

        const allPetalWidthsLessThan3 = irisesWithColors.every(iris => iris.petalWidth < 3);
        //console.log(allPetalWidthsLessThan3);



        //some == 4.2
        const hasPetalLengthEqualTo4_2 = irisesWithColors.some(iris => iris.petalLength == 4.2);
        //console.log(hasPetalLengthEqualTo4_2);


        // some> 10
        const hasLargePetalLength = irisesWithColors.some(iris => iris.petalLength > 10);
        //console.log(hasLargePetalLength);


        // find 1.0
        const irisWithLargePetalWidth = irisesWithColors.find(iris => iris.petalWidth > 1.0);
        //console.log(irisWithLargePetalWidth);

        // filter >= 4
        let filterIrises = irisesWithColors.filter(iris => iris.sepalWidth >= 4);
        console.log(filterIrises);
        // reduce
        const totalPetalLength = irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0);
        const averagePetalLength = totalPetalLength / irisesWithColors.length;
        //console.log('average petal length:', averagePetalLength);
        //  function smaller_iris(){

        //  }
        // console.log(irisesWithColors);
    }
    catch (err) {
        console.log(err)
    }
    //irisesWithColors=[]
    class Iris {
        constructor(data) {
            this.sepalLength = data.sepalLength;
            this.sepalWidth = data.sepalWidth;
            this.petalLength = data.petalLength;
            this.petalWidth = data.petalWidth;
            this.species = data.species;
            this.color = data.color;

            // Random starting position
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.size = this.petalLength * 6;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.7;
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;

            // Label (species)
            ctx.fillStyle = "white";
            ctx.font = "10px sans-serif";
            ctx.fillText(this.species, this.x + this.size / 2, this.y);
        }
    }

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let irises = [];
    let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d32d3f", "#d3a73f"];

    async function init() {
        let response = await fetch("data/iris.json");
        let data = await response.json();

        let colored = data.map(d => ({
            ...d,
            color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
        }));

        let sorted = colored.toSorted((a, b) => a.petalWidth - b.petalWidth);

        irises = sorted.map(iris => new Iris(iris));
        animate();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let minSepalWidth = parseFloat(document.getElementById("sepalRange").value);
        document.getElementById("sepalVal").innerText = minSepalWidth.toFixed(1);

        irises.forEach(iris => {
            if (iris.sepalWidth >= minSepalWidth) {
                iris.update();
                iris.draw(ctx);
            }
        });

        requestAnimationFrame(animate);
    }

    document.getElementById("sepalRange").addEventListener("input", () => {
        // Filtering is handled inside animate()
    });

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    init();

}