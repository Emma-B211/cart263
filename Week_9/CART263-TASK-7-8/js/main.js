window.onload = async function () {
    console.log("task 7-8");
    let irises = [];
    let irisesWithColors = [];
    let filteredIrises = [];
    let irisesWithColorsSorted = [];
    let possibleColors = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

    fetch("data/iris.json")
        .then(response => response.json())
        .then(data => {
            irises = data; // array of 150 iris objects

            // Object properties (assuming structure from iris datasets)
            // { sepalLength, sepalWidth, petalLength, petalWidth, species }

            // 🌈 map(): Add a random color field
            irisesWithColors = irises.map(iris => {
                return {
                    ...iris,
                    color: possibleColors[Math.floor(Math.random() * possibleColors.length)]
                };
            });

            // 🔍 filter(): Remove sepalWidth >= 4
            filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);

            // ➕ reduce(): Calculate average petalLength
            const totalPetalLength = irisesWithColors.reduce((acc, iris) => acc + iris.petalLength, 0);
            const averagePetalLength = totalPetalLength / irisesWithColors.length;
            console.log("Average petalLength:", averagePetalLength.toFixed(2));

            // 🔍 find(): Find petalWidth > 1.0
            const widePetal = irisesWithColors.find(iris => iris.petalWidth > 1.0);
            console.log("First iris with petalWidth > 1.0:", widePetal);

            // ❓ some(): Check if any petalLength > 10
            const hasLongPetal = irisesWithColors.some(iris => iris.petalLength > 10);
            console.log("Any iris with petalLength > 10:", hasLongPetal);

            // ❓ some(): Check if petalLength === 4.2
            const hasPetalLength42 = irisesWithColors.some(iris => iris.petalLength === 4.2);
            console.log("Any iris with petalLength == 4.2:", hasPetalLength42);

            // ✅ every(): All petalWidths < 3?
            const allPetalWidthUnder3 = irisesWithColors.every(iris => iris.petalWidth < 3);
            console.log("All irises have petalWidth < 3:", allPetalWidthUnder3);

            // ✅ every(): All sepalWidths > 1.2?
            const allSepalWidthOver12 = irisesWithColors.every(iris => iris.sepalWidth > 1.2);
            console.log("All irises have sepalWidth > 1.2:", allSepalWidthOver12);

            // 🔢 toSorted(): Sort by petalWidth
            irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);

            // 🎨 Now visualize!
            setupVisualization();
        });

    let canvas = document.getElementById("irisCanvas");
    let ctx = canvas.getContext("2d");
    let irisObjects = [];

    class Iris {
        constructor(x, y, data) {
            this.x = x;
            this.y = y;
            this.size = data.petalLength * 10;
            this.color = data.color;
            this.species = data.species;
            this.label = `${data.species}`;
            this.hovered = false;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            if (this.hovered) {
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = "#000";
                ctx.font = "12px Arial";
                ctx.fillText(this.label, this.x - this.size / 2, this.y - this.size);
            }
        }

        checkHover(mouseX, mouseY) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            this.hovered = distance < this.size / 2;
        }
    }

    function setupVisualization() {
        const spacing = 50;
        const cols = 10;

        irisesWithColorsSorted.forEach((data, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const x = spacing + col * spacing * 1.5;
            const y = spacing + row * spacing * 1.5;
            irisObjects.push(new Iris(x, y, data));
        });

        drawAll();
    }

    function drawAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        irisObjects.forEach(iris => iris.draw(ctx));
    }

    canvas.addEventListener("mousemove", e => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        irisObjects.forEach(iris => iris.checkHover(mouseX, mouseY));
        drawAll();
    });

}