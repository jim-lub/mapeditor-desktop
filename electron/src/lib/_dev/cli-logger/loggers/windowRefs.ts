import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';
import {
  logDataTableOutput,
  logDataTableLine,
  logEmptyLine,
  logSingleLineOutput,
  logTypes
} from '../cli-logger';

interface WindowRef {
  name: string,
  ref: Electron.BrowserWindow,
  __props: {},
  props: {}
}

const windowRefs = (windows: { [uid: string]: WindowRef }) => {
  if (!isDev) return;

  const header = [clc.yellow("UID"), clc.yellow("NAME"), clc.yellow("STATUS"), clc.yellow("__PROPS"), clc.yellow("PROPS")];
  const rows = Object.entries(windows).map(([uid, { name, __props, props }]) => {
    const __propsArr = Object.entries(__props);
    const propsArr = Object.entries(props);

    const out_uid = clc.blackBright(uid);
    const out_name = name;
    const out_status = clc.cyan('active');

    const out___props =
      (__propsArr.length > 0)
        ? "(" + clc.cyan(__propsArr.length) + ") ..."
        : clc.red('-');

    const out_props =
      (propsArr.length > 0)
        ? "(" + clc.cyan(propsArr.length) + ") ..."
        : clc.red('-');

    return [out_uid, out_name, out_status, out___props, out_props];
  });

  /*** OUTPUT ***/
  // logEmptyLine();
  logDataTableLine(74);
  logSingleLineOutput(
    logTypes.list,
    `${clc.bgBlackBright(' WindowRefs ')}`
  );

  logDataTableLine(74);
  logDataTableOutput(
    header,
    rows
  );
  logDataTableLine(74);
  // logEmptyLine();
}

export default windowRefs;
