import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';

const log = (type: string, message: string) => {
  if (!isDev) return;
  let output = message;

  switch(type) {
    case 'success': output = clc.green.bold(message); break;
    case 'warn': output = clc.yellow.bold(message); break;
    case 'error': output = clc.red.bold(message); break;
    case 'info': output = clc.blue.bold(message); break;
  }

  console.log(output);
}

const logSimpleAction = (origin: string[], message: string) => {
  if (!isDev) return;

  const styledOrigin = origin.map((str, index) => {
    return (index === (origin.length - 1))
      ? clc.cyan(str)
      : clc.yellow(str)
  }).join('.');

  console.log(styledOrigin + ": " + message);
}

export {
  log,
  logSimpleAction
}
