
const config={
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    scene:{
        preload,
        create
    }
};

const game= new Phaser.Game(config);

function preload(){
    this.load.image('lamp','path/to/lamp.png');
}

function create(){
    const lamp= this.load.image(400,300,'lamp');

    // create a flicker effect
    this.time.addEvent({
        delay: Phaser.Math.Between(50,200),
        callback:()=>{
            const flickerAlpha= Phaser.Math.FloatBetween(0.7,1);
            this.tweens.add({
                targets: lamp,
                alpha: flickerAlpha,
                duration: Phaser.Math.Between(50,150),
                onComplete:flicker.bind(this)
            });
        }
    });
    flicker.call(this)
}
// add glow effect
const light= this.lights.addLight(400,300,150).setIntensity(1);
this.lights.enable();
lamp.setPipeline('Light2D');