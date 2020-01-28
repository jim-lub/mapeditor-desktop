import { log } from '../_dev/cli-logger';

interface WindowRef {
  name: string,
  ref: Electron.BrowserWindow,
  __props: {
    allowRemoteAccess?: boolean,
    layout?: {
      x: number,
      y: number,
      w: number,
      h: number
    }
  },
  props: {}
}

interface WindowProps {
  uid: string,
  name: string,
  ref: Electron.BrowserWindow,
  props: {},
}

let state: { [uid: string]: WindowRef } = {};

const addWindowRef = ({ uid, name, ref, props }: WindowProps) => {
  state = {
    ...state,
    [uid]: {
      name,
      ref,
      __props: {
        layout: { x: 10, y: 10, w: 600, h: 600 }
      },
      props
    }
  }

  log.windowRefs( getWindows() );
}

const removeWindowRef = ({ uid }: { uid: string }) => {
  state = Object.entries(state).reduce((obj, [window_uid, window_props]) => {
    if (window_uid === uid) return obj;

    return obj = {
      ...obj,
      [window_uid]: {
        ...window_props
      }
    }
  }, {});

  log.windowRefs( getWindows() );
}

const getWindows = () => state;
// setWindowProps
// clearWindowProps
// listenToWindowPropChanges

export {
  getWindows,
  addWindowRef as addBrowserWindowRef,
  removeWindowRef as removeBrowserWindowRef
}
