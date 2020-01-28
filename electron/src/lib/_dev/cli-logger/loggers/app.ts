import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';
import {
  logSingleLineOutput,
  logTypes
} from '../cli-logger';

const app = (type: string, message: string) => {
  if (!isDev) return;

  const out_message = () => {
    switch (type) {
      case 'success':   return clc.green(message);
      case 'warn':      return clc.yellow(message);
      case 'error':     return clc.red(message);
      case 'info':      return clc.cyan(message);
      default:          return message;
    }
  }

  /*** OUTPUT ***/
  logSingleLineOutput(
    logTypes.app,
    out_message()
  );
}

export default app;
