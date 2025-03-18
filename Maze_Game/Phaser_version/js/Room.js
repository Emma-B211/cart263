import Wall from './Wall.js';

class Room extends Phaser.GameObjects.Container {
    constructor(scene, roomKey) {

        super(scene);

        this.scene = scene;
        this.roomKey = roomKey;
        this.scene.add.existing(this);

        //add room background
        this.background = this.scene.add.image(400, 300, roomKey);
        this.background.setDisplaySize(this.scene.scale.width, this.scene.scale.height);

        this.walls = this.scene.physics.add.staticGroup(); // Makes walls static
        this.createWalls();

    }

    createWalls() {
        this.walls.clear(true, true);

        if (this.roomKey === 'room1') {
            this.walls.add(new Wall(this.scene, 318, 300, 30, 600)); // this is the left wall
            this.walls.add(new Wall(this.scene, 454, 300, 30, 600)); //this is the right wall
        } else if (this.roomKey === 'room2') {
            this.walls.add(new Wall(this.scene, 290, 300, 30, 600));
            this.walls.add(new Wall(this.scene, 775, 300, 30, 600));
            this.walls.add(new Wall(this.scene, 590, 580, 340, 30)); // this dosent block the character at all as it passes to the other room before comming in contact witht the wall.

            // need to change because the character drawing still goes over the walls
            this.walls.add(new Wall(this.scene, 530, 300, 335, 450));

        }

        else if (this.roomkey === 'room3') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }
        else if (this.roomkey === 'room4') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }
        else if (this.roomkey === 'room5') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }
        else if (this.roomkey === 'room6') {
            this.walls.add(new Wall(this.scene, 300, 300, 50, 50));
        }


    }

    checkTransition(character) {
        if (this.roomKey === 'room1' && character.y <= 40) {
            this.changeRoom(character, 'room2', 350, 590); // eed to change the number because the character dosent get blocked by the wall and swithces rooms.
            // } else if (this.roomKey === 'room2' && character.y > 590) {
            //     this.changeRoom(character, 'room1', 380, 40);
            // }
        }

        //checck to make a rectangle and that on collision, the charcter move to a new room, instea dof the y or x as then the character will
        //not spawn over walls. so make a rectangle in the doorways !!!!!!

        /// its overlap()
        else if (this.roomKey === 'room2') {

            if (character.y >= 590) {
                this.changeRoom(character, 'room1', 380, 40);
            }
            else if (character.y <= 40) {
                this.changeRoom(character, 'room3', 380, 590);
            }
        }

        else if (this.roomKey === 'room3') {
            if (character.y >= 590) {
                this.changeRoom(character, 'room2', 380, 40);
            }
            else if (character.x <= 40) {
                this.changeRoom(character, 'room4', 570, 300);
            }

        }

        else if (this.roomKey === 'room4') {
            if (character.x >= 570) {
                this.changeRoom(character, 'room3', 40, 300);
            }
        }
    }

    changeRoom(character, newRoomKey, newX, newY) {
        console.log(`Transitioning to ${newRoomKey}...`);

        //  Keep the character and only change background & walls
        this.background.setTexture(newRoomKey);
        this.roomKey = newRoomKey;

        this.walls.getChildren().forEach(wall => wall.destroy());
        this.createWalls();

        character.y = newY;
        character.x = newX;

        //  Re-add collision so character interacts with new walls
        this.scene.physics.add.collider(character, this.walls);
    }
}

export default Room;
