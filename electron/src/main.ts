import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { default as browserWindowListener } from './listeners/browserWindow';
import { log, logSimpleAction } from './lib/_dev/cli-logger';

let mainWindow: any;

function createWindow() {
  mainWindow = new BrowserWindow({width: 1200, height: 700, webPreferences: {nodeIntegration: true}});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', () => {
  log('info', 'Initializing application..');
  createWindow();
  log('success', 'Successfully opened `mainWindow`.');

  browserWindowListener(mainWindow);
  log('info', 'Listening to `browserEvents`.');
});

app.on('window-all-closed', () => {
  log('error', 'Application closed..')
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
