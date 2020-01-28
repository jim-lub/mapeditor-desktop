import { getWindow } from './_state';
import { log } from '../_dev/cli-logger';

const minimizeWindow = ({ uid }: { uid: string }) => {
  if (!uid) return log.app('error', `Can't minimize / restore window; make sure the payload {} contains a 'uid' field.`);

  const window = getWindow(uid);
  
  if (!window) return log.app('error', `Can't minimize / restore window; windowRef #${uid} does not exist.`);

  window.ref.isMinimized() ? window.ref.restore() : window.ref.minimize();
}

export default minimizeWindow;
