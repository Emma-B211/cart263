class Room4Scene extends Phaser.Scene{
    constructor(){
        super({ key:'Room4Scene'});
    }
    preload(){
        this.load.image('room4', 'assets/images/room4.png');
        this.load.spritesheet('character', 'assets/images/Character_left_side.png', {
            frameWidth:64, frameHeight: 64
        });
        this.load.image('inkGlob','assets/images.ink_glob.png');
    }

create(){
    this.add.image(400,300,'room4').setOrigin(0.5,0.5);

    this.player=this.physics.addSprite(400,300,'character').setScale(1);
    this.player.setCollideWorldBounds(true);

    this.cursors= this.inputs.keyboard.createCursorsKeys();

    this.inkGlob=this.physics.add.sprite(200,200,'inkGlob');
    this.inkGlob.setScale(0.5);
    this.inkGlob.setVisible(false);

    this.time.delayedCall(2000, () => {
        this.inkGlob.setVisible(true);
        console.log("Ink glob starts chasing!");
    });
    this.physics.add.overlap(this.player,this.inkGlob,()=>{
        console.log('the ink glob caught you! Game over!')
    });
}

update(){
    this.player.setVelocity(0);
    if (this.cursors.left.isDown){
        this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown){
        this.player.setVelocityX(160);
    }
    if (this.cursors.up.isDown){
        this.player.setVelocitY(-160);
    } else if (this.cursors.down.isDown){
        this.player.setVelocity(160);
    }
}
}

export default Room4Scene;