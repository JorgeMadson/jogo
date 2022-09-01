// Peguei daqui: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/tilemap/collision/matter%20platformer%20modify%20map.js
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#00ff00',
  scene: {
      key: 'main',
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);


function preload ()
{
    this.load.image('rua', 'assets/street.jpg');
}

function create ()
{
    this.add.image(400, 300, 'rua');
}

function update (time, delta)
{

}
