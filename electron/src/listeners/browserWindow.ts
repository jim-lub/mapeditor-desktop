import { ipcMain } from 'electron';
import { channels } from '../../../src/shared/constants/channels';
import { logSimpleAction } from '../lib/_dev/cli-logger';

interface BrowserWindowProps {
  uid: string
}

const browserWindow = (mainWindow: any) => {
  ipcMain.on(channels.browserWindow.open, (e, { uid }: BrowserWindowProps) => {
    logSimpleAction(['eventListener', 'browserWindow'], 'open');
  });

  ipcMain.on(channels.browserWindow.close, (e, { uid }: BrowserWindowProps) => {
    logSimpleAction(['eventListener', 'browserWindow'], 'close');
  });

  ipcMain.on(channels.browserWindow.refresh, (e, { uid }: BrowserWindowProps) => {
    logSimpleAction(['eventListener', 'browserWindow'], 'refresh');
  });

  ipcMain.on(channels.browserWindow.minimize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.minimize();
    logSimpleAction(['eventListener', 'browserWindow'], 'minimize');
  });

  ipcMain.on(channels.browserWindow.maximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.maximize();
    logSimpleAction(['eventListener', 'browserWindow'], 'maximize');
  });

  ipcMain.on(channels.browserWindow.unmaximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.unmaximize();
    logSimpleAction(['eventListener', 'browserWindow'], 'unmaximize');
  });
}

export default browserWindow;
