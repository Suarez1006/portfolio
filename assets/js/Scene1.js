class Scene1 extends Phaser.Scene {
  constructor() {
    super("inicio");
  }

  preload() {
    this.load.image("logo", "../assets/images/logo.png");

    this.load.image("sky", "../assets/images/sky.png");
    this.load.image("ground", "../assets/images/platform.png");
    this.load.image("star", "../assets/images/star.png");
    this.load.image("star2", "../assets/images/star2.png");
    this.load.image("bomb", "../assets/images/bomb.png");
    this.load.spritesheet("dude", "../assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(640, 360, "sky");
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    var logo = this.add.image(400, 300, "logo").setScale(0.26);

    logo.setInteractive();
    logo.on("pointerdown", () => {
      console.log("iniciando juego");
      this.scene.start("juego");
    });
  }
}
