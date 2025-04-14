class GameOverScene extends Phaser.Scene{
    constructor(){
        super('GameOverScene')
    }

    create(){
        this.add.text(280,200,'Game Over', { fontSize:'64px', fill: '#ff0000',  fontFamily: 'Input'});

      //restart button
      const restartBtn= this.add.text(320,300,'RESTART',{
        fontSize:'32px',
        fill:'#ffffff',
        backgroundColor: '#000000',
        padding:{x:20,y:10}
      }).setInteractive();

      restartBtn.on('pointerdown',()=>{
        this.scene.start('GameScene');
      });
    }
}
export default GameOverScene;