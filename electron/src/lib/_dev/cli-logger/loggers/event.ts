import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';
import {
  formatOriginPath,
  logSingleLineOutput,
  logTypes
} from '../cli-logger';

const event = (origin: string[], event: string, windowOrigin?: string) => {
  if (!isDev) return;

  /*** OUTPUT ***/
  logSingleLineOutput(
    logTypes.event,
    `${ clc.bgMagenta(` ${event} `) } :${ formatOriginPath(origin) }?${ clc.yellow(`${windowOrigin}`) }`
  );
}

export default event;
