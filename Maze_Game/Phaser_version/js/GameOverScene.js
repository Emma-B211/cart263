class GameOverScene extends Phaser.Scene{
    constructor(){
        super('GameOverScene')
    }

    create(){
        this.add.text(300,250,'Game Over', { fontSize:'48px', fill: '$fff'});
        this.input.once('pointerdown', ()=>{
            this.scene.start('GameScene');
        });
    }
}