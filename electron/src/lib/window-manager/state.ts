interface Windows {
  name: string,
  browserWindow?: Electron.BrowserWindow
}

interface WindowRef {
  uid: string,
  name: string,
  ref: Electron.BrowserWindow
}

let state: { [uid: string]: Windows } = {};

const addBrowserWindowRef = ({ uid, name, ref }: WindowRef) => {
  state = {
    ...state,
    [uid]: {
      name,
      browserWindow: ref
    }
  }
}

const removeBrowserWindowRef = ({ uid }: { uid: string }) => {
  state = Object.entries(state).reduce((obj, [window_uid, window_props]) => {
    if (window_uid === uid) return obj;

    return obj = {
      ...obj,
      [window_uid]: {
        ...window_props
      }
    }
  }, {});
}

const getState = () => state;

export {
  getState,
  addBrowserWindowRef,
  removeBrowserWindowRef
}
