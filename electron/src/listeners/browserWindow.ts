import { ipcMain } from 'electron';
import { channels } from '../../../src/shared/constants/channels';
import { log } from '../lib/_dev/cli-logger';
import { createWindow } from '../lib/windows';

interface BrowserWindowProps {
  uid: string
}

const browserWindow = (mainWindow: any) => {
  ipcMain.on(channels.window.open, (e, { uid }: BrowserWindowProps) => {
    createWindow({ width: 800, height: 600, props: { test: 500, test_more: 500 } });
    log.event(['eventListener', 'window', 'browserWindow'], 'open', 'editor');
  });

  ipcMain.on(channels.window.close, (e, { uid }: BrowserWindowProps) => {
    log.event(['eventListener', 'window', 'browserWindow'], 'close', 'editor');
  });

  ipcMain.on(channels.window.refresh, (e, { uid }: BrowserWindowProps) => {
    log.event(['eventListener', 'browserWindow'], 'refresh');
  });

  ipcMain.on(channels.window.minimize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.minimize();
    log.event(['eventListener', 'browserWindow'], 'minimize');
  });

  ipcMain.on(channels.window.maximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.maximize();
    log.event(['eventListener', 'browserWindow'], 'maximize');
  });

  ipcMain.on(channels.window.unmaximize, (e, { uid }: BrowserWindowProps) => {
    mainWindow.unmaximize();
    log.event(['eventListener', 'browserWindow'], 'unmaximize');
  });
}

export default browserWindow;
