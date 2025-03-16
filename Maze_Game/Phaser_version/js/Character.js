class Character extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'character_front_left'); // Set frame 0 (first frame of the spritesheet)

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);

        this.setScale(0.18);
        // // Add animations
        // this.scene.anims.create({
        //     key: 'walk',
        //     frames: this.scene.anims.generateFrameNumbers('character', { start: 0, end: 3 }), // Adjust frame range
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.play('walk'); // Play walk animation by default

        // this.setAlpha(1); // Ensure it's not invisible

        //Handle input keys
        this.keys = scene.input.keyboard.createCursorKeys();
        this.speed = 150;

        console.log("Character created:", this.x, this.y);
    }

    update() {

        //console.log(`Character position: X=${this.x}, Y=${this.y}`);
        this.setVelocity(0);


        if (this.keys.left.isDown) {
            this.setVelocityX(-this.speed);
            this.play('walk_left', true);
        }

        else if (this.keys.right.isDown) {
            this.setVelocityX(this.speed);
            this.play('walk_right', true);
        }

        else if (this.keys.up.isDown) {
            this.setVelocityY(-this.speed);
            this.play('walk_up', true);
        }

        else if (this.keys.down.isDown) {
            this.setVelocityY(this.speed);
            this.play('walk_down', true);
        }

        else {
            this.stop(); // Stop animation when no key is pressed
        }
    }
}

export default Character;
