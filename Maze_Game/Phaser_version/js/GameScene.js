import Room from './Room.js';
import Character from './Character.js';
import inkGlob from './InkGlob.js';
class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // Load assets
        const assets = [
            'room1', 'room2', 'room3', 'room4', 'room5', 'room6', 'room7', 'room8', 'room9', 'room10', 'room11', 'room12', 'room13',
            'locked_door', 'open_door',
            'character_front_left', 'character_front_middle', 'character_front_right',
            'character_back_left', 'character_back_middle', 'character_back_right',
            'character_left_side_left', 'character_left_side_middle', 'character_left_side_right',
            'character_right_side_left', 'character_right_side_middle', 'character_right_side_right',
            'inkglob', 'key', 'paper_code', 'keycard', 'textbox', 'chapter2'
        ];

        assets.forEach(asset => this.load.image(asset, `assets/images/${asset}.png`));
    }

    create() {
        // Initialize Room and Character
        this.currentRoom = new Room(this, 'room1');
        this.add.existing(this.currentRoom);
        this.character = new Character(this, 400, 300);
        this.add.existing(this.character);

        this.itemsGroup = this.physics.add.group();
        // Collisions and overlaps
        this.physics.add.collider(this.character, this.currentRoom.walls);
        this.physics.add.overlap(this.character, this.currentRoom.doorways, this.onOverlap, null, this);

        // Initialize UI elements
        this.textbox = this.add.image(150, 100, 'textbox').setScale(0.5).setScrollFactor(0).setOrigin(0, 0).setVisible(false);
        this.messageText = this.add.text(170, 110, '', { fontSize: '16px', fill: '#000000', wordWrap: { width: 300 } })
            .setScrollFactor(0).setVisible(false);

        // Initialize InkGlob chase
        this.inkglob = this.physics.add.sprite(500, 500, 'inkglob').setVisible(false);
        this.inkglobChaseTimer = null;

        // Item configuration per room
        this.itemData = [
            { name: 'key', x: 360, y: 400, room: 'room1', message: 'You found a key!' },
            { name: 'paper_code', x: 420, y: 300, room: 'room3', message: 'An old mysterious book...' },
            { name: 'paper_code', x: 350, y: 350, room: 'room6', message: 'You found a paper with a code!' },
            { name: 'keycard', x: 320, y: 420, room: 'room10', message: 'This might unlock something important.' },
        ];

        // Create animations and spawn items
        this.createAnimations();
        this.spawnItems();
    }

    createAnimations() {
        const animations = [
            { key: 'walk_down', frames: ['character_front_left', 'character_front_middle', 'character_front_right'] },
            { key: 'walk_up', frames: ['character_back_left', 'character_back_middle', 'character_back_right'] },
            { key: 'walk_left', frames: ['character_left_side_left', 'character_left_side_middle', 'character_left_side_right'] },
            { key: 'walk_right', frames: ['character_right_side_left', 'character_right_side_middle', 'character_right_side_right'] }
        ];

        animations.forEach(anim => {
            this.anims.create({
                key: anim.key,
                frames: anim.frames.map(frame => ({ key: frame })),
                frameRate: 10,
                repeat: -1
            });
        });
    }

    spawnItems() {
        if (this.itemsGroup){
           this.itemsGroup.clear(true, true); // Clear previous items  
        }
       

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

        // Display message
        this.textbox.setVisible(true);
        this.messageText.setText(item.getData('message')).setVisible(true);

        // Hide after 2 seconds
        this.time.delayedCall(2000, () => {
            this.textbox.setVisible(false);
            this.messageText.setVisible(false);
        });

        // Disable item
        item.disableBody(true, true);
        this.itemData = this.itemData.filter(data => data.name !== item.getData('name')); // Optionally track collected items
    }

    update() {
        this.character.update();
        this.currentRoom.checkTransition(this.character);

        // Room change logic
        if (this.currentRoom.roomKey !== this.lastRoomKey) {
            this.lastRoomKey = this.currentRoom.roomKey;
            this.spawnItems(); // Respawn correct items for the new room
            this.physics.add.collider(this.character, this.currentRoom.walls);

            // Start InkGlob chase in room4
            if (this.currentRoom.roomKey === 'room4' && !this.inkglobChaseTimer) {
                this.startInkGlobChase();
            }
            // In your game scene's update method
if (this.roomKey === 'room4') {
    // Assume player is the character you are controlling
    this.inkGlob.chase(this.player);
}
        }

        // InkGlob chase logic
        if (this.inkglob.visible) {
            this.physics.moveToObject(this.inkglob, this.character, 100); // 100 is the chase speed
        }

        // Handle item collection with spacebar
        if (this.overlappingItem && Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('SPACE'))) {
            this.collectItem(this.overlappingItem);
            this.overlappingItem = null;
        }
    }

    startInkGlobChase() {
        this.inkglob.setVisible(true);
        this.inkglobChaseTimer = this.time.delayedCall(10000, () => {
            this.inkglob.setVisible(false);
            this.inkglobChaseTimer = null;
        });
    }

    exitLastRoom() {
        this.scene('Chapter2Scene'); // Switches to the next scene when exiting the last room
    }
}

export default GameScene;
