class Wall extends Phaser.Physics.Arcade.Sprite { // class Wall extends Phaser.Physics.Arcade.Sprite
    constructor(scene, x, y, width, height) {
        super(scene, x, y, 'wall');

        this.scene = scene;
        this.scene.physics.add.existing(this, true);
        this.setSize(width, height);
        this.scene.add.existing(this);
        this.setDisplaySize(width, height); // Resize the sprite

        this.setAlpha(0); //makes the wall invisible
    }
}
export default Wall;

// class Wall extends Phaser.GameObjects.Rectangle {
//     constructor(scene, x, y, width, height) {
//         super(scene, x, y, width, height, 0xffffff, 0); // Invisible rectangle

//         this.scene = scene;
//         this.scene.physics.add.existing(this, true); // Static body
//         this.scene.add.existing(this);
//     }
// }
// export default Wall;