const { ipcRenderer } = require('electron')

const draw = () => {
  const canvas = document.getElementById('tutorial');
  console.log(canvas)
  if (canvas.getContext) {
    console.log('canvas')
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }
};

ipcRenderer.on('X', (event, message) => {
  console.log(`X: ${message}`)
})

ipcRenderer.on('Y', (event, message) => {
  console.log(`Y: ${message}`)
})

draw()