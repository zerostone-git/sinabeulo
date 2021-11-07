import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { CheckboxClassNames, classNamesForCheckbox } from '@sinabeulo/styles';
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
   * 체크박스의 옆에 표시할 문자열입니다.
   */
  label?: string;
  /**
   * 버튼이 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 체크 여부입니다. 제어 컴포넌트로 사용하려면 이 속성의 값을 지정해야 하고, 그렇지 않으면 비제어 컴포넌트로 사용됩니다.
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
};

let checkboxId = 1;

/**
 * 체크박스입니다.
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      classNames,
      label,
      disabled,
      checked,
      indeterminate,
      defaultChecked,
      defaultIndeterminate,
    } = props;

    const isControlled = useConst(checked !== undefined);
    const [isCheckedIn, setIsCheckedIn] = useState(defaultChecked);
    const isChecked = isControlled ? checked : isCheckedIn;

    const handleChange = useCallback(() => {
      if (isControlled) {
        console.log('isControlled');
      } else {
        setIsCheckedIn(!isChecked);
      }
    }, [isChecked, isControlled]);

    // eslint-disable-next-line no-plusplus
    const id = useMemo(() => `checkbox-${checkboxId++}`, []);
    const cn = useMemo(() => classNamesForCheckbox(classNames), [classNames]);
    return (
      <div className={cn.root}>
        <input
          type="checkbox"
          ref={ref}
          id={id}
          className={cn.input}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
        />
        <label className={cn.label} htmlFor={id}>
          <div className={cn.checkbox}>
            <i
              data-icon-name="CheckMark"
              aria-hidden="true"
              className="ms-Checkbox-checkmark checkmark-197"
            >
              {isChecked ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {/* <polyline points="9 11 12 14 22 4" /> */}
                </svg>
              )}
            </i>
          </div>
          <span className={cn.text}>{label}</span>
        </label>
      </div>
    );
  }
);
Checkbox.defaultProps = {
  classNames: undefined,
  label: undefined,
  disabled: undefined,
  checked: undefined,
  indeterminate: undefined,
  defaultChecked: undefined,
  defaultIndeterminate: undefined,
};

export default Checkbox;
export type { CheckboxProps };
