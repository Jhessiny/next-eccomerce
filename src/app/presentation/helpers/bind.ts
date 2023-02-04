export const inlineFn = (fn: Function, ...args: any) => fn.bind(null, ...args);
