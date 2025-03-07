let circles = [];

function setup() {
    createCanvas(1000, 650);
    noStroke();

    // Create a few circles on the canvas
    for (let i = 0; i < 10; i++) {
        let circle = {
            x: random(width),
            y: random(height),
            size: random(30, 60),
            alpha: 255, // Full opacity
            speed: random(1, 3)
        };
        circles.push(circle);
    }
}

function draw() {
    background(255); // White background

    // Update and display all circles with erasing effect
    for (let i = circles.length - 1; i >= 0; i--) {
        let circle = circles[i];

        // Gradually reduce the alpha (transparency) to simulate erasing
        circle.alpha -= circle.speed;  // Erasing speed
        if (circle.alpha <= 0) {
            circles.splice(i, 1);  // Remove the circle once it's fully erased
        }

        // Display the circle with fading effect
        fill(0, circle.alpha);
        ellipse(circle.x, circle.y, circle.size, circle.size);
    }
}

function mousePressed() {
    // When the mouse is pressed, add a new circle to the canvas
    let circle = {
        x: mouseX,
        y: mouseY,
        size: random(30, 60),
        alpha: 255, // Full opacity
        speed: random(1, 3) // Random erasing speed
    };
    circles.push(circle);
}
