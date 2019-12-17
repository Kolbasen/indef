
class Display  {
  constructor(canvas) {
    this.buffer  = document.createElement("canvas").getContext("2d"),
    this.context = canvas.getContext("2d");
  }


  drawRectangle(x, y, width, height, color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(x, y, width, height, color);
  }

  fill(color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
  }

  render = function() { 
    this.context.drawImage(
      this.buffer.canvas, 
      0, 
      0, 
      this.buffer.canvas.width, 
      this.buffer.canvas.height, 
      0, 
      0, 
      this.context.canvas.width, 
      this.context.canvas.height
      ); 
  };

  resize = function(event) {

    const height = document.documentElement.clientHeight;
    const width  = document.documentElement.clientWidth;

    this.context.canvas.height = height - 32;
    this.context.canvas.width = width - 32;

    this.render();

  };

  handleResize = (event) => { this.resize(event); };

}

module.exports = Display