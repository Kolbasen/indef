class Character { 
  constructor(x, y) {
    this.width = 16;
    this.height = 16;
    this.x = x;
    this.y = y;
    this.velocity_x = 0;
    this.velocity_y = 0;
  }

  moveLeft() {
    this.velocity_x -=0.5;
  }

  moveRight() {
    this.velocity_x += 0.5;
  }

  updatePosition() {
    this.x += this.velocity_x;
    this.y += this.velocity_y
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y 
    }
  }

}

module.exports = Character