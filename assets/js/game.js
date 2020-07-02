var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 170 },
      debug: false,
    },
  },
  scene: [Scene1, Scene3, Scene2],
};

var game = new Phaser.Game(config);

var score;
var gameOver;

var player;
var stars;
var bombs;
var platforms;
var cursors;
var scoreText;
var dudeStateText;

var timedEvent;
var initialTime;
var timeText;

var patron;

var hongo;
