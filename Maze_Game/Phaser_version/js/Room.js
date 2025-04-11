import Wall from './Wall.js';
import Doorway from './Doorway.js';
//import Room4 from'./Room4Scene.js';
//import InkGlobChase from './ink chase.js';
//import InkGlob from '/Maze_Game/Phaser_version/js/inkglob.js';

class Room extends Phaser.GameObjects.Container {
    constructor(scene, roomKey) {

        super(scene);

        this.scene = scene; //Store references to the GameScene
        this.roomKey = roomKey;  // store the room's name (like "room1")

        this.scene.add.existing(this);
        this.name = roomKey;

        this.background = this.scene.add.image(400, 300, roomKey);
        this.background.setDisplaySize(this.scene.scale.width, this.scene.scale.height);

        this.walls = this.scene.physics.add.staticGroup(); // Makes walls static
        this.doorways = this.scene.physics.add.staticGroup();
        this.scene.sound.pauseOnBlur=false;
        this.createWalls();
        this.createDoorways();

       // this.sound.pauseOnBlur=false;
        // if(this.roomKey === 'room13'){
        //     this.handleRoom13Animation();
        // }
// if(roomKey === 'room13'){
//     this.background= this.scene.add.image(400,300,'room13.3.png');
//     this.background.setDisplaySize(this.scene.scale.width, this.scene.scale.height);

//     this.animationState=true;
// this.room13Timer=this.scene.time.addEvent({
//     delay:500,

// })
//}

        
        // if (this.roomKey === 'room4'){
        //     this.inRoom4=true;
        //     this.lightOn=false;
        // }
    }

    createWalls() {
        this.walls.clear(true, true);

        if (this.roomKey === 'room1') {
            this.walls.add(new Wall(this.scene, 318, 300, 30, 600)); // this is the left wall
            this.walls.add(new Wall(this.scene, 454, 300, 30, 600)); //this is the right wall
        }
        else if (this.roomKey === 'room2') {
            this.walls.add(new Wall(this.scene, 290, 300, 20, 600));//left wall
            this.walls.add(new Wall(this.scene, 775, 300, 30, 600));// right wall
            this.walls.add(new Wall(this.scene, 600, 600, 310, 50)); // bottom doorway wall
            this.walls.add(new Wall(this.scene, 530, 285, 320, 405)); //middle square wall
            this.walls.add(new Wall(this.scene, 380, 10, 200, 15));// top left wall
            this.walls.add(new Wall(this.scene, 700, 10, 200, 15));// top right wall
        }

        else if (this.roomKey === 'room3') {
            this.walls.add(new Wall(this.scene, 250, 290, 510, 60));
            this.walls.add(new Wall(this.scene, 300, 135, 610, 60));
            this.walls.add(new Wall(this.scene, 515, 450, 25, 325));
            this.walls.add(new Wall(this.scene, 620, 400, 25, 550));
        }
        else if (this.roomKey === 'room4') {
            this.walls.add(new Wall(this.scene, 400, 290, 800, 60));
            this.walls.add(new Wall(this.scene, 400, 140, 800, 60));

           
        }
        else if (this.roomKey === 'room5') {
            this.walls.add(new Wall(this.scene, 720, 490, 125, 200));
            this.walls.add(new Wall(this.scene, 720, 150, 125, 200));
            this.walls.add(new Wall(this.scene, 400, 15, 600, 60));
            this.walls.add(new Wall(this.scene, 400, 575, 600, 60));
            this.walls.add(new Wall(this.scene, 400, 300, 350, 265));
            this.walls.add(new Wall(this.scene, 80, 500, 125, 200));
            this.walls.add(new Wall(this.scene, 80, 150, 125, 200));
        }
        else if (this.roomKey === 'room6') {
            this.walls.add(new Wall(this.scene, 610, 120, 350, 355));
            this.walls.add(new Wall(this.scene, 610, 618, 350, 355));
            this.walls.add(new Wall(this.scene, 100, 60, 160, 150));
            this.walls.add(new Wall(this.scene, 350, 60, 160, 150));
            this.walls.add(new Wall(this.scene, 300, 600, 600, 30));
            this.walls.add(new Wall(this.scene, 15, 300, 20, 600));
        }
        else if (this.roomKey === 'room7') {
            this.walls.add(new Wall(this.scene, 45, 440, 80, 400)); // this is the left wall
            this.walls.add(new Wall(this.scene, 128, 50, 430, 180)); //this is the right wall
            this.walls.add(new Wall(this.scene, 465, 300, 30, 600));
            this.walls.add(new Wall(this.scene, 328, 440, 300, 400));
        }
        else if (this.roomKey === 'room8') {
            this.walls.add(new Wall(this.scene, 655, 110, 270, 70));
            this.walls.add(new Wall(this.scene, 715, 450, 135, 400));
            this.walls.add(new Wall(this.scene, 495, 225, 133, 450));
            this.walls.add(new Wall(this.scene, 220, 35, 450, 55));
            this.walls.add(new Wall(this.scene, 300, 590, 700, 35));
            this.walls.add(new Wall(this.scene, 15, 100, 35, 150));
            this.walls.add(new Wall(this.scene, 15, 432, 30, 300));
        }
        else if (this.roomKey === 'room9') {
            this.walls.add(new Wall(this.scene, 190, 508, 300, 305));
            this.walls.add(new Wall(this.scene, 575, 508, 300, 300));
            this.walls.add(new Wall(this.scene, 260, 103, 190, 240));
            this.walls.add(new Wall(this.scene, 540, 103, 190, 240));
            this.walls.add(new Wall(this.scene, 45, 300, 60, 600));
            this.walls.add(new Wall(this.scene, 728, 300, 30, 600));
        }
        else if (this.roomKey === 'room10') {
            this.walls.add(new Wall(this.scene, 342, 300, 20, 600));
            this.walls.add(new Wall(this.scene, 458, 300, 20, 600));
            this.walls.add(new Wall(this.scene, 30, 300, 30, 600));
            this.walls.add(new Wall(this.scene, 765, 300, 30, 600));
            this.walls.add(new Wall(this.scene, 400, 85, 800, 100));
            this.walls.add(new Wall(this.scene, 80, 590, 100, 30));
            this.walls.add(new Wall(this.scene, 278, 590, 100, 30));
            this.walls.add(new Wall(this.scene, 506, 590, 100, 30));
            this.walls.add(new Wall(this.scene, 695, 590, 100, 30));
            this.walls.add(new Wall(this.scene, 55,360,25,75));
        }
        else if (this.roomKey === 'room11') {
            this.walls.add(new Wall(this.scene, 545, 100, 550, 170));
            this.walls.add(new Wall(this.scene, 110, 300, 100, 600));
            this.walls.add(new Wall(this.scene, 450, 355, 700, 100));
        }
        else if (this.roomKey === 'room12') {
            this.walls.add(new Wall(this.scene, 143, 300, 30, 600)); // this is the left wall
            this.walls.add(new Wall(this.scene, 305, 300, 30, 600)); //this is the right wall
        }
        else if (this.roomKey === 'room13') {
            this.walls.add(new Wall(this.scene, 143, 300, 30, 600)); // this is the left wall
            this.walls.add(new Wall(this.scene, 305, 300, 30, 600)); //this is the right wall
        } 
        
       // this.spawnItems();
    }
    // chaseCharacter(character) {
    //     this.scene.physics.moveToObject(this, character, this.speed);
    // }
    // stopTimeChase() {
    //     if (this.chaseTimer) {
    //         this.chaseTimer.remove();
    //         this.chaseTimer = null;
    //         console.log("Chase event stopped.");
    //     }
    // }
    createDoorways() {
        this.doorways.clear(true, true);

        if (this.roomKey === 'room1') {
            this.doorways.add(new Doorway(this.scene, 385, 5, 100, 10, 'room2', 365, 599));
        }

        else if (this.roomKey === 'room2') {
            this.doorways.add(new Doorway(this.scene, 365, 600, 125, 10, 'room1', 400, 70));
            this.doorways.add(new Doorway(this.scene, 530, 5, 110, 10, 'room3', 575, 595));
        }

        else if (this.roomKey === 'room3') {
            this.doorways.add(new Doorway(this.scene, 560, 600, 115, 10, 'room2', 500, 70));
            this.doorways.add(new Doorway(this.scene, 10, 250, 10, 100, 'room4', 770, 245));
        }

        else if (this.roomKey === 'room4') {
            this.doorways.add(new Doorway(this.scene, 785, 245, 10, 115, 'room3', 70, 250));
            this.doorways.add(new Doorway(this.scene, 10, 245, 10, 115, 'room5', 770, 350));

           // this.load.images('inkglob','assets/images/ink_glob.png');
        }

        else if (this.roomKey === 'room5') {
            this.doorways.add(new Doorway(this.scene, 785, 350, 10, 115, 'room4', 50, 250));
            this.doorways.add(new Doorway(this.scene, 10, 350, 10, 115, 'room6', 770, 370));
        }

        else if (this.roomKey === 'room6') {
            this.doorways.add(new Doorway(this.scene, 785, 400, 10, 125, 'room5', 50, 330));
            this.doorways.add(new Doorway(this.scene, 210, 10, 125, 10, 'room7', 140, 595));
        }
        else if (this.roomKey === 'room7') {
            this.doorways.add(new Doorway(this.scene, 140, 600, 125, 10, 'room6', 230, 70));
            this.doorways.add(new Doorway(this.scene, 5, 240, 10, 125, 'room8', 770, 250));
            this.doorways.add(new Doorway(this.scene, 418, 5, 110, 10, 'room9', 395, 595));
        }
        else if (this.roomKey === 'room8') {
            this.doorways.add(new Doorway(this.scene, 785, 210, 10, 125, 'room7', 50, 245));
            this.doorways.add(new Doorway(this.scene, 5, 220, 10, 125, 'room11', 770, 270));
        }
        else if (this.roomKey === 'room9') {
            this.doorways.add(new Doorway(this.scene, 380, 600, 125, 10, 'room7', 400, 70));
            this.doorways.add(new Doorway(this.scene, 125, 5, 110, 10, 'room10', 175, 590));
            this.doorways.add(new Doorway(this.scene, 420, 5, 110, 10, 'room10', 420, 590));
            this.doorways.add(new Doorway(this.scene, 675, 5, 110, 10, 'room10', 610, 590));
        }
        else if (this.roomKey === 'room10') {
            this.doorways.add(new Doorway(this.scene, 145, 600, 125, 10, 'room9', 115, 70));
            this.doorways.add(new Doorway(this.scene, 420, 600, 125, 10, 'room9', 410, 70));
            this.doorways.add(new Doorway(this.scene, 610, 600, 125, 10, 'room9', 675, 70));
        }
        else if (this.roomKey === 'room11') {
            this.doorways.add(new Doorway(this.scene, 785, 270, 10, 125, 'room8', 50, 250));
            this.doorways.add(new Doorway(this.scene, 210, 10, 125, 10, 'room12', 215, 595));
        }
        else if (this.roomKey === 'room12') {
            this.doorways.add(new Doorway(this.scene, 215, 600, 125, 10, 'room11', 215, 70));
            this.doorways.add(new Doorway(this.scene, 215, 5, 125, 10, 'room13', 215, 595));
        }
        else if (this.roomKey === 'room13') {
            this.doorways.add(new Doorway(this.scene, 215, 600, 125, 10, 'room12', 215, 70));
            this.doorways.add(new Doorway(this.scene, 215, 5, 125, 10, 'roomEnd', 575, 595));
        }
    } 
// handleRoom13Animations(){
//     if(this.scene.hasKey){
//         this.background.setTexture('room13_3.png');

//         this.scene.tweens.add({
//             targets:this.background,
//             scaleX:1.2,
//             scaleY:1.2,
//             ease:'Power1',
//             duration: 1000,
//             yoyo:true,
//             repeat: -1
//         });
//     }
// }
    // toggleLight(state){
    //     this.lightOn=state;
    //     if(this.lightOn){
    //         console.log("Light turned on");
    //     } else{
    //         console.log("light turned off");
    //     }
    // }



    checkTransition(character) {
        this.scene.physics.world.overlap(character, this.doorways, this.onOverlap, null, this);
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
export default Room;