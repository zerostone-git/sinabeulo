import distinctClassName from './distinctClassName';

type ClassName = string | { [index: string]: boolean } | Array<ClassName>;

const createClassName = (...args: ClassName[]): string => {
  const classes = [];
  for (const arg of args) {
    if (Array.isArray(arg) && arg.length > 0) {
      classes.push(createClassName(...arg));
    } else if (typeof arg === 'object') {
      for (const key of Object.keys(arg)) {
        if ((arg as { [index: string]: boolean })[key]) {
          classes.push(key);
        }
      }
    } else {
      classes.push(arg.toString());
    }
  }
  return distinctClassName(classes);
};

export default createClassName;
