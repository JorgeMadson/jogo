// Tutorial bão: https://phaser.io/tutorials/making-your-first-phaser-3-game/part3

import Phaser from "phaser";

const largura = window.innerWidth;
const altura = window.innerHeight;

var config = {
  title: "Jogo da Raiva",
  parent: "game",
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#00ffff",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    key: "main",
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("rua", "assets/rua.svg");
  this.load.image("boneco", "assets/person.svg");
  this.load.image("bloco", "assets/block.svg");
  this.load.image("pombo", "assets/pigeon.svg");
}

function create() {
  this.add.image(largura / 2, altura / 2, "rua");
  this.add.image(300, 300, "boneco");

  this.add.image(100, 400, "bloco");
  this.add.image(150, 400, "bloco");
  this.add.image(200, 400, "bloco");


  this.add.image(300, 500, "bloco");
  this.add.image(350, 500, "bloco");
  this.add.image(400, 500, "bloco");

  this.add.image(400, 250, "bloco");
  this.add.image(450, 250, "bloco");
  this.add.image(500, 250, "bloco");

  var particles = this.add.particles("bloco");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  var pombo = this.physics.add.image(400, 100, "pombo");

  pombo.setVelocity(100, 200);
  pombo.setBounce(1, 1);
  pombo.setCollideWorldBounds(true);

  emitter.startFollow(pombo);
}

function update(time, delta) {}
