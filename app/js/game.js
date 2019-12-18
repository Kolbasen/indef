// Frank Poth 02/28/2018
/* To keep this example from looking too boring, I made the game logic gradually
change some color values which then get drawn to the display canvas in the loop. */
const Player = require('./characters/player')
const World = require('./world/world')

class Game {
  constructor() {
    this.color = 'rgb(0,0,0)';
    this.colors = [0, 0, 0];
    this.shifts = [1, 1, 1];
    this.player = new Player(50, 50, 0, 0)
    this.world = new World()
  }
  
  update() {
    this.player.velocity_y += this.world.gravity;
    this.player.updatePosition()
    this.player.velocity_x *= this.world.friction
    this.player.velocity_y *= this.world.friction

    this.world.collideObject(this.player)
  }
}

module.exports = Game;
