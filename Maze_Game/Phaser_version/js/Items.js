// export class Item extends Phaser.Physics.Arcade.Sprite {

//     constructor(scene, x, y, texture, name) {
//         super(scene, x, y, texture);
//         scene.add.existing(this);
//         scene.physics.add.existing(this);

//         this.name = name;  //store item name
//         this.setInteractive(); //make it clickable

//     }

//     interact(character, inventory, messageText, textbox) {
//         if (!inventory.includes(this.name)) {
//             inventory.push(this.name);
//             messageText.setText(`${this.name} picked up!`);

//             // Show the textbox and message
//             textbox.setVisible(true);
//             messageText.setVisible(true);

//             // Remove item after a short delay
//             this.scene.time.delayedCall(500, () => {
//                 this.destroy();
//                 textbox.setVisible(false);
//                 messageText.setVisible(false);
//             });
//         }
//     }

// }

class Item extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, sprite, name) {
        super(scene, x, y, sprite);

        this.scene = scene;
        this.name = name;
        this.setScale(0.2);
        this.setInteractive();

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setImmovable(true);

        // Flag to track if message is displayed
        this.showingMessage = false;
    }

    update(character) {
        if (Phaser.Math.Distance.Between(this.x, this.y, character.x, character.y) < 50) {
            if (!this.showingMessage) {
                this.scene.showItemMessage(this.name);
                this.showingMessage = true;
            }
        } else {
            if (this.showingMessage) {
                this.scene.hideItemMessage();
                this.showingMessage = false;

            }
        }
    }

    pickUp() {
        this.scene.hideItemMessage();
        this.destroy(); // Remove the item from the game
    }
}

export default Item;