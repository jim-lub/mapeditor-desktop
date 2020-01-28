import { getWindow } from './_state';
import { log } from '../_dev/cli-logger';

const closeWindow = ({ uid }: { uid: string }) => {
  if (!uid) return log.app('error', `Can't close window; make sure the payload {} contains a 'uid' field.`);

  const window = getWindow(uid);

  if (!window) return log.app('error', `Can't close window; windowRef #${uid} does not exist.`);

  window.ref.close();
}

export default closeWindow;
