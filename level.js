Level = function(game) {
  this.game = game;
}

Level.prototype = {
  
  create: function() {
    console.log('level create');
    this.background = this.game.add.tileSprite(0,0,1923,2510,'background');
    player.create();
  },
  
  update: function() {
    player.update();
  }
}