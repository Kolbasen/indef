const Character = require('./character')

class Player extends Character {
  constructor(x ,y, velocity_x, velocity_y) {
    super(x, y, velocity_x, velocity_y)
    this.startJump = true;
    this.jumping = false;
  }

  jump() {
    // this.y -= 1;
    console.log(this.velocity_y)

    if (!this.jumping && this.startJump) {
      this.startJump = false;
      this.jumping = true
      // const timer = setInterval(() => {
      //   this.velocity_y -= 2;  
      // }, 50);
      // setTimeout(() => {
      //   clearInterval(timer)
      // }, 500);
      this.velocity_y -= 17;
    }
    if (!this.startJump && this.velocity_y === 0) {
      this.startJump = true;
      this.jumping = false
    }
    
  }

  attack() {

  }
}

module.exports = Player