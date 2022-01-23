import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { RadioClassNames, classNamesForRadio } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';
import useConst from '../../hooks/useConst';

/**
 * 라디오의 속성입니다.
 */
type RadioProps = {
  /**
   * 라디오의 CSS 클래스 이름입니다.
   */
  classNames?: RadioClassNames;
  /**
   * 라디오가 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 라디오의 옆에 표시할 문자열입니다.
   */
  label?: string;
  /**
   * 라디오가 속하는 그룹 이름입니다.
   */
  name?: string;
  /**
   * 라디오의 값입니다.
   */
  value?: string | number;
  /**
   * 선택 여부입니다.
   */
  checked?: boolean;
  /**
   * 라디오를 선택할 때의 콜백입니다.
   */
  onCheck: (
    e?: React.ChangeEvent<HTMLInputElement>,
    value?: string | number
  ) => void;
};

let radioId = 1;

/**
 * 라디오입니다.
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props: RadioProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { classNames, name, value, label, disabled, checked, onCheck } =
      props;
    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(refInput.current);
      } else if (ref) {
        ref.current = refInput.current;
      }
    }, [ref]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) {
          return;
        }
        onCheck?.(e, value);
      },
      [disabled, onCheck, value]
    );

    // eslint-disable-next-line no-plusplus
    const inputId = useConst(() => `SiRadio-${radioId++}`);
    const cn = useMemo(() => classNamesForRadio(classNames), [classNames]);
    return (
      <div
        className={createClassName(cn.root, {
          [cn.disabled]: !!disabled,
          [cn.checked]: !!checked,
        })}
      >
        <input
          ref={refInput}
          className={cn.input}
          type="radio"
          id={inputId}
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        />
        <label className={cn.container} htmlFor={inputId}>
          <span className={cn.icon}>&#xf111;</span>
          <span className={cn.text}>{label}</span>
        </label>
      </div>
    );
  }
);
Radio.defaultProps = {
  classNames: undefined,
  disabled: false,
  label: undefined,
  name: undefined,
  value: undefined,
  checked: false,
};

export default Radio;
export type { RadioProps };
