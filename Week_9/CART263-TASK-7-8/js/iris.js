class Iris {
    constructor(x, y, data) {
        this.x = x;
        this.y = y;
        this.size = data.petalLength * 10; // exaggerated for visual purposes
        this.color = data.color;
        this.species = data.species;
        this.label = `🌸 ${data.species}`;
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

let canvas = document.getElementById("irisCanvas");
let ctx = canvas.getContext("2d");
let irisObjects = [];

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

// 💫 Interactivity
canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    irisObjects.forEach(iris => iris.checkHover(mouseX, mouseY));
    drawAll();
});