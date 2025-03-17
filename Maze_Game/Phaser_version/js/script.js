//import Phaser from '../libraries/phaser.js';
import GameScene from './GameScene.js';


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        // arcade: { debug: true }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);



// pick up object 

function pickUpItem(player, item){
    //hide the item (simulate pick up)
    item.setVisible(false);
    item.setActive(false);

    itemsCollected++;

    console.log('item picked up! Total items:'+ itemsCollected);

    //optionally, you can create new items in a random position to pick up
    item.setPosition(Phaser.Math.Between(50,750), Phaser.Math.Between(50,550));
    item.setVisible(true);
    item.setActive(true);

}
// let character;
// let room;

// function preload() {

//     //this.load.image('background', 'room1.png'); // load room background
//     this.load.image('room1', 'assets/images/room1.png');
//     this.load.image('room2', 'assets/images/room2.png');
//     this.load.spritesheet('character', 'assets/images/character.png', { frameWidth: 32, frameHeight: 32 });

// }

// function create() {

//     // this.add.image(400, 300, 'background'); // ADD background image
//     // character = this.physics.add.sprite(100, 100, 'character'); // create character with physics
//     room = new Room(this, 'room1'); //load first room
//     character = new Character(this, 100, 100);
// }

// function update() {
//     character.handleInput();
//     //characterMovement(); //handle character movement in phaser
// }
