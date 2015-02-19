Menu = function(game) {
  this.game = game;
}

Menu.prototype = {
  create: function() {
    console.log('menu create');
    var title = this.game.add.text(200, 100, 'Title - Tap to Continue', { font: '35px Arial', fill: '#ffffff' });
    title.anchor.setTo(0.5, 0.5);
    
    this.game.input.onDown.addOnce(this.start, this);
  },
  
  start: function() {
    console.log('menu start function');
    this.game.state.start('level');
  }
}