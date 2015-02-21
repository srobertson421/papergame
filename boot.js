Boot = function(game) {
  this.game = game;
}

Boot.prototype = {
  preload: function() {},
  
  create: function() {
    this.game.world.setBounds(0, 0, 1923, 2510)
    
    //Scaling
    this.game.input.maxPointers = 1;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;
    this.game.state.start('load');
  }
}