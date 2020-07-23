const electron = require("electron");
const app = electron.app; // Sub-module of electron to start the process
const BrowserWindow = electron.BrowserWindow; // Sub-module of electron for opening a window
const path = require('path')
const url = require('url')


let win; // A variable used as an object for browser window

function createWindow () {

  win = new BrowserWindow({width: 800, height: 600}) // Default width and height for browser window is 600x800

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'), // Load url is used to load a page contents to our window
    protocol: 'file:',
    slashes: true
  }));

  // When window is closed, we make sure that no garbage values are stored in the window
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow); // when app is ready, we call the create window function

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
