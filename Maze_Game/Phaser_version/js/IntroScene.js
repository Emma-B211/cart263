export default class IntroScene extends Phaser.Scene {

    constructor() {
        super('IntroScene');
    }

    preload() {
        this.load.image('Intro_Cover', 'assets/images/Intro copy.png');
        this.load.image('Intro_Page2', 'assets/images/Intro_Page2.png');
        this.load.image('Intro_Chapter1', 'assets/images/Chapter1.png');
    }

    create() {

        this.currentPage = 0;

        this.pages = ['Intro_Cover', 'Intro_Page2', 'Intro_Chapter1'];

        this.bookSprite = this.add.image(400, 300, this.pages[this.currentPage]).setOrigin(0.5, 0.5).setScale(0.315, 0.37);

        this.input.on('pointerdown', () => this.flipPage(), this);

    }

    flipPage() {
        if (this.currentPage < this.pages.length - 1) {

            this.tweens.add({
                targets: this.bookSprite,
                scaleX: 0,
                duration: 300,
                onComplete: () => {
                    this.currentPage++;
                    this.bookSprite.setTexture(this.pages[this.currentPage]);
                    this.tweens.add({
                        targets: this.bookSprite,
                        scaleX: 0.315,
                        duration: 300
                    });
                }
            });
        }
        else {
            console.log(this.currentPage);
            this.scene.start('GameScene'); //This will start the game when the flipping of pages is done
        }
    }
}