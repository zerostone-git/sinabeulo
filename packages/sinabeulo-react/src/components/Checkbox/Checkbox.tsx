import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CheckboxClassNames, classNamesForCheckbox } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';
import useConst from '../../hooks/useConst';

/**
 * 체크박스의 속성입니다.
 */
type CheckboxProps = {
  /**
   * 체크박스의 CSS 클래스 이름입니다.
   */
  classNames?: CheckboxClassNames;
  /**
   * 체크박스가 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 체크박스의 옆에 표시할 문자열입니다.
   */
  label?: string;
  /**
   * 선택 여부입니다. 제어 컴포넌트로 사용하려면 이 속성의 값을 지정해야 하고, 그렇지 않으면 비제어 컴포넌트로 사용됩니다.
   */
  checked?: boolean;
  /**
   * 제어 컴포넌트로 사용될 때 불확실한 상태로 표시할지 여부입니다.
   */
  indeterminate?: boolean;
  /**
   * 비제어 컴포넌트로 사용될 때 기본 체크 상태로 표시할지 여부입니다.
   */
  defaultChecked?: boolean;
  /**
   * 비제어 컴포넌트로 사용될 때 기본으로 불확실한 상태로 표시할지 여부입니다.
   */
  defaultIndeterminate?: boolean;
  /**
   * 제어 컴포넌트로 사용될 때 선택 여부 값이 변경되었을 때의 콜백입니다.
   */
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement>,
    checked?: boolean
  ) => void;
};

let checkboxId = 1;

/**
 * 체크박스입니다.
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      classNames,
      disabled,
      label,
      checked,
      indeterminate,
      defaultChecked,
      defaultIndeterminate,
      onChange,
    } = props;
    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(refInput.current);
      } else if (ref) {
        ref.current = refInput.current;
      }
    }, [ref]);

    const isControlled = useConst(checked !== undefined);
    const [isCheckedIn, setIsCheckedIn] = useState(defaultChecked);
    const [isIndeterminateIn, setIsIndeterminateIn] =
      useState(defaultIndeterminate);
    const isChecked = useMemo(
      () => (isControlled ? checked : isCheckedIn),
      [checked, isCheckedIn, isControlled]
    );
    const isIndeterminate = useMemo(
      () => (isControlled ? indeterminate : isIndeterminateIn),
      [indeterminate, isControlled, isIndeterminateIn]
    );
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) {
          return;
        }
        if (isControlled) {
          onChange?.(e, e.target.checked);
        } else {
          setIsCheckedIn(!isChecked);
          setIsIndeterminateIn(false);
        }
      },
      [disabled, isChecked, isControlled, onChange]
    );

    // eslint-disable-next-line no-plusplus
    const inputId = useConst(() => `SiCheckbox-${checkboxId++}`);
    const cn = useMemo(() => classNamesForCheckbox(classNames), [classNames]);
    return (
      <div
        className={createClassName(cn.root, {
          [cn.disabled]: !!disabled,
          [cn.checked]: !!isChecked && !isIndeterminate,
          [cn.indeterminate]: !!isIndeterminate,
        })}
      >
        <input
          ref={refInput}
          className={cn.input}
          type="checkbox"
          id={inputId}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
        />
        <label className={cn.container} htmlFor={inputId}>
          {isIndeterminate ? (
            <span className={cn.icon}>&#xf0c8;</span>
          ) : (
            <span className={cn.icon}>&#xf00c;</span>
          )}
          <span className={cn.text}>{label}</span>
        </label>
      </div>
    );
  }
);
Checkbox.defaultProps = {
  classNames: undefined,
  disabled: false,
  label: undefined,
  checked: undefined,
  indeterminate: undefined,
  defaultChecked: undefined,
  defaultIndeterminate: undefined,
  onChange: undefined,
};

export default Checkbox;
export type { CheckboxProps };
