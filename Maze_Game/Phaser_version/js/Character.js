class Character extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'character_front_left');

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setOrigin(0.5, 1); // Places the origin at the bottom center
        this.setSize(220, 200); // Adjust this to the actual character size
        this.setScale(0.17);

        // //Handle input keys
        this.keys = scene.input.keyboard.createCursorKeys();
        this.interactKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.speed = 150;

        this.holdingObject = null; // Track picked-up object

        console.log("Character created:", this.x, this.y);
        console.log(this.position, this.x, this.y);
    }

    update() {
        this.setVelocity(0);

        if (this.keys.left.isDown) {
            this.setVelocityX(-this.speed);
            this.play('walk_left', true);

            this.body.setSize(130, 200); // Taller hitbox
        }

        else if (this.keys.right.isDown) {
            this.setVelocityX(this.speed);
            this.play('walk_right', true);

            this.body.setSize(130, 200); // Taller hitbox
        }

        else if (this.keys.up.isDown) {
            this.setVelocityY(-this.speed);
            this.play('walk_up', true);

            this.body.setSize(220, 200); // Taller hitbox
        }

        else if (this.keys.down.isDown) {
            this.setVelocityY(this.speed);
            this.play('walk_down', true);

            this.body.setSize(220, 200); // Taller hitbox
            //this.body.setOffset(100, 120);
        }

        else {
            this.stop(); // Stop animation when no key is pressed
        }

        if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
            this.scene.checkItemPickup(this, this.scene.inventory, this.scene.messageText);
        }
    }
}

export default Character;





//     // Pick-up object with spacebar
//     if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
//         this.pickUpObject();
//     }

//     // Carry the object if one is held
//     if (this.holdingObject) {
//         this.holdingObject.setPosition(this.x, this.y - 50);
//     }
// }

// pickUpObject() {
//     if (this.holdingObject) {
//         console.log("Dropping object:", this.holdingObject.texture.key);
//         this.holdingObject = null;
//         return;
//     }

//     const objects = this.scene.physics.overlapRect(this.x, this.y, 50, 50);

//     for (let obj of objects) {
//         if (obj.gameObject && obj.gameObject.pickable) {
//             console.log("Picked up object:", obj.gameObject.texture.key);
//             this.holdingObject = obj.gameObject;
//             return;
//         }
//     }
//     console.log("No object to pick up.");
