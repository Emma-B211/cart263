const config={
    type:Phaser.AUTO,
    width: 400,
    height:300,
scene:{
    preload: preload,
    create: create,
    update: update,
}
};

const game= new Phaser.Game(config);

let inkEmitter;
let inkTexture;

function preload(){
    this.load.image('ink','assets/ink.png');

}

function create(){
    this.cameras.main.setBackgroundColor(0x000000)// change to background image;

    //create an emitter for the ink rush effect
    inkTexture= this.textures.get('ink').getSourceImage();

    inkEmitter=this.add.particles(400,300,'ink') //initial position of ink effect
    .createEmitter({
        speed:300, //speed will be adjusted
        angle:{min:0,max:360},//random angle of emission
        scale:{start:1,end:0.5},
        blendMode: Phaser.BlendModes.ADD, //use additive blending to make ink feel more liquid
lifespan:800,

    })
}