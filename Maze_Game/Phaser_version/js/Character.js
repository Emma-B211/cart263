class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
      super(scene, x, y, 'character_front_left');

      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);

      this.setCollideWorldBounds(true);
      this.setOrigin(0.5, 1);
      this.setSize(220, 200);
      this.setScale(0.17);

      // Handle input keys
      this.keys = this.scene.input.keyboard.createCursorKeys();
      this.interactKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.speed = 150;

      this.holdingObject = null;

      console.log("Character created:", this.x, this.y);
  }

  update() {
      let moving = false;

      if (this.keys.left.isDown) {
          this.setVelocityX(-this.speed);
          this.play('walk_left', true);
          this.body.setSize(130, 200);
          moving = true;
      } else if (this.keys.right.isDown) {
          this.setVelocityX(this.speed);
          this.play('walk_right', true);
          this.body.setSize(130, 200);
          moving = true;
      }

      if (this.keys.up.isDown) {
          this.setVelocityY(-this.speed);
          this.play('walk_up', true);
          this.body.setSize(220, 200);
          moving = true;
      } else if (this.keys.down.isDown) {
          this.setVelocityY(this.speed);
          this.play('walk_down', true);
          this.body.setSize(220, 200);
          moving = true;
      }

      if (!moving) {
          this.setVelocity(0);
          this.anims.stop();
      }

      if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
          this.pickUpObject();
      }
  }

  pickUpObject() {
      if (this.holdingObject) {
          console.log("Dropping object:", this.holdingObject.texture.key);
          this.holdingObject = null;
          return;
      }

      this.scene.physics.overlap(this, this.scene.pickableObjects, (character, object) => {
          if (object.pickable) {
              console.log("Picked up object:", object.texture.key);
              this.holdingObject = object;
              object.destroy();
          }
      });
  }
}

export default Character;
