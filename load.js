Load = function(game) {
  this.game = game;
}

Load.prototype = {
  preload: function() {
    player = new Player(this.game);
    this.game.load.image('background', 'assets/paper.jpg');
    this.game.load.atlasJSONHash('person', 'assets/person.png', 'assets/person.json');
    this.game.load.image('left', 'assets/leftbutton.png');
    this.game.load.image('right', 'assets/rightbutton.png');
    this.game.load.image('up', 'assets/upbutton.png');
    this.game.load.tilemap('platforms', 'assets/platforms.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('platform', 'assets/platform.png');
    this.game.load.image('rain', 'assets/rain.png');
    
    this.game.load.audio('bgMusic', ['assets/paperSong.mp3', 'assets/paperSong.ogg']);
  },
  
  create: function() {
    this.game.stage.backgroundColor = '000000';
    
    this.game.state.start('menu');
  }
}

