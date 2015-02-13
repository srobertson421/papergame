Player = function(game) {
  this.game = game;
  this.player = null;
  this.cursors = null;
}

Player.prototype = {
  
  create: function() {
    console.log('player create');
    this.player = this.game.add.sprite(50, 100, 'person');
    this.player.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    this.game.camera.follow(this.player);
    
    this.player.animations.add('walk', ['walk1', 'walk2', 'walk3', 'walk4'], 7, true, false);
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
  },
  
  update: function() {
    this.player.body.velocity.x = 0;
    if (this.cursors.left.isDown) {
      this.player.scale.x = -1;
      this.player.body.velocity.x = -300;
      this.player.animations.play('walk');
    } else if (this.cursors.right.isDown) {
      this.player.scale.x = 1;
      this.player.body.velocity.x = +300;
      this.player.animations.play('walk');
    } else {
      this.player.animations.stop();
      //this.player.scale.x = 1;
      this.player.frameName = 'walk4';
    }
  }
}