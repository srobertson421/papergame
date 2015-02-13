Load = function(game) {
  this.game = game;
}

Load.prototype = {
  preload: function() {
    player = new Player(this.game);
    this.game.load.image('background', 'assets/paper.jpg');
    this.game.load.atlasJSONHash('person', 'assets/person.png', 'assets/person.json');
  },
  
  create: function() {
    this.game.state.start('menu');
  }
}

