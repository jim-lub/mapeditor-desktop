import * as path from 'path';
import * as isDev from 'electron-is-dev';

interface UrlParams {
  uid: string,
  name?: string
}

const loadURL = (window: Electron.BrowserWindow, url: string, params: UrlParams) => {
  const urlParams = Object.entries(params).map(([key, value], index) => `${ (index === 0) ? '?' : '&' }${key}=${value}`).join('');

  window.loadURL(
    isDev
      ? `http://localhost:3000/#/${url}${urlParams}`
      : `file://${path.join(__dirname, `../../build/index.html/#/${url}${urlParams}`)}`
  )
}

export default loadURL;
