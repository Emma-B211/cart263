
import GameScene from './GameScene.js';
//import Room4Scene from './room4scene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);
