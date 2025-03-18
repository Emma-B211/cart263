let player;
let objects;

class Character extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'character_front_left');

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setOrigin(0.5, 1); // Places the origin at the bottom center
        this.setSize(150, 175); // Adjust this to the actual character size
        this.setScale(0.18);

        //Handle input keys
        this.keys = scene.input.keyboard.createCursorKeys();
        this.speed = 150;

        console.log("Character created:", this.x, this.y);
    }
// code to pick up items
create(){
    objects=this.physics.add.group({
        key:'item',
        repeat: 2,
        setXY:{x:200, y:200, stepX:150, StepY:150}// update depending where we want the items to be in once items were created
    });

    // create collision detection for player and objects
    this.physics.add.overlap(player,objects.collectItem,null,this);
}

collectItem(player,item){
    //destroy the item that was collected
    item.destroy();
    console.log('item collected!')
}
    update() {
        this.setVelocity(0);

        if (this.keys.left.isDown) {
            this.setVelocityX(-this.speed);
            this.play('walk_left', true);
        }

        else if (this.keys.right.isDown) {
            this.setVelocityX(this.speed);
            this.play('walk_right', true);
        }

        else if (this.keys.up.isDown) {
            this.setVelocityY(-this.speed);
            this.play('walk_up', true);
        }

        else if (this.keys.down.isDown) {
            this.setVelocityY(this.speed);
            this.play('walk_down', true);
        }

        else {
            this.stop(); // Stop animation when no key is pressed
        }

        this.body.setSize(30, 30);
    }
}

export default Character;
