var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'src/games/firstgame/assets/sky.png');
    this.load.image('ground', 'src/games/firstgame/assets/platform.png');
    this.load.image('star', 'src/games/firstgame/assets/star.png');
    this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
    this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(0, 584, 'ground').setScale(1).refreshBody();
    platforms.create(400, 584, 'ground').setScale(1).refreshBody();
    platforms.create(800, 584, 'ground').setScale(1).refreshBody();

    platforms.create(600, 450, 'ground');
    platforms.create(50, 350, 'ground');
    platforms.create(750, 320, 'ground');
}

function update ()
{
}