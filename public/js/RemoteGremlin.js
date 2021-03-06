/* global game */

var RemoteGremlin = function (index, game, player, startX, startY, startAngle) {
  var x = startX
  var y = startY
  var angle = startAngle

  this.game = game
  this.health = 3
  this.player = player
  this.alive = true
  this.id = index

  this.player = game.add.sprite(x, y, 'gremlin')

  this.player.anchor.setTo(0.5, 0.5)
  this.player.animations.add('walk');
  this.player.animations.play('walk', 6, true);

  game.physics.enable(this.player, Phaser.Physics.ARCADE)
  this.player.body.immovable = true
  this.player.body.collideWorldBounds = true
  this.player.body.fixedrotation = true;

  this.player.angle = 0

  this.lastPosition = { x: x, y: y, angle: 0 }
}

RemoteGremlin.prototype.update = function () {
  if (this.player.x !== this.lastPosition.x || this.player.y !== this.lastPosition.y || this.player.angle != this.lastPosition.angle) {
    this.player.play('move')
    this.player.rotation = 0
  } else {
    this.player.play('stop')
  }

  this.lastPosition.x = this.player.x
  this.lastPosition.y = this.player.y
  this.lastPosition.angle = 0
}

window.RemoteGremlin = RemoteGremlin
