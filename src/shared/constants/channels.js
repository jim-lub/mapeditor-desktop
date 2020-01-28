/***
* This file contains all channels that are shared between the Electron wrapper and the React app.
***/
const window = {
  open           : "window:open",
  close          : "window:close",
  refresh        : "window:refresh",
  minimize       : "window:minimize",
  maximize       : "window:maximize",
  unmaximize     : "window:unmaximize",

  getOne         : "window:getOne",
  getAll         : "window:getAll"
}

module.exports = {
  channels: {
    window
  },
};
