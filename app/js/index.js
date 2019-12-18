const path = require('path');
const Engine = require('./engine');
const Game = require('./game');
const Display = require('./display');
const Controller = require('./controller')
const map = require('../tileset/config/config')

window.addEventListener('load', (e) => {

  const render = () => {
    // display.fill(game.world.background_color)
    display.drawBackground()
    display.drawMap(map)
    display.drawRectangle(
      game.player.x, 
      game.player.y, 
      game.player.height, 
      game.player.width, 
      game.color
    )
    display.render();
  };


  const resize = () => {

    display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
    display.render();

  };

  const update = () => {
    if (controller.movingLeft) game.player.moveLeft();
    if (controller.movingRight) game.player.moveRight();
    if (controller.startJump) game.player.jump();
    game.update();
  };
  

  const controller = new Controller()

  const game = new Game();

  const display = new Display(document.querySelector('canvas'));

  const engine = new Engine(1000 / 60, render, update);

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;

  display.image.addEventListener("load", function(event) {
    display.backgroundImage.addEventListener("load", (event) => {
      controller.updateInput()
      resize()
      engine.start();
    }, { once: true}) 
  }, { once:true });

  
  display.image.src = path.join(__dirname, 'd.png')
  display.backgroundImage.src = path.join(__dirname, 'background.png')
});
