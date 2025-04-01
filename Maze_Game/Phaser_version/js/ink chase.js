class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, inkGlob) {
    super(scene, x, y, 'character_front_left');
  
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
  
    this.setCollideWorldBounds(true);
    this.setOrigin(0.5, 1);
    this.setSize(220, 200);
    this.setScale(0.17);
  
    // Handle input keys
    this.keys = scene.input.keyboard.createCursorKeys();
    this.interactKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.speed = 150;
  
    this.holdingObject = null; // Track picked-up object

    // Ink Glob Variables
    this.inkGlob = inkGlob; 
    this.lightOn = true; // Track light state
  
    console.log("Character created:", this.x, this.y);
  }

  update() {
    this.setVelocity(0);
  
    // Movement controls
    if (this.keys.left.isDown) {
      this.setVelocityX(-this.speed);
      this.play('walk_left', true);
      this.body.setSize(130, 200);
    } else if (this.keys.right.isDown) {
      this.setVelocityX(this.speed);
      this.play('walk_right', true);
      this.body.setSize(130, 200);
    } else if (this.keys.up.isDown) {
      this.setVelocityY(-this.speed);
      this.play('walk_up', true);
      this.body.setSize(220, 200);
    } else if (this.keys.down.isDown) {
      this.setVelocityY(this.speed);
      this.play('walk_down', true);
      this.body.setSize(220, 200);
    } else {
      this.stop();
    }

    // Ink glob chase logic when lights are off
    if (!this.lightOn) {
      this.scene.physics.moveToObject(this.inkGlob, this, 100); // Ink glob chases the character
    } else {
      this.inkGlob.setVelocity(0, 0); // Ink glob stops when lights are on
    }
  
    // Pick-up object with spacebar
    if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
      this.pickUpObject();
    }
  
    // Carry the object if one is held
    if (this.holdingObject) {
      this.holdingObject.setPosition(this.x, this.y - 50);
    }
  }

  pickUpObject() {
    if (this.holdingObject) {
      console.log("Dropping object:", this.holdingObject.texture.key);
      this.holdingObject = null;
      return;
    }
  
    const objects = this.scene.physics.overlapRect(this.x, this.y, 50, 50);
  
    for (let obj of objects) {
      if (obj.gameObject && obj.gameObject.pickable) {
        console.log("Picked up object:", obj.gameObject.texture.key);
        this.holdingObject = obj.gameObject;
        return;
      }
    }
    console.log("No object to pick up.");
  }
}

export default Character;
