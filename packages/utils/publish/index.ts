import run from '../run/index';
import { series } from 'gulp';
export const publishComponent = async () => {
  // run('release-it', `.`);
};
export default series(async () => publishComponent());
