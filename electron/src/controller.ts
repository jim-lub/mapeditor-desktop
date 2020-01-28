import { BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { v4 as uuid } from 'uuid';

import { getState, addBrowserWindowRef, removeBrowserWindowRef } from './lib/window-manager/state';

interface Windows {
  windowName: string,
  browserWindow?: Electron.BrowserWindow
}

const windows: { [uid: string]: Windows } = {};

const controller = () => {

}

const createWindow = () => {
  const uid = uuid();

  const window = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    },
    // frame: false
  });

  window.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../../build/index.html')}`);

  window.webContents.openDevTools();

  addBrowserWindowRef({
    uid,
    name: 'editor',
    ref: window
  });

  // add onclose listener
  window.on('closed', () => removeBrowserWindowRef({ uid }));
}

export default controller;
export {
  createWindow,
  getState
}
