const distinctClassName = (className: string[] | string): string => {
  const results = [];
  const classNames = Array.isArray(className)
    ? className
    : className.split(' ');
  for (const c of classNames) {
    const classNameTrimmed = c.trim();
    if (results.indexOf(classNameTrimmed) === -1) {
      results.push(classNameTrimmed);
    }
  }
  return results.join(' ');
};

export default distinctClassName;
