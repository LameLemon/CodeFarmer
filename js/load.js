var loadState={
  // First to be called after boot
  // Include loading screen when over network
  // Load game and assets
  preload: function() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setMinMax(480, 360, 720, 540);

    var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {font: '30px', fill: '#ffffff', align:'centre'})
    loadingLabel.anchor.setTo(.5, .5);


    game.stage.backgroundColor = '#000000';

    game.load.image('playerBullet', 'assets/bullet192.png');
    game.load.image('enemyBullet', 'assets/bullet211.png');
    game.load.image('motorBullet', 'assets/bullet246.png');
    game.load.image('ultskill', 'assets/ultskill.png');
    game.load.image('addhealth', 'assets/health.png');
    game.load.image('megahealth', 'assets/megahealth.png');
    game.load.image('megabullet', 'assets/megabullet.png');
    game.load.spritesheet('characters', 'assets/[SPRITE].png', 32, 64);
    game.load.spritesheet('construct', 'assets/Construction70x200.png', 70, 200);
    game.load.spritesheet('boomm', 'assets/explode.png', 128, 128);
    game.load.image('playButton', 'assets/buttons/play.png');
    game.load.image('scoreButton', 'assets/buttons/score.png');
    game.load.image('helpButton', 'assets/buttons/help.png');
    game.load.image('help_Screen', 'assets/Help-Screen.png');
    game.load.image('backButton', 'assets/buttons/back.png');
    game.load.image('pothole', 'assets/Pothole32.png')
    game.load.image('newButton','assets/buttons/new-game.png');
    game.load.image('title-header', 'assets/buttons/title-header.png');
    game.load.image('motorbike', 'assets/motorbike26x52.png');

    // Maps
    game.load.tilemap('level2', 'assets/map/Level2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level0', 'assets/map/Level0.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level1', 'assets/map/Level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level3', 'assets/map/Level3.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level4', 'assets/map/Level4.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tile_master', 'assets/map/Tileset_Master.png');


    // Music
    game.load.audio('gmusic', 'assets/sound/Firefox_Tip_ChineseDream.mp3');
    game.load.audio('boom0', 'assets/sound/sfx_exp_shortest_soft2.wav');
    game.load.audio('boom1', 'assets/sound/sfx_exp_shortest_hard6.wav');
    game.load.audio('powerupsound', 'assets/sound/sfx_coin_double3.wav');
  },
  // Called after preload
  create: function() {
    game.state.start('title');
  }
}
