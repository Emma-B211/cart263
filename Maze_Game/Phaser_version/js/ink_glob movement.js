// const config={
//     type: Phaser.AUTO,
//     width: 400,
//     heihgt:300,
//     physics:{
//         default:'arcade',
//         arcade:{debug: false}
//     },
//     scene:{
//         preload,
//         create,
//         update
//     }
// };
let lamp, character, inkGlob,lightOn=true;
class ink_globmovement extends Phaser.Physics.Arcade.Sprite{
    constructor(){
        super(scene, x, y, 'inkglob');  // 'inkglob' is the image key you should have preloaded
        
        scene.add.existing(this);
    }
     preload(){
        this.load.image('inkGlob', 'assets/images/ink_glob.png');
    
    }
     create(){
        inkGlob=this.physics.add.sprite(100,100,'inkGlob');
        inkGlob.setScale(0.5);
        inkGlob.setVisible(false);
    
        this.time.addEvent({
            delay: Phaser.Math.Between(1000,3000),
            callback:() =>{
                lightOn=!lightOn;
                lamp.setAlpha(lightOn ? 1:0.3);
                inkGlob.setVisible(!lightOn);
            },
            loop: true
        });
        this.cursors=this.input.keyboard.createCursorKeys();
    }
    
     update(){
        if (this.cursors.left.isDown){
    character.setVelocityX(-160);
        } else if(this.cursors.right.isDown){
            character.setVelocityX(160);
        } else{
            character.setVelocityX(0);
        }
        if (this.cursors.up.isDown){
            character.setVelocityY(-160);
        }
        else if(this.cursors.down.isDown){
    character.setVelocityY(160);
        }
        else {
            character.setVelocityY(0);
        }
    
        if (!lightOn){
            this.physics.moveToObject(inkGlob,character,100);
        } else {
            inkGlob.setVelocity(0,0);
        }
    
    }
    
}
export default ink_globmovement;
