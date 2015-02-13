var game = new Phaser.Game(960, 680, Phaser.AUTO, 'game');

game.state.add('boot', new Boot(game));
game.state.add('load', new Load(game));
game.state.add('menu', new Menu(game));
game.state.add('map', new Map(game));
game.state.add('level', new Level(game));
game.state.start('boot');