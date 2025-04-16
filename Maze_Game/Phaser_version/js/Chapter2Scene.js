export default class Chapter2Scene extends Phaser.Scene {
    constructor() {
        super('Chapter2Scene');
    }

    create(data) {
        console.log('Chapter 2 Scene loaded');
        
        const chapter2Image = this.add.image(400, 300, 'chapter2');
        chapter2Image.setScale(0.3);

        if (data && data.fromRoom13) {
            console.log('Transitioned from Room 13 successfully.');
        }

        this.input.on('pointerdown', () => {
            console.log('End of Demo');
        });
    }
}