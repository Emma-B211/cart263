import InkGlobChase from "./ink chase.js";
class InkGlob extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'inkglob2'); // 'inkglob' is the preloaded image
       // this.scene = scene;
        scene.add.existing(this);
        this.scene.physics.add.existing(this); // Important: adds physics body
        //this.setOrigin(0.5, 0.5);
        this.speed = 100; // Movement speed

this.setVisible(false);
this.setDepth(1);
this.body.setEnable(false);

          // Ink Glob Variables
    //this.inkGlob = new InkGlob (this, 400, 300); 
    this.lightOn = true; // Track light state
    }
preload(){
    this.load.image('inkglob2','assets/images/ink_glob_copy_9_optimized.png')
}
// create(){
//     this.inkGlob= new InkGlob(this,400,300);
//     this.add.existing(this.inkGlob)
// }
    // chaseCharacter(character) {
    //     this.scene.physics.moveToObject(this, character, this.speed);
    // }

    stopChase() {
        this.body.setVelocity(0, 0); // Properly stop using physics body
    }

    // update() {
    //     // Optional: behavior logic
    //     if (!this.lightOn) {
    //         this.scene.physics.moveToObject(this.inkGlob, this, 100); // Ink glob chases the character
    //       } else {
    //         this.inkGlob.setVelocity(0, 0); // Ink glob stops when lights are on
    //       }
    // }
    // onOverlap(InkGlob, doorway) {
    //     console.log(`Transitioning to ${doorway.targetRoom}...`);

    //     this.background.setTexture(doorway.targetRoom);

    //     this.roomKey = doorway.targetRoom;
    //     character.setPosition(doorway.targetX, doorway.targetY);

    //     // Destroy old walls and doorways before creating new ones
    //     this.walls.clear(true, true);
    //     this.doorways.clear(true, true);

    //     this.createWalls();
    //     this.createDoorways();

    //     this.scene.physics.add.collider(character, this.walls);
    //     // Handle time chase trigger
    // if (this.roomKey === 'room4') {
    //     this.startTimeChase();
    // } else if (this.roomKey = 'room4') {
    //     this.stopTimeChase();
    // }
    // }
}

export default InkGlob;
