import { ipcMain } from 'electron';
import { channels } from '../../../src/shared/constants/channels';
import { logMessageWithOrigin } from '../lib/_dev/cli-logger';
import { createWindow, getState } from '../controller';

interface BrowserWindowProps {
  uid: string
}

const browserWindow = (mainWindow: any) => {
  ipcMain.on(channels.browserWindow.open, (e, { uid }: BrowserWindowProps) => {
    createWindow();
    logMessageWithOrigin(['eventListener', 'browserWindow'], 'open');
  });

  ipcMain.on(channels.browserWindow.close, (e, { uid }: BrowserWindowProps) => {
    logMessageWithOrigin(['eventListener', 'browserWindow'], 'close');
  });

  ipcMain.on(channels.browserWindow.refresh, (e, { uid }: BrowserWindowProps) => {
    const state = getState();
    console.log(state);
    logMessageWithOrigin(['eventListener', 'browserWindow'], 'refresh');
  });

  ipcMain.on(channels.browserWindow.minimize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.minimize();
    logMessageWithOrigin(['eventListener', 'browserWindow'], 'minimize');
  });

  ipcMain.on(channels.browserWindow.maximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.maximize();
    logMessageWithOrigin(['eventListener', 'browserWindow'], 'maximize');
  });

  ipcMain.on(channels.browserWindow.unmaximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.unmaximize();
    logMessageWithOrigin(['eventListener', 'browserWindow'], 'unmaximize');
  });
}

export default browserWindow;
