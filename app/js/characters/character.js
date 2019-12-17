class Character { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveLeft() {
    console.log('left')
    this.x -=5;
  }

  moveRight() {
    console.log('right')
    this.x += 5;
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y 
    }
  }

}

module.exports = Character