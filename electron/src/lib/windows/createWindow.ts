import { BrowserWindow } from 'electron';
import { v4 as uuid } from 'uuid';
import * as isDev from 'electron-is-dev';

import { addWindowRef, removeWindowRef } from './_state';
import { loadURL } from './helpers';

interface WindowProps {
  width?: number,
  height?: number,
  props?: {}
}

const createWindow = ({ width = 800, height = 600, props = {} }: WindowProps) => {
  const uid = uuid();

  const window = new BrowserWindow({
    width,
    height,
    webPreferences: {
      // devTools: false,
      nodeIntegration: true,
      additionalArguments: [
        uid
      ]
    }
  });

  loadURL(window, 'launcher', { uid, name: 'editor' });
  (isDev) ? window.webContents.openDevTools() : null;

  addWindowRef({
    uid,
    name: 'editor',
    ref: window,
    props
  });

  window.on('closed', () => removeWindowRef({ uid }));
}

export default createWindow;
