const Engine = require('./engine');
const Game = require('./game');
const Display = require('./display');
const Controller = require('./controller')

window.addEventListener('load', (e) => {

  const render = () => {
    display.fill(game.world.background_color)
    display.drawRectangle(game.player.x, game.player.y, 50, 50, game.color)
    display.render();
  };

  const update = () => {
    if (controller.movingLeft) game.player.moveLeft();
    if (controller.movingRight) game.player.moveRight();
    if (controller.jumping) game.player.jump();
    game.update();
  };

  const move = (dx, dy) => {
    player.move(dx, dy)
  }
  

  const controller = new Controller(move)

  const game = new Game();

  const display = new Display(document.querySelector('canvas'));

  const engine = new Engine(1000 / 60, render, update);

  display.buffer.canvas.height = game.world.height;
  display.buffer.canvas.width = game.world.width;

  controller.updateInput()
  engine.start();
});
