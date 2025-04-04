
import Room from './Room.js';
import Character from './Character.js';
import InkGlob from './InkGlob.js'
class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
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
        this.load.image('room10', 'assets/images/room10.png');
        this.load.image('room11', 'assets/images/room11.png');
        this.load.image('room12', 'assets/images/room12.png');
        this.load.image('room13', 'assets/images/room13.png');

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

        this.load.image('key', 'assets/images/key.png');
        this.load.image('paper_code', 'assets/images/paper_code.png');
        this.load.image('keycard', 'assets/images/keycard.png');

        this.load.image('textbox', 'assets/images/textbox.png');

        this.load.image('chapter2', 'assets/images/chapter2.png');

        this.load.image('inkglobtexture', 'assets/images/ink_glob.png')
    }

    create() {
// load room

        this.currentRoom = new Room(this, 'room1');
        this.add.existing(this.currentRoom);
      this.lastRoomKey=null;
      
        this.character = new Character(this, 400, 300);
        this.add.existing(this.character);

        this.inventory = [];
        this.messageText = this.add.text(20, 20, '', { fontSize: '16px', fill: '#fff' }).setScrollFactor(0);

       
       // this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.physics.add.collider(this.character, this.currentRoom.walls);
        this.physics.add.overlap(this.character, this.currentRoom.doorways, this.onOverlap, null, this);
        this.physics.add.overlap(this.character, this.currentRoom.itemsGroup, this.showMessage, null, this);

        this.inkGlob=new InkGlob(this,100,200);
        this.character=this.add.sprite(200,200,'character');
        this.physics.add.existing(this.character);

        this.physics.add.collider(this.inkGlob, this.character);
         // Setup item data
         this.items = this.add.group();
         this.overlappingItem = null;
 
         // Create textbox image and message text (initially hidden)
         // this.textbox = this.add.image(400, 550, 'textbox').setScrollFactor(0);
 
         this.textbox = this.add.image(150, 100, 'textbox').setScale(0.5).setScrollFactor(0).setOrigin(0, 0);
         this.textbox.setVisible(false);
 
         this.messageText = this.add.text(170, 110, '', {
             fontSize: '16px',
             fill: '#000000', // black text
             wordWrap: { width: 300 },
         }).setScrollFactor(0).setVisible(false);
 
         // Item configuration per room
         this.itemData = [
             { name: 'key', x: 360, y: 400, room: 'room1', message: 'You found a key!' },
             { name: 'paper_code', x: 420, y: 300, room: 'room3', message: 'An old mysterious book...' },
             { name: 'paper_code', x: 350, y: 350, room: 'room6', message: 'You found a paper with a code!' },
             { name: 'keycard', x: 320, y: 420, room: 'room10', message: 'This might unlock something important.' },
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

    showMessage(character, item) {
        this.messageText.setText(item.message);
    }

    spawnItems() {
        // Clear current item group
        this.items.clear(true, true);

        this.itemData.forEach(data => {
            if (data.room === this.currentRoom.roomKey) {
                const item = this.physics.add.sprite(data.x, data.y, data.name);
                item.setData('message', data.message);
                item.setData('name', data.name);

                this.physics.add.overlap(this.character, item, () => {
                    this.overlappingItem = item;
                }, null, this);
            }
        });
    }
    collectItem(item) {
        if (!item.active) return;

        // Show textbox and message
        this.textbox.setVisible(true);
        this.messageText.setText(item.getData('message'));
        this.messageText.setVisible(true);

        // Hide after 2 seconds
        this.time.delayedCall(2000, () => {
            this.textbox.setVisible(false);
            this.messageText.setVisible(false);
        });
 // Remove item
 item.disableBody(true, true);
 
 // Optionally track collected items
 this.itemData = this.itemData.filter(data => data.name !== item.getData('name'));
}
    checkItemPickup(character) {
        this.physics.overlap(character, this.currentRoom.itemsGroup, (character, item) => {
            item.pickup(character, this.inventory);
        });
    }

    update() {
        console.log(`Character Position - X: ${this.character.x}, Y: ${this.character.y}`);
    
        // Ink Glob follows the character
        if (this.inkGlob && this.character) {
            this.inkGlob.followCharacter(this.character);
        }
    
        // Handle collision between Ink Glob and the character
        this.physics.collide(this.inkGlob, this.character, this.handleInkGlobCollision, null, this);
    
        // Check for room transitions
        if (this.currentRoom) {
            this.currentRoom.checkTransition(this.character);
        }
    
        // Handle Ink Glob overlap (if player is caught)
        if (this.currentRoom.inkGlob) {
            this.physics.add.overlap(this.character, this.currentRoom.inkGlob, () => {
                console.log("Player hit by the Ink Glob!");
                // Restart the game or implement another consequence
                this.restartGame(); // Example function to restart the game
            });
        }
    
        // Check if the character has moved to a new room
        if (this.currentRoom.roomKey !== this.lastRoomKey) {
            this.lastRoomKey = this.currentRoom.roomKey;
            this.spawnItems(); // Respawn the correct items for the current room
            this.physics
        }// Handle item collection via spacebar
    if (this.overlappingItem && Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('SPACE'))) {
        this.collectItem(this.overlappingItem);
        this.overlappingItem = null;
    }

    // Update character movements and animations
    this.character.update();

    }
    // Handle collision between the Ink Glob and the character
handleInkGlobCollision() {
    console.log('Ink Glob hit the character!');
    // Implement specific actions like restarting the game or triggering a special event
    this.restartGame();
}

// Function to restart the game or handle Ink Glob interaction consequences
restartGame() {
    // Logic to restart the game or move to a different scene
    this.scene.restart();
}
    exitLastRoom() {
        this.scene('Chapter2Scene'); //switches to chapter 3 page when the charcter exit the last room
    }
}

export default GameScene; 

/**
 * 
 * In create()
 */
   // this.rooms = {
        //     'room1': new Room(this, 'room1'),
        //     'room2': new Room(this, 'room2'),
        //     'room3': new Room(this, 'room3')
        // };
        // this.currentRoom = this.rooms['room1']; // Start in room 1
        // this.add.existing(this.currentRoom);

        // // Create character
        // this.character = new Character(this, 400, 300);
        // this.add.existing(this.character);

        // // Message box setup
        // this.textBox = this.add.image(400, 500, 'text_box').setVisible(false);
        // this.messageText = this.add.text(350, 500, '', { fontSize: '16px', fill: '#fff' }).setVisible(false);

        // Enable spacebar for interactions


        // this.currentRoom = new Room(this, 'room1');
        // this.character = new Character(this, 400, 300);
        // this.add.existing(this.character);



        // this.itemsGroup = this.add.group(); // Ensure the item group is initialized

        // // Create a textbox for item messages
        // this.textbox = this.add.image(400, 300, 'textbox').setVisible(false);
        // this.messageText = this.add.text(380, 290, '', { fontSize: '16px', fill: '#fff' }).setVisible(false);

        // this.inventory = []; //initialize inventory
        // this.messageText = this.add.text(20, 20, '', { fontSize: '16px', fill: '#fff' });

        // // Event listener for clicking on items
        // this.input.on('gameobjectdown', (pointer, item) => {
        //     if (item instanceof Item) {
        //         if (!this.inventory.includes(item.name)) {
        //             this.inventory.push(item.name); // Add item to inventory

        //             // Show textbox and message
        //             this.textbox.setVisible(true);
        //             this.messageText.setVisible(true);
        //             this.messageText.setText(`${item.name} picked up!`);

        //             // Remove item after a short delay
        //             this.time.delayedCall(1000, () => {
        //                 item.destroy();
        //                 this.textbox.setVisible(false);
        //                 this.messageText.setVisible(false);
        //             });
        //         }
        //     }
        // });

        // this.textbox = this.add.image(400, 550, 'textbox').setVisible(false);
        // this.messageText = this.add.text(380, 540, '', {
        //     fontSize: '16px',
        //     fill: '#fff',
        //     backgroundColor: '#000'
        // }).setVisible(false);

        // // Add a semi-transparent textbox background
        // this.textbox = this.add.image(400, 500, 'textbox').setOrigin(0.5).setScrollFactor(0);
        // this.textbox.setVisible(false);  // Hide it initially

        // // Add text on top of the textbox
        // this.messageText = this.add.text(400, 500, '', {
        //     fontSize: '18px',
        //     fill: '#ffffff',
        //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //     padding: { x: 10, y: 5 }
        // }).setOrigin(0.5).setScrollFactor(0);
        // this.messageText.setVisible(false); // Hide initially

        // this.checkItemPickup();

        // console.log(this.items);
        // const item = this.physics.add.sprite(300, 300, 'item_key');
        // item.pickable = true;
        // this.physics.add.overlap(character,item);







/**
 * 
 * in update()
 */

        // if (!this.isNearItem) {
        //     this.textbox.setVisible(false);
        //     this.messageText.setVisible(false);
        // }

        // if (this.currentRoom) {
        //     this.currentRoom.checkItemPickup(this.character, this.inventory, this.messageText);
        //     this.currentRoom.checkDoorUnlock(this.character, this.inventory, this.messageText);
        // }
        // Check items in the current room
        // this.currentRoom.items.forEach(item => item.update(this.character));

        // if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
        //     this.checkItemPickup();
        // 







 // createRooms() {
    //     this.rooms = {};

    //     this.rooms['room1'] = new Room(this, 'room1');
    //     this.rooms['room2'] = new Room(this, 'room2');

    //     // Add items to specific rooms
    //     let key = this.add.sprite(200, 150, 'key');
    //     key.setInteractive();
    //     this.rooms['room1'].addItem(key);

    //     let paperCode = this.add.sprite(300, 250, 'paperCode');
    //     paperCode.setInteractive();
    //     this.rooms['room2'].addItem(paperCode);
    // }




    // checkItemPickup(character, inventory, messageText) {
    //     this.currentRoom.items.forEach((item, index) => {
    //         if (Phaser.Math.Distance.Between(this.character.x, this.character.y, item.x, item.y) < 30) {
    //             inventory.push(item.name);
    //             messageText.setText(`Picked up: ${item.description}`);
    //             item.destroy();
    //             this.currentRoom.items.splice(index, 1);
    //         }
    //     });
    // }


// checkItemPickup() {
    //     this.currentRoom.items.forEach(item => {
    //         if (Phaser.Math.Distance.Between(item.x, item.y, this.character.x, this.character.y) < 50) {
    //             item.pickUp();
    //             this.currentRoom.items = this.currentRoom.items.filter(i => i !== item);
    //         }
    //     });
    // }

    // showItemMessage(itemName) {
    //     this.textBox.setVisible(true);
    //     this.messageText.setText(`You found a ${itemName}!`).setVisible(true);
    // }

    // hideItemMessage() {
    //     this.textBox.setVisible(false);
    //     this.messageText.setVisible(false);
    // }


    // switchRoom(character, doorway) {
    //     this.currentRoom = new Room(this, doorway.targetRoom);
    //     character.setPosition(doorway.targetX, doorway.targetY);
    // }
