import { ipcMain } from 'electron';
import { channels } from '../../../src/shared/constants/channels';
import { log } from '../lib/_dev/cli-logger';
import { createWindow, getWindows } from '../controller';

interface BrowserWindowProps {
  uid: string
}

const browserWindow = (mainWindow: any) => {
  ipcMain.on(channels.browserWindow.open, (e, { uid }: BrowserWindowProps) => {
    createWindow();
    log.event(['eventListener', 'window', 'browserWindow'], 'open', 'editor');
  });

  ipcMain.on(channels.browserWindow.close, (e, { uid }: BrowserWindowProps) => {
    log.event(['eventListener', 'window', 'browserWindow'], 'close', 'editor');
  });

  ipcMain.on(channels.browserWindow.refresh, (e, { uid }: BrowserWindowProps) => {
    log.event(['eventListener', 'browserWindow'], 'refresh');
  });

  ipcMain.on(channels.browserWindow.minimize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.minimize();
    log.event(['eventListener', 'browserWindow'], 'minimize');
  });

  ipcMain.on(channels.browserWindow.maximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.maximize();
    log.event(['eventListener', 'browserWindow'], 'maximize');
  });

  ipcMain.on(channels.browserWindow.unmaximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.unmaximize();
    log.event(['eventListener', 'browserWindow'], 'unmaximize');
  });
}

export default browserWindow;
