class World {
  constructor() {
    this.background_color = "rgb(255,255,255)",
    this.friction = 0.9,
    this.gravity = 1,
    this.width = 32*24,
    this.height = 32*18
  }

  collideObject(object) {
    if (object.x < 0) { 
      object.x = 0; object.velocity_x = 0; 
    } else if (object.x + object.width > this.width) {
         object.x = this.width - object.width; object.velocity_x = 0; 
      }
    if (object.y < 0) { 
        object.y = 0; object.velocity_y = 0; 
    } else if (object.y + object.height > this.height) { 
        object.jumping = false; object.y = this.height - object.height; object.velocity_y = 0; 
      }
  }


}

module.exports = World  