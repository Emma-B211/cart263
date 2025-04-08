
import Room from './Room.js';
import Character from './Character.js';
//import ink_globmovement from './ink_glob movement.js';
import InkGlob from '/Maze_Game/Phaser_version/js/inkglob.js';
//import InkGlobChase from './ink chase.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        this.inkGlob= null;
        this.inkSpeed=0;
    }

    preload() {

        this.load.image('room1', 'assets/images/room1.png');
        this.load.image('room2', 'assets/images/room2.png');
        this.load.image('room3', 'assets/images/room3.png');
        this.load.image('room4', 'assets/images/room4.png');
        this.load.image('room5', 'assets/images/room5.png');
        this.load.image('room6', 'assets/images/room6.png');
        this.load.image('room7', 'assets/images/room7.png');
        this.load.image('room8', 'assets/images/room8.png');
        this.load.image('room9', 'assets/images/room9.png');
        this.load.image('room10', 'assets/images/room10_2.png');
        this.load.image('room11', 'assets/images/room11.png');
        this.load.image('room12', 'assets/images/room12.png');
        this.load.image('room13', 'assets/images/room13.png');
        this.load.image('room13.2','assets/images/room13_3.png');
        this.load.image('room13.3','assets/images/room13_4.png');
        this.load.image('locked_door', 'assets/images/locked_door.png');
        this.load.image('open_door', 'assets/images/open_door.png');

        this.load.image('character_front_left', 'assets/images/character_front_left.png');
        this.load.image('character_front_middle', 'assets/images/character_front_middle.png');
        this.load.image('character_front_right', 'assets/images/character_front_right.png');

        this.load.image('character_back_left', 'assets/images/character_back_left.png');
        this.load.image('character_back_middle', 'assets/images/character_back_middle.png');
        this.load.image('character_back_right', 'assets/images/character_back_right.png');

        this.load.image('character_left_side_left', 'assets/images/character_left_side_left.png');
        this.load.image('character_left_side_middle', 'assets/images/character_left_side_middle.png');
        this.load.image('character_left_side_right', 'assets/images/character_left_side_right.png');

        this.load.image('character_right_side_left', 'assets/images/character_right_side_left.png');
        this.load.image('character_right_side_middle', 'assets/images/character_right_side_middle.png');
        this.load.image('character_right_side_right', 'assets/images/character_right_side_right.png');

        //this.load.image('inkglob','assets/images/ink_glob.png');

        // this.load.image('notecard','assets/images/notecard.png');
        // this.load.image('notecard2','assets/images/notecard.2.png');

        this.load.image('key', 'assets/images/key.png');
        this.load.image('paper_code', 'assets/images/paper_code.png');
        this.load.image('keycard', 'assets/images/keycard.png');
       // this.load.image('key2', 'assets/images/key_copy_2_optimized.png');
       // this.load.image('paper_code2','assets/images/paper_code_copy_1_optimized.png');
        this.load.image('inkglob2','assets/images/ink_glob_copy_9_optimized.png');
        this.load.image('textbox', 'assets/images/textbox.png');

        this.load.image('chapter1', 'assets/images/chapter1.png');

        this.load.audio('ambience','assets/ambience/eerie-ambience-6836.mp3');
    }

    create() {

        //load room
        this.currentRoom = new Room(this, 'room1');
        this.add.existing(this.currentRoom);
        this.lastRoomKey = null; // Track room changes properly

if (!this.ambience || !this.ambience.isPlaying){
this.ambience= this.sound.add('ambience', {
    loop:true,
    volume:0.5
});
this.ambience.play();
}

        //load Character
        this.character = new Character(this, 400, 300);
        this.add.existing(this.character);


        this.physics.add.collider(this.character, this.currentRoom.walls);
        this.physics.add.overlap(this.character, this.currentRoom.doorways, this.onOverlap, null, this);


        // Setup item data
        this.items = this.add.group();
        this.overlappingItem = null;

        // Create textbox image and message text (initially hidden)
        // this.textbox = this.add.image(400, 550, 'textbox').setScrollFactor(0);

        // instintiate inkglob
//         this.inkGlob = new InkGlob(this, 400, 300);
// this.add.existing(this.inkGlob);

if (this.currentRoom.roomKey === 'room4' && !this.inkGlob) {
    this.spawnInkGlob();
}
console.log(this.inkglob);
//this.lastRoomKey= this.currentRoom.roomKey;
//const InkGlob= new InkGlob(this,x,y);
// this.inkGlob.setVisible(false);
// this.inkGlob.body.setEnable(false);

        this.textbox = this.add.image(200, 100, 'textbox').setScale(0.3).setScrollFactor(0).setOrigin(0, 0);
        this.textbox.setVisible(false);

        this.messageText = this.add.text(250, 150, '', {
            fontSize: '32px',
            fill: '#000000', // black text
            align: 'center',
            wordWrap: { width: 300, useAdvancedWrap:true },
        }).setScrollFactor(0).setVisible(false);

      // Item configuration per room
      this.itemData = [
        { name: 'key', x: 610, y: 564,  room: 'room2', message: 'You found a key!' },
        { name: 'paper_code', x: 420, y: 300,  room: 'room6', message: 'An old mysterious book...' },
        { name: 'paper_code', x: 382, y: 3202, room: 'room9', message: 'You found a paper with a code!' },
        { name: 'keycard', x: 56, y: 362, room: 'room10', message: 'This might unlock something important.' },
    ];

        this.createAnimations();
        this.spawnItems();

    }
    createAnimations() {

        this.anims.create({
            key: 'walk_down',
            frames: [
                { key: 'character_front_left' },
                { key: 'character_front_middle' },
                { key: 'character_front_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walk_up',
            frames: [
                { key: 'character_back_left' },
                { key: 'character_back_middle' },
                { key: 'character_back_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walk_left',
            frames: [
                { key: 'character_left_side_left' },
                { key: 'character_left_side_middle' },
                { key: 'character_left_side_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walk_right',
            frames: [
                { key: 'character_right_side_left' },
                { key: 'character_right_side_middle' },
                { key: 'character_right_side_right' }
            ],
            frameRate: 10,
            repeat: -1
        });

    //     this.anims.create({
    //         key:'animateRoom13',
    //         frames:[
    //             {key:'room13'},
    //         {key:'room13.2'},
    //     {key: 'room13.3'}
    // ],
    // frameRate: 5,
    // repeat:-1

    //     });

    
    }

    spawnItems() {
        // Clear current item group
        this.items.clear(true, true);

        this.itemData.forEach(data => {
            if (data.room === this.currentRoom.roomKey) {
                const item = this.physics.add.sprite(data.x, data.y, data.name);
                item.setData('message', data.message);
                item.setData('name', data.name);

                item.setScale(0.3);
                this.physics.add.overlap(this.character, item, () => {
                    this.overlappingItem = item;
                }, null, this);
            }
        });
    }

    collectItem(item) {
        if (!item.active) return; // Don't collect if it's already inactive
    
        // Show textbox and message
        this.textbox.setVisible(true);
        this.messageText.setText(item.getData('message'));
        this.messageText.setVisible(true);
    
        // Hide after 2 seconds
        this.time.delayedCall(2000, () => {
            this.textbox.setVisible(false);
            this.messageText.setVisible(false);
        });
    
        // Remove item (disable body to make it disappear)
        item.disableBody(true, true);
    
        // Optionally track collected items (remove it from the item data)
        this.itemData = this.itemData.filter(data => data.name !== item.getData('name'));
    }

    update() {

        console.log(`Character Position - X: ${this.character.x}, Y: ${this.character.y}`);
        this.character.update();
        this.currentRoom.checkTransition(this.character);
    
        if (this.currentRoom.roomKey === 'room4' && !this.inkGlob) {
            this.spawnInkGlob();
        }
    
        if (this.inkGlob && this.inkGlob.visible) {
            this.physics.moveToObject(this.inkGlob, this.character, this.inkSpeed);
        }
        // Handle item collection with spacebar
    if (this.overlappingItem && Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('SPACE'))) {
        this.collectItem(this.overlappingItem);
        this.overlappingItem = null; // Reset overlapping item
    }
        // if (this.currentRoom.roomKey !== this.lastRoomKey) {
        //     this.spawnItems();
        //     this.lastRoomKey = this.currentRoom.roomKey;
        // }
        if (this.currentRoom.roomKey !== this.lastRoomKey) {
            if (this.lastRoomKey === 'room4' && this.inkGlob) {
                this.inkGlob.destroy();
                this.inkGlob = null;
                this.inkSpeed = 0;
                console.log("left room 4 - ink glob removed");
            }
        // if (this.currentRoom.roomKey !== this.lastRoomKey){
        //     if(this.lastRoomKey === 'room1' && this.ambience && this.ambience.isPlaying){
        //         this.ambience.stop();
        //     }
        //     }
if (this.currentRoom.roomKey === 'room1'){
    if(!this.ambience || !this.ambience.isPlaying){
        this.ambience=this.sound.add('ambience', {
            loop:true,
            volume:0.5
        });
        this.ambience.play();
    }
}
        // Handle item collection with spacebar
        if (this.overlappingItem && Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('SPACE'))) {
            this.collectItem(this.overlappingItem);
            this.overlappingItem = null;
        }
        if(this.currentRoom.roomKey !== this.lastRoomKey){
            this.spawnItems();
            this.lastRoomKey= this.currentRoom.roomKey;
        }
        // if(this.currentRoom.roomKey !== this.lastRoomKey) {
        //     if(this.lastRoomKey === 'room4' && this.inkGlob) {
        //         this.inkGlob.destroy();
        //         this.inkGlob = null;
        //         this.inkSpeed = 0;
        //         console.log("left room 4 - ink glob removed");
        //     }
        
        
        this.lastRoomKey= this.currentRoom.roomKey;
    }
}
    // onOverlap(){
    //     //console.log("Entering new room:", doorway.targetRoom);
    //    // this.currentRoom= new Room(this, doorway.targetRoom);

    //     if(this.inkGlob == 'room4'){
    //         this.inkGlob.destroy();
    //         this.inkGlob=null;
    //         console.log("ink glob disappears");
    //     }
    // }
    spawnInkGlob() {
        console.log("Entering Room 4 - Ink chase begins!");
        const spawnX = 517.5;
        const spawnY = 245;
    
        this.inkGlob = new InkGlob(this, spawnX, spawnY);
        this.add.existing(this.inkGlob);
        this.inkGlob.setScale(0.5);
        this.inkGlob.setVisible(false);
        this.inkSpeed = 0;
    
        this.physics.add.existing(this.inkGlob);
        this.physics.add.overlap(this.character, this.inkGlob, this.onInkGlobCatch, null, this);
    
        this.startChaseSequence();
    }
    
    startChaseSequence() {
        console.log("Ink glob will appear soon...");
        this.time.delayedCall(2000, () => {
            if (this.inkGlob) {
                this.inkGlob.setVisible(true);
                console.log("Ink glob appears!");
            }
        });
    
        this.time.delayedCall(3000, () => {
            this.inkSpeed = 70;
            console.log("Ink glob starts moving");
        });
    
        this.time.delayedCall(10000, () => {
            if (this.currentRoom.roomKey === 'room4') {
                console.log("Ink glob catches you! Game Over!");
                this.scene.restart();
            }
        });
    }
    shutdown() {
        if (this.inkGlob) {
            this.inkGlob.destroy();
            this.inkGlob = null;
            console.log("Room transition - ink glob cleaned up.");
        }
    }
//   onInkGlobCatch(){
//     console.log("Caught by the ink glob! Game Over!");
//     this.scene.restart();
//   }
    exitLastRoom() {
        this.scene('Chapter2Scene'); //switches to chapter 3 page when the charcter exit the last room
        if (this.ambience && this.ambience.isPlaying){
            this.ambience.stop();
        }
    }
}

export default GameScene; 
