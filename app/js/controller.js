const { ipcRenderer } = require('electron')

class Controller {
  constructor() {
    this.movingRight = false;
    this.movingLeft = false;
    this.startJump = false;
  }

  updateInput() {
    ipcRenderer.on('X', (event, arg) => {
      if (arg > 1000) {
        this.movingRight = true
        this.movingLeft = false
      } else if (arg < 10) {
        this.movingLeft = true
        this.movingRight = false
      } else {
        this.movingLeft = false
        this.movingRight = false
      }
    })
    ipcRenderer.on('Y', (event, arg) => {
      if (arg > 1000) {
        this.startJump = true
      } else {
        this.startJump = false        
      }
    })
  }
}

module.exports = Controller