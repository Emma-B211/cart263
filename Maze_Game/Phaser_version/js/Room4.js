class InkGlob extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y){
        super(scene,x,y,'inkglob');
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
        this.setGravityY(0);
    }
     // Method to make the glob follow the character
     chase(target) {
        const speed = 100; // Adjust the speed of the chase
        const angle = Phaser.Math.Angle.Between(this.x, this.y, target.x, target.y);
        this.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    } 
}

export default InkGlob; 