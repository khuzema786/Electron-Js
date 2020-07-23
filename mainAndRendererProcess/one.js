console.log('renderer process 1 - which can be many but each of them work independently');

const BrowserWindow = require('electron').remote.BrowserWindow; // Notice that we use remote browser window
const path = require('path')
const url = require('url')

const newWindowBtn = document.getElementById('newWindowBtn');

newWindowBtn.addEventListener('click', (event) => {
let winThree = new BrowserWindow({ width: 600, height: 400 });
winThree.loadURL(url.format({
    pathname: path.join(__dirname, 'three.html'),
    protocol: 'file:',
    slashes: true
  }));
winThree.webContents.openDevTools();
});