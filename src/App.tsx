import React from 'react';
import { ipcRenderer } from 'electron';
import { channels } from 'shared/constants/channels';

import './app.css';

const App = () => {
  const handleClick = (e: any) => {
    switch (e.target.id) {
      case 'open': return ipcRenderer.send(channels.browserWindow.open, { uid: 'editor.3d8s8ds' });
      case 'close': return ipcRenderer.send(channels.browserWindow.close, { uid: 'editor.3d8s8ds' });
      case 'refresh': return ipcRenderer.send(channels.browserWindow.refresh, { uid: 'editor.3d8s8ds' });
      case 'minimize': return ipcRenderer.send(channels.browserWindow.minimize, { uid: 'editor.3d8s8ds' });
      case 'maximize': return ipcRenderer.send(channels.browserWindow.maximize, { uid: 'editor.3d8s8ds' });
      case 'unmaximize': return ipcRenderer.send(channels.browserWindow.unmaximize, { uid: 'editor.3d8s8ds' });
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

export default App;
