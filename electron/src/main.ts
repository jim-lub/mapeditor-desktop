import { app, BrowserWindow } from 'electron';
import { default as browserWindowListener } from './listeners/browserWindow';
import { log } from './lib/_dev/cli-logger';
import { createWindow } from './lib/windows';

let mainWindow: any;

app.on('ready', () => {
  log.app('info', 'Initializing application...');

  const props = {
    status: 1,
    position: 1,
    size: 1,
  }

  createWindow({ width: 800, height: 600, props: { test: 500 } });

  log.app('success', 'Launcher active.');

  // browserWindowListener(mainWindow);

  log.app('info', 'Listening to `browserEvents`.');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  log.app('error', 'Application closed..')
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow({ width: 800, height: 600, props: { test: 500 } });
  }
});
