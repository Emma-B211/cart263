let inkParticles = [];

function setup() {
    createCanvas(1000, 650);
    noStroke();
}

function draw() {
    background(255); // White background for contrast

    // Create new ink particles at random locations
    if (random(1) < 0.2) {
        let x = random(width);
        let y = random(-50, -20); // Start above the canvas
        let size = random(10, 40);  // Random ink drop size
        inkParticles.push(new InkParticle(x, y, size));
    }

    // Update and display all ink particles
    for (let i = inkParticles.length - 1; i >= 0; i--) {
        inkParticles[i].update();
        inkParticles[i].display();

        // Remove particles that have faded out completely
        if (inkParticles[i].alpha <= 0) {
            inkParticles.splice(i, 1);
        }
    }
}

// InkParticle Class (Ink drop)
class InkParticle {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.alpha = 255;
        this.speed = random(1, 3);
        this.splatter = false;
    }

    update() {
        this.y += this.speed; // Move downwards

        if (!this.splatter && this.y > height - random(20, 50)) {
            this.splatter = true; // Start spreading ink once it hits the canvas bottom
        }

        // Gradual fading effect
        this.alpha -= 1;
        if (this.alpha < 0) {
            this.alpha = 0;
        }
    }

    display() {
        fill(0, this.alpha); // Black color with fading effect
        if (!this.splatter) {
            ellipse(this.x, this.y, this.size, this.size * 2); // Regular drop shape
        } else {
            // Ink spreading effect
            for (let i = 0; i < 5; i++) {
                let offsetX = random(-15, 15);
                let offsetY = random(-10, 10);
                ellipse(this.x + offsetX, this.y + offsetY, this.size * random(0.5, 1.5));
            }
        }
    }
}
