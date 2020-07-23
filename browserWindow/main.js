const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


let defaultWindow, dimWindow, colorWindow, framelessWindow;
let parentWindow, childWindow;

function createWindows () {
/* 
defaultWindow = new BrowserWindow();  // Normal Browser window
dimWindow = new BrowserWindow({width: 400, height: 400, maxWidth: 600, maxHeight: 600}); // A 400x400 window with max width and height
colorWindow = new BrowserWindow({backgroundColor: '#228b22'});  // A browser window with background color
framelessWindow = new BrowserWindow({frame: false, backgroundColor: '#800000'}); // A Frameless browser window with background color and no taskbar nor borders
*/

parentWindow = new BrowserWindow({title: 'Parent'});  // This will be below child window
childWindow = new BrowserWindow({parent: parentWindow, modal: true,show: false, title: 'Child'}); // This will be above parent window & the modal property is used to disable parent window

childWindow.loadURL('https://github.com'); // loading a remote URL

childWindow.once('ready-to-show', () => { // Note: show being set to false in child window, this is done in order to wait once the github page is loaded and then display the child window
  childWindow.show()
});
}

app.on('ready', createWindows);


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
