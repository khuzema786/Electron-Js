const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

console.log('Main process - which is called just once in the beggining');
let winOne, winTwo;

function createWindow () {

  winOne = new BrowserWindow({width: 800, height: 600})
  winTwo = new BrowserWindow({width: 800, height: 600})
  
  winOne.loadURL(url.format({
    pathname: path.join(__dirname, 'one.html'),
    protocol: 'file:',
    slashes: true
  }));
  winTwo.loadURL(url.format({
    pathname: path.join(__dirname, 'two.html'),
    protocol: 'file:',
    slashes: true
  }));

winOne.webContents.openDevTools();  // This helps us in using chrome developer tools for dubugging windows like we do in websites
winTwo.webContents.openDevTools();


  winOne.on('closed', () => {
    winOne = null
  });
  winTwo.on('closed', () => {
    winOne = null
  });
}

app.on('ready', createWindow);

// ---> These two functions below is specifically for mac

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
