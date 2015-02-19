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
    
    this.player.animations.add('walk', ['idle', 'walk1', 'walk4', 'idle', 'walk3', 'walk2'], 7, true, false);
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    // Mobile Controls
    if (!this.game.device.desktop) {
        this.addMobileInputs();
    }
  },
  
  update: function() {
    this.player.body.velocity.x = 0;
    if (this.cursors.left.isDown || this.moveLeft) {
      this.player.scale.x = -1;
      this.player.body.velocity.x = -200;
      this.player.animations.play('walk');
    } else if (this.cursors.right.isDown || this.moveRight) {
      this.player.scale.x = 1;
      this.player.body.velocity.x = +200;
      this.player.animations.play('walk');
    } else {
      this.player.animations.stop();
      this.player.frameName = 'idle';
    }
  },
  
  // Build our inputs for mobile playing
  addMobileInputs: function() {

    this.moveLeft = false;
    this.moveRight = false;

    this.leftButton = this.game.add.sprite(this.game.width - 150, this.game.height - 25, 'left');
    this.leftButton.anchor.setTo(0.5, 0.5);
    this.leftButton.inputEnabled = true;
    this.leftButton.alph = 0.5;
    this.leftButton.fixedToCamera = true;
    this.leftButton.events.onInputOver.add(function(){this.moveLeft=true;}, this);
    this.leftButton.events.onInputOut.add(function(){this.moveLeft=false;}, this);
    this.leftButton.events.onInputDown.add(function(){this.moveLeft=true;}, this);
    this.leftButton.events.onInputUp.add(function(){this.moveLeft=false;}, this);

    this.rightButton = this.game.add.sprite(this.game.width - 50, this.game.height -25, 'right');
    this.rightButton.anchor.setTo(0.5, 0.5);
    this.rightButton.inputEnabled = true;
    this.rightButton.alph = 0.5;
    this.rightButton.fixedToCamera = true;
    this.rightButton.events.onInputOver.add(function(){this.moveRight=true;}, this);
    this.rightButton.events.onInputOut.add(function(){this.moveRight=false;}, this);
    this.rightButton.events.onInputDown.add(function(){this.moveRight=true;}, this);
    this.rightButton.events.onInputUp.add(function(){this.moveRight=false;}, this);

  }
}