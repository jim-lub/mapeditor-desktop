import * as path from 'path';
import * as isDev from 'electron-is-dev';

interface Param {
  key: string,
  value: string
}

const loadURL = (window: Electron.BrowserWindow, url: string, params: Array<Param>) => {
  const urlParams = params.map(({ key, value }, index) => `${ (index === 0) ? '?' : '&' }${key}=${value}`).join('');

  window.loadURL(
    isDev
      ? `http://localhost:3000/#/${url}${urlParams}`
      : `file://${path.join(__dirname, `../../build/index.html/#/${url}${urlParams}`)}`
  )
}

export default loadURL;
