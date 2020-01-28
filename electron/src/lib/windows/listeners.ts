import { ipcMain } from 'electron';

import { channels } from '../../../../src/shared/constants/channels';
import { closeWindow, createWindow, minimizeWindow, maximizeWindow } from './';
import { log } from '../_dev/cli-logger';

// window.CLOSE
ipcMain.on(channels.window.close, (e, { uid, payload }: { uid: string, payload: { uid: string }}) => {
  log.event(['ipcMain', 'listener', 'window'], 'CLOSE WINDOW', uid);

  closeWindow({
    ...payload
  });
});

// window.OPEN
ipcMain.on(channels.window.open, (e, { uid, payload }: { uid: string, payload: {}}) => {
  log.event(['ipcMain', 'listener', 'window'], 'OPEN WINDOW', uid);

  createWindow({
    ...payload
  });
});

// window.MAXIMIZE / UNMAXIMIZE
ipcMain.on(channels.window.maximize, (e, { uid, payload }: { uid: string, payload: { uid: string }}) => {
  log.event(['ipcMain', 'listener', 'window'], 'MAXIMIZE/UNMAXIMIZE WINDOW', uid);

  maximizeWindow({
    ...payload
  });
});

// window.MINIMIZE / RESTORE
ipcMain.on(channels.window.minimize, (e, { uid, payload }: { uid: string, payload: { uid: string }}) => {
  log.event(['ipcMain', 'listener', 'window'], 'MINIMIZE/RESTORE WINDOW', uid);

  minimizeWindow({
    ...payload
  });
});
