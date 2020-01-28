import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { channels } from 'shared/constants/channels';
import { getUrlParams } from 'lib/utils';

export const Launcher = () => {
  const [window_uid, set_window_uid] = useState('');

  useEffect(() => {
    const { uid } = getUrlParams(window.location.href);

    set_window_uid(uid)
  }, []);


  const handleClick = (e: any) => {
      console.log(window_uid)
      switch (e.target.id) {
        case 'open': return ipcRenderer.send(channels.window.open, { uid: window_uid, payload: { width: 500, height: 500 } });
        case 'close': return ipcRenderer.send(channels.window.close, { uid: window_uid, payload: { uid: window_uid } });
        case 'refresh': return ipcRenderer.send(channels.window.refresh, { uid: 'editor.3d8s8ds' });
        case 'minimize': return ipcRenderer.send(channels.window.minimize, { uid: window_uid, payload: { uid: window_uid } });
        case 'maximize': return ipcRenderer.send(channels.window.maximize, { uid: window_uid, payload: { uid: window_uid } });
        case 'unmaximize': return ipcRenderer.send(channels.window.unmaximize, { uid: 'editor.3d8s8ds' });
        default: return console.log('Invalid action..');
      }
    }

    return (
      <div>
        <div className="dragHandle"></div>
        <h1>MapEditor</h1>
        <button id="open" onClick={handleClick}>Open</button>
        <button id="close" onClick={handleClick}>Close</button>
        <button id="refresh" onClick={handleClick}>Refresh</button>
        <button id="minimize" onClick={handleClick}>Minimize</button>
        <button id="maximize" onClick={handleClick}>Maximize</button>
        <button id="unmaximize" onClick={handleClick}>Unmaximize</button>
      </div>
    );
}
