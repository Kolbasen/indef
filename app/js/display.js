

class Display  {
  constructor(canvas) {
    this.buffer  = document.createElement("canvas").getContext("2d"),
    this.context = canvas.getContext("2d");
    this.image = new Image();
    this.backgroundImage = new Image()
    this.tileSize = 32  ;       // The size of a tile (32×32)
    this.rowTileCount = 18;   // The number of tiles in a row of our background
    this.colTileCount = 24;   // The number of tiles in a column of our background
    this.imageNumTiles = 4;  // The number of tiles per row in the tileset image
  }

  
  drawBackground() {
    this.buffer.drawImage(this.backgroundImage, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height)
  }

  drawMap(map) {
    for (let r = 0; r < this.rowTileCount; r++) {
      for (let c = 0; c < this.colTileCount; c++) {
         let tile = map[ r ][ c ];
         let tileRow = (tile / this.imageNumTiles) | 0; // Bitwise OR operation
         let tileCol = (tile % this.imageNumTiles) | 0;
         this.buffer.drawImage(this.image, (tileCol * this.tileSize), (tileRow * this.tileSize), this.tileSize, this.tileSize, (c * this.tileSize), (r * this.tileSize), this.tileSize, this.tileSize);
      }
   }
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

  resize(width, height, height_width_ratio) {

    if (height / width > height_width_ratio) {

      this.context.canvas.height = width * height_width_ratio;
      this.context.canvas.width = width;

    } else {

      this.context.canvas.height = height;
      this.context.canvas.width = height / height_width_ratio;

    }

    this.context.imageSmoothingEnabled = false;

  };

}

module.exports = Display