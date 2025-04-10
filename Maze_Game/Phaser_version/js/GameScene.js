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

      //  this.chestSpawned=false;
      // for code with chest to open and key collected
      this.hasKey=false;
      this.hasOpenedChest=false;
this.keyCardCollected=false;
//this.openChestSprite = null;
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
        this.load.image('room13.2','assets/images/room13_1.png');
        //this.load.image('room13.3','assets/images/room13_4.png');
        this.load.image('locked_door', 'assets/images/locked_door.png');
        this.load.image('open_door', 'assets/images/open_door.png');
this.load.image('locked_chest','assets/images/locked_chest.png');
 this.load.image('open_chest','assets/images/open_chest.png');
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
        this.load.image('paper_code1', 'assets/images/paper_code.png');
        this.load.image('keycard', 'assets/images/keycard.png');
       //this.load.image('key2', 'assets/images/key_copy_2_optimized.png');
      // this.load.image('paper_code2','assets/images/paper_code_copy_1_optimized.png');
        this.load.image('inkglob2','assets/images/ink_glob_copy_9_optimized.png');
        this.load.image('textbox', 'assets/images/textbox.png');

        this.load.image('note','assets/images/note.png');
        this.load.image('note1','assets/images/note2.png');
        this.load.image('note2','assets/images/note3.png');
        this.load.image('note3','assets/images/notes4.png');
        this.load.image('chapter1', 'assets/images/chapter1.png');
this.load.image('chapter2','assets/images/chapter2.png');
        this.load.audio('ambience','assets/ambience/eerie-ambience-6836.mp3');
    }

    create() {

        //load room
        this.currentRoom = new Room(this, 'room1');
        this.add.existing(this.currentRoom);
        this.lastRoomKey = null; // Track room changes properly

        this.room13AnimSprite=this.add.sprite(400,300,'room13').setDepth(-1);
        this.room13AnimSprite.setVisible(false);
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

        this.chandelierLight = this.add.graphics({ x: 160, y: 0 });
        this.chandelierLight.fillCircle(400,186, Phaser.Math.Between(10,20));
        this.chandelierLight.setDepth(1);
        // Setup item data
        this.items = this.add.group();
        this.overlappingItem = null;
        this.lockedChest = null;

this.room13Frame=0;
this.room13Frames=['room13','room13.2'];
this.room13AnimTimer= this.time.addEvent({
    delay:500,
    callback: ()=>{
        if(this.room13AnimSprite.visible){
            this.room13Frame=(this.room13Frame+1) % this.room13Frames.length;
            this.room13AnimSprite.setTexture(this.room13Frames[this.room13Frame]);
        }
    },
    loop: true
})
        // Create textbox image and message text (initially hidden)
        // this.textbox = this.add.image(400, 550, 'textbox').setScrollFactor(0);

        // instintiate inkglob
//         this.inkGlob = new InkGlob(this, 400, 300);
// this.add.existing(this.inkGlob);

if (this.currentRoom.roomKey === 'room4' && !this.inkGlob) {
    this.spawnInkGlob();
}
this.time.addEvent({
    delay:100,
    callback:()=>{
        if(this.currentRoom.roomKey === 'room10' && this.hasKeyCardCollected){
            this.chandelierLight.clear();
            this.chandelierLight.fillStyle(0xffffcc, Phaser.Math.FloatBetween(0.2,0.6));
            this.chandelierLight.fillCircle(400,100,Phaser.Math.Between(20,40));
            this.chandelierLight.visible=true;
        } else{
            this.chandelierLight.visible=false;
        }
    },
    loop: true
});

        this.textbox = this.add.image(30, 30, 'textbox').setScale(0.3).setScrollFactor(0).setOrigin(0, 0);
        this.textbox.setVisible(false);

        this.messageText = this.add.text(100, 100, '', {
            fontSize: '27px',
            fill: '#000000', // black text
            align: 'center',
            wordWrap: { width: 300, useAdvancedWrap:true },
        }).setScrollFactor(0).setVisible(false);

      // Item configuration per room
      this.itemData = [
        { name: 'key', x: 610, y: 564,  room: 'room2', message: 'You found a key!' },
        { name: 'paper_code1', x: 377, y: 188,  room: 'room6', message: 'You found a paper with a code!'},
        {name:'note',x:344,y:135, room:'room1', message: 'You need to leave!'},
        {name:'note2', x: 400, y:300, room:'room4', message:'You are not safe here'},
        {name: 'note3', x: 400, y: 200, room:'room7', message:'They are coming for you'}
       // { name: 'paper_code2', x: 382, y: 320, room: 'room9', message: 'You found a paper with a code!' },
        //{ name: 'keycard', x: 400, y: 186, room: 'room10', message: 'This might unlock something important.' },
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


    }

    spawnItems() {
        // Clear current item group
        this.items.clear(true, true);
    
        this.itemData.forEach(data => {
            if (data.room === this.currentRoom.roomKey) {
                if (data.name === 'keycard' && this.keycardCollected) return;
    
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

        if(item.getData('name')==='keycard') this.keycardCollected = true;
        // Remove item (disable body to make it disappear)
        item.disableBody(true, true);
    
        if(item.getData('name')==='key') this.hasKey=true;
        if(item.getData('name')==='keycard') this.keycardCollected = true;
     
        // Optionally track collected items (remove it from the item data)
        this.itemData = this.itemData.filter(data => data.name !== item.getData('name'));
    }

    update() {

        console.log(`Character Position - X: ${this.character.x}, Y: ${this.character.y}`);
        this.character.update();
        if(this.currentRoom.roomKey ==='room10'){
        if(!this.lockedChest){
            this.lockedChest= this.physics.add.sprite(400,186,this.hasOpenedChest ? 'open_chest' : 'locked_chest');
            this.lockedChest.setScale(0.4);
            this.lockedChest.setImmovable(true);

            this.physics.add.overlap(this.character,this.lockedChest,()=>{
                if(!this.hasOpenedChest && this.hasKey && Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('SPACE'))){
                    this.lockedChest.setTexture('open_chest');
                    this.hasOpenedChest=true;

                    if(!this.keyCardCollected){
                        const keycard = this.physics.add.sprite(400,150,'keycard').setScale(0.3);
                        keycard.setData('message','this might unlock something important');
                        keycard.setData('name','keycard');
                        this.items.add(keycard);
                        this.physics.add.overlap(this.character,keycard, () =>{
this.overlappingItem=keycard;
                        },null,this);
                    }
                    this.textbox.setVisible(true);
                    this.messageText.setText("the chest creaks open....");
                    this.messageText.setVisible(true);
                    this.time.delayedCall(2000, () => {
                        this.textbox.setVisible(false);
                        this.messageText.setVisible(false);
                    });
                }
            });
        }// Flickering chandelier light in room10 after picking up keycard
if (this.currentRoom.roomKey === 'room10' && this.keycardCollected) {
    this.chandelierLight.clear();
    this.chandelierLight.fillStyle(0xffffcc, Phaser.Math.FloatBetween(0.2, 0.6)); // Soft yellow flicker
    this.chandelierLight.fillCircle(400, 100, Phaser.Math.Between(60, 90)); // Flicker radius

    this.chandelierLight.visible = true;
} else {
    this.chandelierLight.visible = false;
}
    }
    
    else if (this.lockedChest){
        this.lockedChest.destroy();
        this.lockedChest=null;
    }
        this.currentRoom.checkTransition(this.character);

      //  added room13 animation
        if (this.currentRoom.roomKey==='room13' && this.keyCardCollected){
this.room13AnimSprite.setVisible(true);
this.room13AnimSprite.play();
        } else {
            this.room13AnimSprite.setVisible(false);
            this.room13AnimSprite.stop();
        }
             
        // }
      // if (this.currentRoom.roomKey !== this.lastRoomKey) {
        //     this.spawnItems();
        //     this.lastRoomKey = this.currentRoom.roomKey;
        // }
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

if(this.currentRoom.roomKey === 'room13' && this.hasKeyCardCollected){
    this.room13AnimSprite.setVisible(true);
} else {
    this.room13AnimSprite.setVisible(false);
}

    
        if (this.currentRoom.roomKey !== this.lastRoomKey) {
            if (this.lastRoomKey === 'room4' && this.inkGlob) {
                this.inkGlob.destroy();
                this.inkGlob = null;
                this.inkSpeed = 0;
                console.log("left room 4 - ink glob removed");
            }
       
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

        
        this.lastRoomKey= this.currentRoom.roomKey;
    }

}
   
    spawnInkGlob() {
        console.log("Entering Room 4 - Ink chase begins!");
        const spawnX = 550;
        const spawnY = 230;
    
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