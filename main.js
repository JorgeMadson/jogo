// Peguei daqui: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/tilemap/collision/matter%20platformer%20modify%20map.js
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
}

function create() {
  this.add.image(largura / 2, altura / 2, "rua");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  var logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

function update(time, delta) {}
