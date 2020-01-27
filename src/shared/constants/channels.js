/***
* This file contains all channels that are shared between the Electron wrapper and the React app.
***/
const browserWindow = {
  open           : "browserWindow.open",
  close          : "browserWindow.close",
  refresh        : "browserWindow.refresh",
  minimize       : "browserWindow.minimize",
  maximize       : "browserWindow.maximize",
  unmaximize     : "browserWindow.unmaximize",
}

module.exports = {
  channels: {
    browserWindow
  },
};
