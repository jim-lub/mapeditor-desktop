import { getWindow } from './_state';
import { log } from '../_dev/cli-logger';

const maximizeWindow = ({ uid }: { uid: string }) => {
  if (!uid) return log.app('error', `Can't maximize / unmaximize window; make sure the payload {} contains a 'uid' field.`);

  const window = getWindow(uid);

  if (!window) return log.app('error', `Can't maximize / unmaximize window; windowRef #${uid} does not exist.`);

  window.ref.isMaximized() ? window.ref.unmaximize() : window.ref.maximize();
}

export default maximizeWindow;
