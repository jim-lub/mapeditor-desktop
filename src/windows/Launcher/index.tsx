import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { channels } from 'shared/constants/channels';
import { getUrlParams } from 'lib/utils';

export const Launcher = () => {
  const [window_uid, set_window_uid] = useState('');
  const [windows, setWindows] = useState([]);

  ipcRenderer.on(channels.window.getAll, (e, windows) => {
    console.log(windows)
    setWindows(windows)
  });

  useEffect(() => {
    const { uid } = getUrlParams(window.location.href);

    set_window_uid(uid)
  }, []);


  const handleClick = (e: any) => {
      switch (e.target.id) {
        case 'open': return ipcRenderer.send(channels.window.open, { uid: window_uid, payload: { width: 500, height: 500 } });
        case 'getAll': return ipcRenderer.send(channels.window.getAll, { uid: window_uid });
        default: return console.log('Invalid action..');
      }
    }

    return (
      <div>
        <div className="dragHandle"></div>
        <h1>MapEditor</h1>
        <button id="open" onClick={handleClick}>Open</button>
        <button id="getAll" onClick={handleClick}>getAll</button>
        {
          windows.map((target_uid) => {
            return (
              <Window key={target_uid} window_uid={window_uid} target_uid={target_uid} />
            )
          })
        }
      </div>
    );
}

const Window = ({ window_uid, target_uid }: { window_uid: string, target_uid: string }) => {
  const handleClick = (e: any) => {
      switch (e.target.id) {
        case 'close': return ipcRenderer.send(channels.window.close, { uid: window_uid, payload: { uid: target_uid } });
        case 'minimize': return ipcRenderer.send(channels.window.minimize, { uid: window_uid, payload: { uid: target_uid } });
        case 'maximize': return ipcRenderer.send(channels.window.maximize, { uid: window_uid, payload: { uid: target_uid } });
        default: return console.log('Invalid action..');
      }
    }

  return (
    <div style={{borderBottom: 'solid 1px #d5d5d5', padding: 10}}>
      <h3>{ target_uid }</h3>
      <button id="close" onClick={handleClick}>Close</button>
      <button id="minimize" onClick={handleClick}>Minimize / Restore</button>
      <button id="maximize" onClick={handleClick}>Maximize / Unmaximize</button>
    </div>
  )
}
