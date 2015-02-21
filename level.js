Level = function(game) {
  this.game = game;
  this.layer = null;
}

Level.prototype = {
  
  create: function() {
    console.log('level create');
    this.background = this.game.add.tileSprite(0,0,1923,2510,'background');
    
    this.music = this.game.add.audio('bgMusic', 0.5, true);
    this.music.play('', 0, 0.5, true);
    
    this.platforms = this.game.add.tilemap('platforms');
    this.platforms.addTilesetImage('platform', 'platform');
    
    this.layer = this.platforms.createLayer('platforms');
    
    this.platforms.setCollision(1, true, 'platforms');

    //this.layer.resizeWorld();
    
    this.emitter = this.game.add.emitter(this.game.world.centerX, 0, 400);
    this.emitter.width = this.game.world.width;
    //this.emitter.angle = 30 // uncomment to set an angle for the rain
    this.emitter.makeParticles('rain');
    this.emitter.minParticleScale = 0.5;
    this.emitter.maxParticleScale = 1;
    this.emitter.setYSpeed(300, 500);
    this.emitter.setXSpeed(-5, 5);
    this.emitter.minRotation = 0;
    this.emitter.maxRotation = 0;
    this.emitter.start(false, 3200, 5, 0);
    
    player.create();
  },
  
  update: function() {
    
    this.game.physics.arcade.collide(player.player, this.layer);
    //this.game.physics.arcade.collide(this.emitter, player.player, this.killDrop, this);
    //sthis.game.physics.arcade.collide(this.emitter, this.layer, this.killDrop, this);
    
    player.update();
  },
  
  killDrop: function(drop) {
    console.log(drop);
    drop.kill();
  }
}