class Wall extends Phaser.Physics.Arcade.Sprite { // class Wall extends Phaser.Physics.Arcade.Sprite
    constructor(scene, x, y, width, height) {
        super(scene, x, y, 'wall');

        this.scene = scene;
        this.scene.physics.add.existing(this, true);
        this.setSize(width, height);
        this.scene.add.existing(this);
        this.setDisplaySize(width, height); // Resize the sprite

        this.setAlpha(0.5); //makes the wall invisible
    }
}
export default Wall;
