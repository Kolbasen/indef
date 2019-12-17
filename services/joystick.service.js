const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM4');

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

const listenData = (win) => {
  parser.on('data', (data) => {
    if (+data > 999 && +data < 12000) {
      win.webContents.send('X', data - 10000);
    }
    if (+data > 29000 && +data < 32000) {
      win.webContents.send('Y', data - 30000);
    }
  });
};

module.exports = listenData;
