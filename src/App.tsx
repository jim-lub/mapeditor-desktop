import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import { ipcRenderer } from 'electron';

import { Undefined } from 'windows/Undefined';
import { Editor } from 'windows/Editor';
import { Launcher } from 'windows/Launcher';
import { getUrlParams } from 'lib/utils';
// import { channels } from 'shared/constants/channels';

import './app.css';

const App = () => {
  const [window_uid, set_window_uid] = useState('');

  useEffect(() => {
    const { uid } = getUrlParams(window.location.href);

    set_window_uid(uid)
  }, []);

  useEffect(() => {
    console.log(window_uid);
  }, [window_uid]);

  return (
    <HashRouter>
      <Route path="/" exact     component={ Undefined } />
      <Route path="/editor" exact     component={ Editor } />
      <Route path="/launcher" exact     component={ Launcher } />
    </HashRouter>
  )
}

// const App2 = () => {
//   const [uid, setUid] = useState(null);
//
//   console.log(window.location.href);
//
//   useEffect(() => {
//     console.log(uid)
//   }, [uid])
//
//   const handleClick = (e: any) => {
//     switch (e.target.id) {
//       case 'open': return ipcRenderer.send(channels.window.open, { uid: 'editor.3d8s8ds' });
//       case 'close': return ipcRenderer.send(channels.window.close, { uid: 'editor.3d8s8ds' });
//       case 'refresh': return ipcRenderer.send(channels.window.refresh, { uid: 'editor.3d8s8ds' });
//       case 'minimize': return ipcRenderer.send(channels.window.minimize, { uid: 'editor.3d8s8ds' });
//       case 'maximize': return ipcRenderer.send(channels.window.maximize, { uid: 'editor.3d8s8ds' });
//       case 'unmaximize': return ipcRenderer.send(channels.window.unmaximize, { uid: 'editor.3d8s8ds' });
//       default: return console.log('Invalid action..');
//     }
//   }
//
//   return (
//     <div>
//       <div className="dragHandle"></div>
//       <h1>MapEditor</h1>
//       <button id="open" onClick={handleClick}>Open</button>
//       <button id="close" onClick={handleClick}>Close</button>
//       <button id="refresh" onClick={handleClick}>Refresh</button>
//       <button id="minimize" onClick={handleClick}>Minimize</button>
//       <button id="maximize" onClick={handleClick}>Maximize</button>
//       <button id="unmaximize" onClick={handleClick}>Unmaximize</button>
//     </div>
//   );
// }

export default App;
