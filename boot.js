Boot = function(game) {
  this.game = game;
}

Boot.prototype = {
  preload: function() {},
  
  create: function() {
    this.game.world.setBounds(0, 0, 1923, 2510)
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;
    this.game.state.start('load');
  }
}