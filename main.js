// Tutorial bão: https://phaser.io/tutorials/making-your-first-phaser-3-game/part3

import Phaser from 'phaser';

const largura = window.innerWidth;
const altura = window.innerHeight;

var config = {
  title: 'Jogo da Raiva',
  parent: 'game',
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#00ffff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    key: 'main',
    preload: preload,
    create: create,
    update: update,
  },
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image('rua', 'assets/rua.svg');
  this.load.image('boneco', 'assets/person.svg');
  this.load.image('bloco', 'assets/block.svg');
  this.load.image('pombo', 'assets/pigeon.svg');
}

let platforms;
let player;

function create() {
  this.add.image(largura / 2, altura / 2, 'rua');

  platforms = this.physics.add.staticGroup();
  platforms.create(100, 800, 'bloco');
  platforms.create(150, 800, 'bloco');
  platforms.create(200, 800, 'bloco');

  platforms.create(300, 500, 'bloco');
  platforms.create(350, 500, 'bloco');
  platforms.create(400, 500, 'bloco');

  platforms.create(400, 250, 'bloco');
  platforms.create(450, 250, 'bloco');
  platforms.create(500, 250, 'bloco');

  player = this.physics.add.sprite(100, 450, 'boneco');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //   this.anims.create({
  //     key: 'left',
  //     frames: this.anims.generateFrameNumbers('boneco', { start: 0, end: 3 }),
  //     frameRate: 10,
  //     repeat: -1,
  //   });

  //   this.anims.create({
  //     key: 'turn',
  //     frames: [{ key: 'boneco', frame: 4 }],
  //     frameRate: 20,
  //   });

  //   this.anims.create({
  //     key: 'right',
  //     frames: this.anims.generateFrameNumbers('boneco', { start: 5, end: 8 }),
  //     frameRate: 10,
  //     repeat: -1,
  //   });

  this.physics.add.collider(player, platforms);

  var particles = this.add.particles('bloco');

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD',
  });

  var pombo = this.physics.add.image(400, 100, 'pombo');

  pombo.setVelocity(100, 200);
  pombo.setBounce(1, 1);
  pombo.setCollideWorldBounds(true);

  emitter.startFollow(pombo);
}

function update(time, delta) {
  var cursors = this.input.keyboard.createCursorKeys();

  if (cursors.left.isDown) {
    player.setVelocityX(-160);

    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);

    player.anims.play('right', true);
  } else {
    player.setVelocityX(0);

    // player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
}
