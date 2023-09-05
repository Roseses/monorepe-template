export { default as withInstall } from './withinstall';
export const add = (...args) => {
  return args.reduce((tol, pre) => tol + pre, 0);
};

export default add
