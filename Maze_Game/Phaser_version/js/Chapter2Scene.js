export default class Chapter2Scene extends Phaser.Scene {
    constructor() {
        super('Chapter2Scene');
    }


    create() {

       const chapter2Image= this.add.image(400, 300, 'chapter2');
        chapter2Image.setScale(0.3);
        this.input.on('pointerdown', () => {
            console.log('End of Demo');
        });
    }
update(){
    if(this.currentRoom==='room13' && this.character.x > this.doorway.targetRoom){
        this.scene.start('Chapter2Scene')
    }
    
}
onOverlap(character, doorway) {
    console.log(`Transitioning to ${doorway.targetRoom}...`);

// if(this.roomKey === 'room13' && doorway.TargetRoom === 'roomEnd'){
//     if(!this.scene.hasCode){
//         console.log("you need the code to proceed.");
//         return;
//     }}


    this.background.setTexture(doorway.targetRoom);

    this.roomKey = doorway.targetRoom;
    character.setPosition(doorway.targetX, doorway.targetY);

    // Destroy old walls and doorways before creating new ones
    this.walls.clear(true, true);
    this.doorways.clear(true, true);

    this.createWalls();
    this.createDoorways();

    this.scene.physics.add.collider(character, this.walls);
     
}

}