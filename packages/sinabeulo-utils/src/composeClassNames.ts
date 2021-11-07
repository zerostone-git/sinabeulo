import distinctClassName from './distinctClassName';

const compose = <T extends Record<string, string>>(
  defaultClassNames: T,
  ...composeClassNames: (Partial<T> | undefined)[]
): T => {
  const cn: T = { ...defaultClassNames };
  const keys = Object.keys(defaultClassNames) as (keyof T)[];
  for (const key of keys) {
    for (const classNames of composeClassNames) {
      if (classNames) {
        if (Object.prototype.hasOwnProperty.call(classNames, key)) {
          const origin = cn[key];
          const value = classNames[key] as string;
          if (` ${origin} `.indexOf(value) === -1) {
            cn[key] = `${origin} ${value}` as T[keyof T];
          }
        }
      }
    }
  }
  for (const key of keys) {
    cn[key] = distinctClassName(cn[key]) as T[keyof T];
  }
  return cn;
};

export default compose;
