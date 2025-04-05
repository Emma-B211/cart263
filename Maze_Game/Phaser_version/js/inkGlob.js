class InkGlob extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'inkglobTexture');
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        //this.setCollideWorldBounds(true);
        this.body.setCollideWorldBounds(true);
    }

    // Follow the character with a speed limit
    followCharacter(character) {
        // Calculate the angle to the character
        let angle = Phaser.Math.Angle.Between(this.x, this.y, character.x, character.y);

        // Calculate distance to the character
        let distance = Phaser.Math.Distance.Between(this.x, this.y, character.x, character.y);

        // Set speed (you can change this value)
        let speed = 80;
this.scene.physics.moveToObject(this, character, speed);
        // If within a certain range, reduce speed to avoid overshooting
        if (distance < 50) {
            speed = 20; // Slow down when near the character
        }

        // Move the InkGlob toward the character
        this.body.setVelocity(
            Math.cos(angle) * speed,
            Math.sin(angle) * speed
        );
    }
}

export default InkGlob;