let irises = [];

class Iris {
    constructor(data, x, y) {
        this.petalLength = data.petalLength;
        this.petalWidth = data.petalWidth;
        this.sepalLength = data.sepalLength;
        this.sepalWidth = data.sepalWidth;
        this.species = data.species;
        this.color = data.color;
        this.x = x;
        this.y = y;
        this.angle = random(TWO_PI);
        this.size = map(this.sepalLength, 4, 8, 20, 60);
        this.petalCount = floor(map(this.petalLength, 1, 6, 4, 12));
    }

    update() {
        this.angle += 0.01;
    }

    display() {
        push();
        translate(this.x, this.y);
        noStroke();
        fill(this.color);
        for (let i = 0; i < this.petalCount; i++) {
            let theta = this.angle + i * TWO_PI / this.petalCount;
            let px = cos(theta) * this.size;
            let py = sin(theta) * this.size;
            ellipse(px, py, this.petalWidth * 10, this.petalLength * 10);
        }
        fill(255, 200);
        ellipse(0, 0, this.sepalWidth * 10);
        pop();
    }
}

async function setup() {
    createCanvas(windowWidth, windowHeight);
    await loadData();
}

async function loadData() {
    try {
        let response = await fetch('data/iris.json');
        let data = await response.json();
        let possibleColors = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d32d3f", "#d3a73f"];

        let coloredData = data.map(iris => ({
            ...iris,
            color: random(possibleColors)
        }));

        let sorted = coloredData.sort((a, b) => a.petalWidth - b.petalWidth);

        for (let i = 0; i < sorted.length; i++) {
            let x = random(width);
            let y = random(height);
            irises.push(new Iris(sorted[i], x, y));
        }
    } catch (err) {
        console.error(err);
    }
}

function draw() {
    background(20, 20, 40);
    for (let iris of irises) {
        iris.update();
        iris.display();
    }
}

function mousePressed() {
    // Shuffle positions
    for (let iris of irises) {
        iris.x = random(width);
        iris.y = random(height);
    }
}
