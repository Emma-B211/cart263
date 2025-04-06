class Room4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Room4Scene' });
    }

    preload() {
        // Preload images, sprites, etc.
        this.load.image('inkglob', 'assets/images/ink_glob.png');
    }

    create() {
        // Initialize character and Ink Glob
        this.character = this.physics.add.sprite(100, 100, 'character'); // Add your character sprite
        this.inkGlob = this.physics.add.sprite(200, 200, 'inkglob');
        this.inkGlob.speed = 100;

        // Other setup code...
    }

    update() {
        // Update Ink Glob movement
        if (this.lightsOff) {
            // Track character's position
        
            this.inkGlob.setVelocity(direction.x * this.inkGlob.speed, direction.y * this.inkGlob.speed);
        } else {
            // Stop Ink Glob movement when lights are on
            this.inkGlob.setVelocity(0, 0);
        }
    }
}
export default Room4;