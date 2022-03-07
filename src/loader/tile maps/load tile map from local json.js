var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/cybernoid.png');

    this.load.tilemapTiledJSON('map', mapJSON);
}

function create ()
{
    var map = this.make.tilemap({ key: 'map' });

    var tiles = map.addTilesetImage('cybernoid', 'tiles');

    var layer = map.createLayer(0, tiles, 0, 0);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.5
    };

    controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}

var mapJSON = { "height":44,
 "layers":[
        {
         "data":[1, 2, 3, 4, 1, 4, 3, 4, 1, 2, 5, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 1, 2, 3, 6, 1, 2, 3, 6, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 8, 8, 8, 8, 8, 8, 8, 5, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 1, 2, 1, 2, 3, 6, 1, 2, 3, 6, 11, 1, 1, 12, 9, 4, 9, 4, 9, 4, 9, 10, 13, 14, 15, 14, 14, 15, 14, 15, 16, 17, 14, 14, 16, 17, 15, 14, 15, 14, 15, 14, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 12, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 9, 9, 9, 13, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 20, 7, 7, 16, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 21, 10, 9, 10, 9, 10, 9, 22, 1, 1, 12, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 11, 2, 2, 5, 7, 23, 7, 4, 7, 4, 7, 16, 17, 7, 7, 7, 7, 7, 7, 7, 23, 7, 7, 7, 23, 7, 7, 7, 7, 7, 7, 7, 5, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 18, 19, 20, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 24, 25, 26, 7, 7, 23, 23, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 2, 5, 7, 27, 28, 7, 27, 28, 7, 27, 28, 7, 27, 28, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 20, 7, 11, 3, 3, 5, 7, 7, 7, 23, 7, 4, 7, 27, 28, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 5, 7, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 32, 5, 3, 3, 5, 7, 23, 7, 7, 23, 7, 7, 23, 7, 7, 23, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 22, 7, 7, 7, 7, 7, 24, 25, 26, 7, 11, 6, 6, 5, 7, 7, 7, 7, 7, 23, 7, 33, 34, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 7, 7, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 32, 32, 5, 6, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 29, 30, 31, 7, 11, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 35, 36, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 32, 32, 32, 5, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 32, 32, 32, 32, 5, 2, 2, 21, 9, 9, 9, 9, 9, 22, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 3, 3, 5, 7, 7, 7, 7, 37, 38, 39, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 9, 9, 9, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 32, 32, 32, 32, 32, 5, 3, 1, 2, 3, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 6, 6, 5, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 7, 7, 7, 40, 7, 7, 7, 40, 7, 7, 7, 5, 1, 2, 3, 6, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 9, 9, 9, 9, 22, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 40, 16, 17, 40, 7, 7, 32, 32, 32, 32, 32, 32, 5, 6, 6, 12, 9, 9, 9, 9, 9, 13, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 1, 1, 5, 7, 7, 7, 7, 41, 42, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 16, 17, 44, 45, 16, 17, 45, 44, 5, 1, 2, 3, 6, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 12, 9, 9, 10, 9, 10, 9, 10, 9, 10, 22, 32, 5, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 2, 2, 5, 7, 7, 7, 12, 9, 9, 22, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 5, 6, 1, 2, 3, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 2, 3, 6, 5, 8, 8, 8, 8, 8, 8, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 5, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 32, 5, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 3, 1, 5, 7, 7, 7, 5, 2, 2, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 4, 6, 4, 2, 4, 6, 4, 2, 5, 6, 1, 2, 3, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1, 8, 46, 46, 46, 46, 46, 46, 46, 46, 46, 5, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 5, 6, 1, 2, 4, 6, 5, 2, 2, 5, 7, 5, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 1, 2, 5, 7, 7, 7, 5, 3, 3, 5, 15, 14, 15, 14, 15, 14, 15, 14, 14, 4, 14, 4, 14, 4, 14, 4, 14, 5, 1, 2, 3, 6, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 2, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 21, 9, 9, 9, 9, 9, 10, 9, 10, 8, 8, 8, 8, 9, 9, 22, 2, 2, 2, 2, 2, 2, 2, 2, 5, 14, 15, 14, 4, 14, 5, 3, 3, 5, 7, 5, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 5, 7, 47, 7, 7, 7, 7, 7, 47, 7, 11, 2, 3, 5, 7, 7, 7, 21, 9, 9, 13, 7, 7, 7, 7, 7, 7, 7, 7, 7, 23, 7, 4, 7, 4, 7, 4, 7, 5, 1, 2, 3, 6, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 3, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 7, 7, 7, 4, 7, 21, 9, 9, 13, 7, 5, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 3, 3, 3, 5, 47, 47, 47, 7, 7, 7, 47, 47, 47, 11, 3, 6, 5, 7, 7, 7, 7, 18, 19, 20, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 23, 7, 4, 7, 4, 7, 5, 1, 2, 3, 6, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 7, 7, 37, 38, 39, 7, 7, 7, 7, 7, 7, 7, 7, 8, 6, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 7, 7, 7, 4, 7, 7, 7, 7, 7, 7, 5, 6, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 8, 7, 47, 7, 7, 7, 7, 7, 47, 7, 11, 6, 1, 5, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 23, 7, 4, 7, 21, 9, 9, 9, 22, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 7, 7, 7, 4, 7, 7, 7, 7, 7, 7, 5, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 1, 2, 5, 7, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 23, 7, 7, 7, 7, 7, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 41, 42, 43, 7, 7, 7, 7, 7, 7, 7, 7, 8, 2, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 21, 9, 9, 9, 9, 9, 9, 9, 9, 13, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 5, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 2, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 21, 10, 8, 8, 8, 8, 9, 22, 7, 7, 7, 7, 7, 7, 8, 3, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 11, 7, 7, 48, 49, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 50, 7, 7, 7, 4, 7, 7, 7, 7, 5, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 3, 3, 3, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 3, 6, 5, 7, 51, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 12, 9, 9, 9, 6, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 11, 7, 7, 7, 4, 7, 7, 7, 7, 7, 52, 7, 52, 7, 52, 7, 52, 7, 52, 7, 7, 53, 54, 4, 7, 4, 7, 7, 7, 7, 5, 6, 6, 5, 7, 40, 7, 7, 7, 40, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 6, 1, 5, 7, 55, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 12, 10, 8, 8, 8, 8, 9, 13, 7, 7, 7, 5, 1, 1, 1, 1, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 11, 7, 7, 7, 4, 7, 7, 7, 7, 7, 5, 46, 5, 46, 5, 46, 5, 46, 5, 7, 7, 56, 57, 4, 7, 4, 7, 7, 7, 7, 5, 1, 1, 5, 7, 16, 17, 7, 16, 17, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 1, 2, 21, 10, 9, 10, 9, 10, 9, 22, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 2, 2, 2, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 9, 9, 9, 9, 9, 10, 9, 10, 8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 8, 8, 8, 8, 22, 7, 4, 58, 59, 12, 9, 13, 2, 2, 21, 10, 9, 10, 9, 10, 9, 22, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 2, 1, 2, 3, 6, 1, 2, 3, 6, 5, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 3, 3, 3, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 1, 2, 3, 6, 5, 1, 2, 3, 6, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 3, 1, 2, 3, 6, 1, 2, 3, 6, 5, 2, 2, 5, 6, 1, 1, 1, 1, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 1, 2, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 2, 3, 6, 1, 2, 3, 6, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 5, 3, 6, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1, 1, 1, 12, 9, 9, 9, 9, 9, 13, 14, 15, 5, 2, 2, 2, 2, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 2, 3, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 2, 3, 6, 1, 2, 3, 6, 5, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 14, 15, 14, 15, 14, 15, 14, 15, 14, 21, 9, 8, 8, 8, 8, 10, 9, 8, 8, 8, 8, 8, 8, 10, 13, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 3, 3, 3, 3, 3, 3, 5, 47, 7, 47, 7, 47, 7, 47, 7, 47, 7, 5, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 3, 2, 3, 5, 32, 32, 32, 32, 32, 32, 32, 32, 32, 5, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 33, 34, 7, 7, 7, 18, 19, 20, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 3, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 3, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 5, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 3, 6, 3, 6, 5, 47, 47, 47, 47, 47, 47, 47, 47, 47, 5, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 35, 36, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 5, 7, 7, 7, 50, 7, 7, 7, 7, 7, 8, 6, 6, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 1, 1, 1, 1, 1, 1, 5, 7, 47, 7, 47, 7, 47, 7, 47, 7, 47, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 6, 1, 6, 1, 5, 7, 32, 7, 7, 32, 7, 7, 32, 7, 21, 9, 9, 9, 9, 9, 9, 9, 9, 13, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 5, 7, 60, 7, 53, 54, 7, 7, 7, 7, 8, 1, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 21, 9, 9, 9, 9, 9, 9, 9, 13, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 1, 2, 1, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 20, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 5, 7, 61, 7, 56, 57, 7, 7, 7, 7, 8, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 32, 32, 32, 32, 32, 32, 32, 7, 7, 7, 62, 63, 7, 7, 5, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 5, 50, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 2, 3, 2, 3, 5, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 50, 7, 7, 7, 7, 7, 7, 7, 7, 37, 38, 39, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 3, 3, 3, 21, 9, 10, 9, 10, 9, 22, 7, 7, 7, 8, 3, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 52, 7, 52, 7, 52, 32, 32, 7, 7, 7, 5, 7, 7, 7, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 53, 54, 7, 51, 7, 7, 7, 7, 7, 7, 5, 3, 6, 3, 6, 5, 7, 7, 7, 40, 16, 17, 40, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 53, 54, 7, 7, 40, 7, 7, 7, 40, 24, 25, 26, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 8, 6, 6, 6, 5, 7, 7, 7, 7, 7, 7, 7, 40, 40, 7, 7, 7, 7, 5, 46, 5, 46, 5, 32, 32, 7, 7, 7, 5, 7, 7, 7, 5, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 5, 56, 57, 7, 55, 7, 7, 7, 7, 7, 7, 5, 6, 1, 6, 1, 5, 7, 7, 40, 8, 8, 8, 8, 40, 7, 7, 7, 7, 7, 7, 7, 7, 7, 56, 57, 7, 40, 16, 17, 40, 16, 17, 41, 42, 43, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 12, 9, 10, 9, 10, 9, 13, 7, 7, 7, 8, 1, 1, 1, 5, 7, 7, 7, 7, 7, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 13, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 21, 10, 9, 10, 9, 10, 9, 22, 7, 7, 7, 5, 1, 2, 1, 2, 21, 9, 8, 8, 8, 8, 8, 8, 8, 8, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 22, 45, 44, 45, 12, 9, 8, 8, 9, 9, 10, 8, 8, 8, 8, 9, 10, 22, 44, 45, 44, 45, 44, 45, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 2, 2, 2, 5, 7, 7, 7, 7, 7, 5, 1, 2, 3, 6, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 1, 2, 3, 6, 5, 7, 7, 7, 5, 2, 3, 2, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 2, 3, 6, 1, 2, 3, 11, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 3, 1, 1, 5, 7, 7, 7, 7, 7, 5, 1, 2, 3, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 4, 2, 4, 6, 1, 2, 3, 4, 1, 4, 3, 4, 5, 7, 7, 7, 5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 6, 1, 2, 4, 6, 1, 2, 3, 6, 1, 4, 3, 4, 1, 4, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 2, 2, 5, 7, 7, 7, 7, 7, 21, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 9, 10, 8, 8, 9, 8, 8, 10, 9, 10, 4, 10, 4, 10, 9, 10, 9, 4, 9, 4, 9, 4, 13, 7, 7, 7, 5, 2, 2, 2, 2, 2, 2, 2, 12, 10, 9, 10, 9, 10, 4, 10, 9, 10, 9, 10, 9, 4, 9, 4, 9, 4, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 64, 65, 66, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 13, 14, 15, 14, 15, 14, 15, 14, 14, 15, 14, 15, 14, 15, 14, 15, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 2, 3, 3, 5, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 20, 7, 7, 7, 7, 7, 7, 67, 68, 7, 67, 68, 7, 67, 68, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 20, 14, 15, 7, 7, 4, 7, 4, 7, 7, 7, 7, 4, 7, 4, 7, 4, 7, 7, 7, 7, 5, 3, 3, 3, 3, 3, 3, 3, 5, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 7, 4, 7, 4, 7, 4, 7, 7, 7, 7, 7, 67, 68, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 33, 34, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 21, 9, 9, 22, 7, 7, 47, 47, 7, 7, 5, 3, 6, 6, 5, 7, 7, 7, 7, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 69, 70, 7, 69, 70, 7, 69, 70, 7, 7, 7, 7, 7, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 7, 4, 7, 4, 7, 47, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 5, 32, 32, 32, 32, 7, 4, 7, 7, 7, 7, 7, 7, 32, 7, 4, 7, 4, 7, 7, 7, 7, 7, 69, 70, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 35, 36, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 2, 3, 6, 5, 47, 47, 47, 47, 47, 47, 8, 6, 1, 1, 5, 7, 7, 7, 7, 7, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 29, 30, 31, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 7, 47, 7, 4, 7, 47, 7, 7, 7, 7, 5, 1, 1, 1, 1, 1, 1, 1, 5, 32, 32, 32, 32, 7, 4, 7, 7, 7, 7, 7, 7, 4, 7, 4, 7, 32, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 6, 5, 47, 47, 47, 47, 47, 47, 8, 1, 9, 9, 13, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 47, 7, 4, 7, 4, 7, 7, 7, 7, 5, 2, 2, 2, 2, 2, 2, 2, 5, 52, 71, 72, 52, 7, 4, 50, 7, 7, 7, 7, 7, 4, 7, 4, 7, 4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 50, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 37, 38, 39, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 21, 10, 9, 10, 9, 10, 9, 10, 9, 10, 8, 8, 8, 8, 9, 13, 47, 47, 47, 47, 47, 47, 8, 2, 11, 7, 7, 7, 50, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 47, 7, 4, 7, 7, 7, 7, 5, 3, 3, 3, 3, 3, 3, 3, 5, 5, 7, 7, 73, 7, 32, 53, 54, 7, 7, 7, 7, 4, 7, 32, 7, 4, 7, 7, 37, 38, 39, 12, 9, 9, 9, 9, 9, 9, 9, 9, 22, 53, 54, 7, 7, 51, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 24, 25, 26, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 48, 49, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 62, 63, 7, 7, 8, 3, 11, 7, 7, 7, 53, 54, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 40, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 7, 4, 7, 7, 7, 7, 4, 7, 47, 7, 4, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 5, 74, 7, 7, 5, 7, 4, 56, 57, 7, 7, 7, 7, 4, 7, 4, 7, 4, 7, 7, 24, 25, 26, 5, 1, 2, 3, 6, 1, 2, 3, 6, 5, 56, 57, 7, 7, 55, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 41, 42, 43, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 52, 7, 7, 7, 7, 7, 52, 7, 7, 52, 7, 52, 7, 52, 7, 52, 7, 52, 7, 52, 7, 7, 7, 4, 7, 7, 7, 5, 6, 11, 7, 7, 7, 56, 57, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 40, 16, 17, 40, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 7, 4, 7, 7, 7, 7, 4, 7, 4, 7, 4, 7, 7, 7, 7, 5, 1, 1, 1, 1, 1, 1, 1, 5, 75, 7, 7, 76, 7, 4, 46, 46, 7, 7, 7, 7, 4, 7, 4, 7, 4, 7, 7, 41, 42, 43, 5, 1, 2, 3, 6, 1, 2, 3, 6, 21, 10, 9, 8, 8, 8, 8, 8, 8, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 22, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 5, 45, 58, 59, 44, 45, 5, 45, 44, 5, 44, 5, 44, 5, 46, 5, 46, 5, 46, 5, 7, 7, 7, 4, 7, 7, 7, 5, 1, 9, 10, 9, 8, 8, 8, 8, 10, 9, 10, 8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 4, 10, 4, 10, 9, 9, 9, 4, 45, 4, 45, 4, 45, 44, 45, 44, 5, 2, 2, 2, 2, 2, 2, 2, 21, 77, 78, 79, 77, 10, 4, 10, 9, 10, 9, 10, 9, 4, 9, 4, 9, 4, 9, 10, 9, 10, 9, 13, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10, 13, 2, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 4, 2, 4, 6, 1, 2, 3, 4, 1, 4, 3, 4, 1, 2, 3, 6, 5, 3, 3, 3, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 4, 6, 1, 2, 3, 6, 1, 4, 3, 4, 1, 4, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 5, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6],
         "height":44,
         "name":"level1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":160,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.0.3",
 "tileheight":16,
 "tilesets":[
        {
         "columns":11,
         "firstgid":1,
         "image":"..\/tiles\/cybernoid.png",
         "imageheight":128,
         "imagewidth":176,
         "margin":0,
         "name":"cybernoid",
         "spacing":0,
         "tilecount":88,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":16,
 "type":"map",
 "version":1,
 "width":160
};
