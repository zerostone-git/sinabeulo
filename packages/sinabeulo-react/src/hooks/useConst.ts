import React from 'react';

/**
 * 항상 동일한 값을 반환하는 훅입니다
 * @param initialValue 초기 값 또는 초기 값을 가져오는 함수입니다.
 * @returns 상수 값입니다.
 */
const useConst = <T>(initialValue: T | (() => T)): T => {
  const ref = React.useRef<{ value: T }>();
  if (ref.current === undefined) {
    ref.current = {
      value:
        typeof initialValue === 'function'
          ? (initialValue as () => T)()
          : initialValue,
    };
  }
  return ref.current.value;
};

export default useConst;
