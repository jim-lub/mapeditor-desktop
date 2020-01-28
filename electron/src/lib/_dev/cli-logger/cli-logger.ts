import * as clc from 'cli-color';
import * as isDev from 'electron-is-dev';

const WHITESPACE_MODIFIER = 8;

export enum logTypes {
  app     = 'app',
  event   = 'event',
  list    = 'list'
}

const _formatLogType = (logType: string) => {
  switch (logType) {
    case logTypes.app:      return `[${ clc.green(logType) }]`;
    case logTypes.event:    return `[${ clc.magenta(logType) }]`;
    case logTypes.list:    return `[${ clc.cyan(logType) }]`;
    default:                return `[${ logType }]`;
  }
}

export const formatOriginPath = (origin: string[]) => {
  return origin.map((str, index) => {
    return (index === (origin.length - 1))
      ? clc.cyan(str)
      : clc.blackBright(str)
  }).join('.');
}

export const formatOriginPathAlt = (origin: string[]) => {
  return origin.map((str, index) => {
    return (index === (origin.length - 1))
      ? clc.bgCyan.black(` ${str} `)
      : clc.bgYellow.black(` ${str} `)
  }).join(' ');
}

export const logDataTableLine = (length: number) => {
  const out_whitespace = ' '.repeat( WHITESPACE_MODIFIER + 6 );
  const out_line = '-'.repeat( length );

  console.log(out_whitespace + clc.blackBright(out_line));
}

export const logDataTableOutput = (header: Array<any>, rows: Array<any>) => {
  const out_whitespace = ' '.repeat( WHITESPACE_MODIFIER + 5 );
  const out_header = [out_whitespace, ...header];
  const out_rows = rows.map(row => [out_whitespace, ...row]);

  process.stdout.write(
    clc.columns([
      out_header,
      ...out_rows
    ])
  );
}

export const logEmptyLine = () => {
  console.log(">");
}

export const logSingleLineOutput = (logType: string, message: string) => {
  const out_whitespace = ' '.repeat( WHITESPACE_MODIFIER - logType.length );
  const out_logType = _formatLogType(logType);

  console.log(`>${out_whitespace}${out_logType} : ${message}`);
}
