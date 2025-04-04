export default class Chapter2Scene extends Phaser.Scene {
    constructor() {
        super('Chapter2Scene');
    }


    create() {

        this.add.image(400, 300, 'chapter2');
        this.input.on('pointerdown', () => {
            console.log('End of Demo');
        });
    }



}