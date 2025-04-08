
import IntroScene from './IntroScene.js';
import GameScene from './GameScene.js';
import Chapter2Scene from './Chapter2Scene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        // arcade: { debug: false }
    },
    scene: [IntroScene, GameScene, Chapter2Scene]
};

const game = new Phaser.Game(config);
