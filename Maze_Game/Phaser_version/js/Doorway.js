class Doorway extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, targetRoom, targetX, targetY) {
        super(scene, x, y, width, height, 0xffffff, 0); // Transparent rectangle

        this.scene = scene;
        this.targetRoom = targetRoom; // Room to transition to
        this.targetX = targetX; // X position after transition
        this.targetY = targetY; // Y position after transition

        // Add Doorway to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true); // Static body to detect overlap
    }
}
export default Doorway;

