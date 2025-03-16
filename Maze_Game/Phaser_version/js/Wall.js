class Wall extends Phaser.Physics.Arcade.Sprite { // class Wall extends Phaser.Physics.Arcade.Sprite
    constructor(scene, x, y, width, height) {
        super(scene, x, y, 'wall');

        this.scene = scene;
        this.scene.physics.add.existing(this, true);

        this.setSize(width, height);
        this.scene.add.existing(this);

        this.setDisplaySize(width, height); // Resize the sprite
        this.body.setSize(width, height); // Force the collider to match
        this.body.setOffset(-width / 2, -height / 2);
        // this.body.setSize(width * 0.9, height * 0.9); // Reduce size slightly
        // this.body.setOffset(0, 0); // Align the body properly


        this.setAlpha(0.5); //makes the wall invisible

        // Draw debug outline
        this.debugGraphics = scene.add.graphics();
        this.debugGraphics.lineStyle(2, 0xff0000, 1); // Red outline
        this.debugGraphics.strokeRect(this.x - width / 2, this.y - height / 2, width, height);
        // 
        console.log(`Wall created at X=${this.x}, Y=${this.y}, Width=${this.displayWidth}, Height=${this.displayHeight}`);
    }
}
export default Wall;

// update(time, delta) {




// }
