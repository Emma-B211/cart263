
import IntroScene from './IntroScene.js';
import GameScene from './GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: [IntroScene, GameScene]
};

const game = new Phaser.Game(config);
