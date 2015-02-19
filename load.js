Load = function(game) {
  this.game = game;
}

Load.prototype = {
  preload: function() {
    player = new Player(this.game);
    this.game.load.image('background', 'assets/paper.jpg');
    this.game.load.atlasJSONHash('person', 'assets/person.png', 'assets/person.json');
    this.game.load.image('left', 'assets/leftButton.png');
    this.game.load.image('right', 'assets/rightButton.png');
  },
  
  create: function() {
    this.game.stage.backgroundColor = '000000';
    
    //Scaling
    this.game.input.maxPointers = 1;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    
    this.game.state.start('menu');
  }
}

