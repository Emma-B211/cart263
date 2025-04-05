
import Room from './Room.js';
import Character from './Character.js';

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
    }

    create() {

        //load room
        this.currentRoom = new Room(this, 'room1');
        this.add.existing(this.currentRoom);
        this.lastRoomKey = null; // Track room changes properly


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

    update() {

        console.log(`Character Position - X: ${this.character.x}, Y: ${this.character.y}`);
        this.character.update();
        this.currentRoom.checkTransition(this.character);

        // Check if we changed rooms
        if (this.currentRoom.roomKey !== this.lastRoomKey) {
            this.lastRoomKey = this.currentRoom.roomKey;
            this.spawnItems(); // Respawn only correct items for this room

            // Update collision for new room
            this.physics.add.collider(this.character, this.currentRoom.walls);
        }

        if (this.overlappingItem && Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('SPACE'))) {
            this.collectItem(this.overlappingItem);
            this.overlappingItem = null;
        }
        // this.overlappingItem = null;
    }

    exitLastRoom() {
        this.scene('Chapter2Scene'); //switches to chapter 3 page when the charcter exit the last room
    }

}
export default GameScene; 
