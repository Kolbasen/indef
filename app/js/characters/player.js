const Character = require('./character')

class Player extends Character {
  constructor(x ,y) {
    super(x, y)
  }

  jump() {
    this.y -= 1;
  }

  attack() {

  }
}

module.exports = Player