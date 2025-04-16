import Room from './Room.js';
import Character from './Character.js';
//import ink_globmovement from './ink_glob movement.js';
import InkGlob from '/Maze_Game/Phaser_version/js/inkglob.js';
//import InkGlobChase from './ink chase.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        this.room13AnimSprite = null;
        this.inkGlob = null;
        this.hasKey = false;
        this.hasOpenedChest = false;
        this.keyCardCollected = false;
        this.timerStarted = false;
        this.countdownDuration = 60;  // NEW: set countdown duration to 60 seconds
        this.remainingTime = 60;
        this.timerEvent = null;
        this.timerText = null;
        this.interactText = null;
        this.room13DoorOpened = false; // Use this variable consistently
        this.chapter2Started = false;
        this.hasExitedRoom13 = false; // Variable to track if the player has exited room 13
    }


//this.openChestSprite = null;

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
        this.load.image('door_end', 'assets/images/door_end.png');
        this.load.image('door_open', 'assets/images/door_open.png');
        this.load.image('keycard_reader', 'assets/images/keycard_reader.png');
        //this.load.image('room13.2','assets/images/room13_1.png');
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
        this.load.image('note3','assets/images/note4.png');
        this.load.image('chapter1', 'assets/images/chapter1.png');
this.load.image('chapter2','assets/images/chapter2.png');
        this.load.audio('ambience','assets/ambience/eerie-ambience-6836.mp3');
    }

    create() {

        //load room
       
        this.currentRoom = new Room(this, 'room1');
        this.add.existing(this.currentRoom);
        this.lastRoomKey = null; // Track room changes properly
       // this.timerText=null;
        // const startRoomKey= this.scene.settings.data?startRoom|| 'room1';
        // this.currentRoom=new Room(this, startRoomKey);
        this.room13AnimSprite=this.add.sprite(400,300,'room13').setDepth(-1);
        this.room13AnimSprite.setVisible(false);
// Set up timer text
this.remainingTime = this.countdownDuration;
this.timerText = this.add.text(500, 10, '', {
    font: '25px',
    fontFamily: 'Input',
    fill: '#FF0000'
}).setScrollFactor(0);
this.timerText.setVisible(false);


// music ambience
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
       // this.physics.add.overlap(this.character, this.currentRoom.doorways, this.onOverlap, null, this);
// adding light after our lil cutie grabs the keycard
        this.chandelierLight = this.add.graphics({ x: 160, y: 0 });
        this.chandelierLight.fillCircle(400,186, Phaser.Math.Between(10,20));
        this.chandelierLight.setDepth(1);
        // Setup item data
        this.items = this.add.group();
        this.overlappingItem = null;
        this.lockedChest = null;

 // Set up room 13
 //this.room13AnimSprite = this.add.sprite(400, 300, 'room13').setDepth(-1);
 this.room13AnimSprite.setVisible(false); // Initially invisible
 this.room13Door = this.physics.add.image(224, 39, 'door_end').setDepth(4).setScale(0.3).setVisible(false);
 this.room13Door.body.allowGravity=false;
 this.room13Door.setImmovable(true);
 this.physics.add.overlap(this.character, this.room13Door, this.onDoorwayOverlap, null, this);
// this.room13AnimSprite=this.add.sprite(224,39,'door_open').setDepth(4).setScale(0.3).setVisible(false);
 this.keycardMachine = this.physics.add.sprite(170, 45, 'keycard_reader').setDepth(5).setScale(0.4).setVisible(false);
 this.keycardMachine.body.allowGravity = false;
 this.keycardMachine.setImmovable(true);
//  this.keycardMachineOverlap = this.physics.add.zone(170, 45, this.keycardMachine.width, this.keycardMachine.height);
this.keycardMachineOverlap = this.add.zone(170, 45, this.keycardMachine.width, this.keycardMachine.height);
 this.keycardMachineOverlap.setVisible(false); // Keep it invisible
 this.physics.add.overlap(this.character, this.keycardMachineOverlap, this.onKeycardInteract, null, this);
 this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
// Define the overlap check with the door in room13
//this.physics.add.overlap(this.character, this.room13Door, this.onDoorwayOverlap, null, this);

 this.time.addEvent({
    delay: 100,
    callback: () => {
        if (this.currentRoom.roomKey === 'room13') {
            this.room13AnimSprite.setVisible(true);
            this.room13Door.setVisible(true);
            this.keycardMachine.setVisible(true);
        }else {
            this.room13AnimSprite.setVisible(false);
            this.room13Door.setVisible(false);
            this.keycardMachine.setVisible(false);
        }
    },
    loop: true
});
   // Event for interacting with the keycard reader
   this.physics.add.overlap(this.character, this.keycardMachine, this.onKeycardInteract, null, this);

// attempt code to animate last room

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
        {name:'note1', x: 575, y:250, room:'room3', message:'You are not safe here'},
        {name: 'note2', x: 418, y: 96, room:'room5', message:'They are coming for you'},
        {name:'note3', x: 79, y: 385, room: 'room10', message: 'GET OUT!'}
       // { name: 'paper_code2', x: 382, y: 320, room: 'room9', message: 'You found a paper with a code!' },
        //{ name: 'keycard', x: 400, y: 186, room: 'room10', message: 'This might unlock something important.' },
    ];

        this.createAnimations();
        this.spawnItems();
this.physics.world.enable(this.keycardMachine);
this.keycardMachine.body.allowGravity = false;

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
        if (item.getData('name') === 'keycard') {
            this.keyCardCollected = true;
            this.timerText.setVisible(true);
            // Start the countdown timer
            if (!this.timerStarted) {
                this.startCountdownTimer();
                this.timerStarted=true;
            }
        }
        // Remove item (disable body to make it disappear)
        item.disableBody(true, true);
       this.overlappingItem=null;
    
        if(item.getData('name')==='key') this.hasKey=true;
        if(item.getData('name')==='keycard') this.keycardCollected = true;
     
        // Optionally track collected items (remove it from the item data)
        this.itemData = this.itemData.filter(data => data.name !== item.getData('name'));
    }

    update() {
        if (this.timerStarted) {
            this.remainingTime -= this.game.loop.delta / 1000; // Decrement time based on frame rate
            this.timerText.setText('Time Remaining: ' + Math.max(0, Math.floor(this.remainingTime)) + 's');
            if (this.remainingTime <= 0) {
                this.timerStarted = false;
                this.scene.start('GameOverScene');
            }
        }
    
       // console.log(Character Position - X: ${this.character.x}, Y: ${this.character.y});
        this.character.update();
    
        // Room 13 door state debug section
        if (this.currentRoom.roomKey === 'room13') {
            // Print out current debug conditions
            console.log("DEBUG Room13: keycardCollected =", this.keyCardCollected, " keycardCollected (flag) =", this.keycardCollected, " room13DoorOpened =", this.room13DoorOpened);
            
            // Check: if we have collected the keycard then door should be open (door_open),
            // otherwise it should remain door_end.
            if (this.keycardCollected) {
                // Our other variable "this.room13DoorOpened" may be set via onKeycardInteract(),
                // so if not already open, open the door.
                if (!this.room13DoorOpened) {
                    console.log("DEBUG: Keycard collected but door not yet opened. Opening door...");
                    this.room13Door.setTexture('door_open');
                    this.room13DoorOpened = true;
                    this.scene.start('Chapter2Scene');

                }
            } else {
                // Debug logging if keycard hasn't been collected.
                console.log("DEBUG: Keycard NOT collected. Door should remain closed.");
                // For safety, force door texture back to door_end if it is not supposed to be open.
                if (this.room13DoorOpened) {
                    console.warn("DEBUG Warning: Door appears to be open even though keycard was NOT collected. Forcing door_end texture.");
                    this.room13Door.setTexture('door_end');
                    this.room13DoorOpened = false;
                } else {
                    this.room13Door.setTexture('door_end');
                }
            }
        }
    

        // if character is close to the keycard reader in room13, allow pressing SPACE to trigger door open
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        if (this.currentRoom.roomKey === 'room13') {
            const dist = Phaser.Math.Distance.Between(
                this.character.x, this.character.y,
                this.keycardMachine.x, this.keycardMachine.y
            );
            if (dist < 50) {
                // Optionally, set up interact text here if desired.
                // When player presses SPACE, try to open door:
                if (Phaser.Input.Keyboard.JustDown(this.keySpace)) {
                    if (this.keyCardCollected && !this.room13DoorOpened) {
                        this.openRoom13Door();
                    } else {
                        this.showMessage("You need a keycard to unlock this.");
                    }
                }
            }
        }
// animation for chest
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
                        this.timerStarted=true;
                        this.remainingTime=this.countdownDuration;
                        this.items.add(keycard);
                        this.physics.add.overlap(this.character,keycard, () =>{
this.overlappingItem=keycard;
                        },null,this);
                    }
                    this.textbox.setVisible(true);
                    this.messageText.setText("the chest creaks open....");
                    this.messageText.setVisible(true);
                    this.time.delayedCall(3000, () => {
                        this.textbox.setVisible(false);
                        this.messageText.setVisible(false);
                    });
                }
            });
        }if (!this.timerStarted && this.keycardCollected) {
            this.timerStarted = true;
          //  this.startCountdown();
        }
        if (this.currentRoomId === 13 && this.interactText) {
            this.interactText.setVisible(this.room13AnimationComplete && this.playerIsNearExit);
        }
        this.events.on('updateRoom', (roomKey) =>{
            if(roomKey=== 'room13'){
                this.setUpRoom13Objects();
            }
        });

      if (this.currentRoom.roomKey === 'room13'){
        if(this.keyCardCollected){
            this.room13Dooor.setTexture('door_open');
        } else {
            this.room13Door.setTexture('door_end');
        }
      }
      this.physics.add.overlap(this.character, this.room13Door, this.checkRoom13Exit, null, this);
      this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

if(this.currentRoom.roomKey === 'room13'){
    const dist = Phaser.Math.Distance.Between(
        this.character.x,this.character.y, this.keycardMachine.x, this.keycardMachine.y
    );

    if(dist <50){
        this.interactText.setPosition(this.keycardMachine.x - 40, this.keycardMachine.y - 50);
        this.interactText.setVisible(true);

        if(Phaser,Input.Keyboard.JustDown(this.keySpace)){
if(this.keyCardCollected && !this.room13DoorOpen){
    this.openRoom13Door();
} else{
    this.showMessage("You need a keycard to unlock this.")
}
        }
    } else{
        this.interactText.setVisible(false);
    }
}
// if (this.currentRoom.roomKey === 'room13' && this.room13DoorOpened && !this.chapter2Started) {
//     this.chapter2Started = true;
//     this.scene.start('Chapter2Scene');
// }
// this.physics.add.overlap(this.character, this.room13Door, () => {
//     if (this.room13DoorOpened) {
//         this.scene.start('Chapter2Scene', { fromRoom13: true });
//     }
// });
  
        // Flickering chandelier light in room10 after picking up keycard
        if(this.currentRoom.roomKey === 'room10' && this.keyCardCollected) {
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
// checkRoom13Exit(character, door) {
//     if (this.room13DoorOpened) {
//         this.scene.start('chapter2scene');
//     }
// }
onKeycardInteract(character, reader) {
    if (Phaser.Input.Keyboard.JustDown(this.interactKey) && this.keyCardCollected && !this.room13DoorOpened) {
        this.room13AnimSprite.play('room13_door_open'); // Play your custom door animation if you have it
        this.room13DoorOpened = true;

        // Delay transition until animation finishes (~2s here, adjust to match actual anim time)
        this.time.delayedCall(7000, () => {
            if (!this.chapter2Started && this.currentRoom.roomKey === 'room13') {
                this.startChapter2();
            }
        });
    }
}
startChapter2() {
    this.chapter2Started = true;
    this.time.delayedCall(7000,()=>{
        this.scene.start('Chapter2Scene');
    });
}
openRoom13Door() {
    if (this.room13DoorOpened) return;
    this.room13DoorOpened = true;
    this.room13Door.setTexture('door_open');
    this.showMessage("The door is now unlocked.");
    // Optionally, delay the transition here too:
    // this.time.delayedCall(7000, () => {
    //     this.scene.start('Chapter2Scene');
    // });
}
// Event for transitioning to Chapter 2 when passing through the doorway
onDoorwayOverlap(character, doorway) {
    if (
        this.currentRoom.roomKey === 'room13' &&
        this.room13DoorOpened &&           // Ensure door was opened
        !this.chapter2Started              // Prevent multiple triggers
    ) {
        this.chapter2Started = true;

        // Optional: add animation/fade out etc.
        this.cameras.main.fadeOut(1000, 0, 0, 0);

        this.cameras.main.once('camerafadeoutcomplete', () => {
           this.time.delayedCall(7000, ()=>{
             this.scene.start('Chapter2Scene');
           });
           
        });
    }//}
}
// onOverlap(character, doorway) {
//     const nextRoomKey = doorway.getData('targetRoom');
//     if (!nextRoomKey || nextRoomKey === this.currentRoom.roomKey) return;

//     // Special logic for room13
//     if (this.currentRoom.roomKey === 'room13' && !this.room13DoorOpened) {
//         this.showMessage("The door is locked. You need to use the keycard.");
//         return;
//     }

//     this.lastRoomKey = this.currentRoom.roomKey;
//     this.transitioning = true;

//     // Clean up and switch to the next room
//     this.currentRoom.destroy();
//     this.currentRoom = new Room(this, nextRoomKey);
//     this.add.existing(this.currentRoom);

//     // Re-add collisions and overlaps
//     this.physics.add.collider(this.character, this.currentRoom.walls);
//     this.physics.add.overlap(this.character, this.currentRoom.doorways, this.onOverlap, null, this);

//     this.transitioning = false;
//     this.updateRoomVisuals();
//}
exitRoom(player, doorway) {
    // Check if the player is exiting through the last doorway in room13
    if (this.currentRoom.roomKey === 'room13' && doorway === this.room13Door) {
        // Trigger Chapter2Scene when the player exits the last doorway
        if (!this.chapter2Started) {
            this.chapter2Started = true;
            this.scene.start('Chapter2Scene');  // Replace 'Chapter2Scene' with your scene name
        }
    }
}

showMessage(text) {
    this.textbox.setVisible(true);
    this.messageText.setText(text);
    this.messageText.setVisible(true);

    this.time.delayedCall(3000, () => {
        this.textbox.setVisible(false);
        this.messageText.setVisible(false);
    });
}
// countdown at the end to leave to the exit
startCountdownTimer() {
    this.remainingTime = this.countdownDuration;
    this.timerStarted = true;
    this.timerEvent = this.time.addEvent({
        delay: 1000,
        callback: () => {
            this.remainingTime--;
            this.timerText.setText('Time Remaining: ' + Math.max(0, this.remainingTime) + 's');
            if (this.remainingTime <= 0) {
                this.timerStarted = false;
                this.scene.start('GameOverScene');
            }
        },
        loop: true
    });
}
   // spawns the inkglob
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
        this.time.delayedCall(1000, () => {
            if (this.inkGlob) {
                this.inkGlob.setVisible(true);
                console.log("Ink glob appears!");
            }
        });
    
        this.time.delayedCall(2000, () => {
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

    exitLastRoom() {
        this.scene('Chapter2Scene'); //switches to chapter 3 page when the charcter exit the last room
        if (this.ambience && this.ambience.isPlaying){
            this.ambience.stop();
        }
    }
    gameOver(){
        //this.timerStarted=false;
        this.scene.start('GameOverScene');
    }
}

export default GameScene; 