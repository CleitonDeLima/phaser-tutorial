import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.image("background", "assets/Background/bg_layer1.png");

    // load the platform image
    this.load.image("platform", "assets/Environment/ground_grass.png");
  }

  create() {
    this.add.image(240, 320, "background");

    // add a platform image in the middle
    // this.add.image(240, 320, "platform").setScale(0.5);
    // this.physics.add.staticImage(240, 320, "platform").setScale(0.5);
    const platforms = this.physics.add.staticGroup();

    // then create 5 platforms from the group
    for (let i = 0; i < 5; i++) {
      const x = Phaser.Math.Between(80, 400);
      const y = 150 * i;

      /** @type {Phaser.Physics.Arcade.Sprite} */
      const platform = platforms.create(x, y, "platform");
      platform.scale = 0.5;

      /** @type {Phaser.Physics.Arcade.StaticBody} */
      const body = platform.body;
      body.updateFromGameObject();
    }
  }
}
