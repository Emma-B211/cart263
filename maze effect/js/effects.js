let drips = [];

function setup() {
    createCanvas(1000, 650);
    noStroke();
}

function draw() {
    background(255); // White background to contrast ink

    // Create new drips randomly
    if (random(1) < 0.1) {
        let x = random(width);
        drips.push(new Drip(x, 0, random(5, 20)));
    }

    // Update and display all drips
    for (let i = drips.length - 1; i >= 0; i--) {
        drips[i].update();
        drips[i].display();

        // Remove drips that go beyond the screen
        if (drips[i].y > height) {
            drips.splice(i, 1);
        }
    }
}

// Ink Drip Class
class Drip {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = random(2, 5);
        this.splatter = false; // Controls ink spreading
    }

    update() {
        if (!this.splatter) {
            this.y += this.speed;
            if (this.y > height - random(30, 60)) {
                this.splatter = true; // Start spreading ink
            }
        }
    }

    display() {
        fill(0);
        if (!this.splatter) {
            ellipse(this.x, this.y, this.size, this.size * 2);
        } else {
            // Ink spread effect
            for (let i = 0; i < 5; i++) {
                let offsetX = random(-15, 15);
                let offsetY = random(-10, 10);
                ellipse(this.x + offsetX, this.y + offsetY, this.size * random(0.5, 1.5));
            }
        }
    }
}
