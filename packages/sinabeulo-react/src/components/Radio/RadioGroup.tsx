import React, { useEffect, useMemo } from 'react';
import {
  RadioGroupClassNames,
  classNamesForRadioGroup,
} from '@sinabeulo/styles';
import Radio, { RadioProps } from './Radio';

/**
 * 라디오 그룹에 표시할 아이템의 속성입니다.
 */
type RadioGroupItem = Pick<
  RadioProps,
  'classNames' | 'disabled' | 'label' | 'value'
>;

/**
 * 라디오 그룹의 속성입니다.
 */
type RadioGroupProps = {
  /**
   * CSS 클래스 이름입니다.
   */
  classNames?: Partial<RadioGroupClassNames>;
  /**
   * 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 이름입니다.
   */
  name: string;
  /**
   * 표시할 아이템 목록입니다.
   */
  items: RadioGroupItem[];
  /**
   * 선택 값입니다.
   */
  selectedValue?: string | number;
  /**
   * 선택 값이 변경되었을 때의 콜백입니다.
   */
  onChange: (
    e?: React.ChangeEvent<HTMLInputElement>,
    item?: RadioGroupItem
  ) => void;
};

/**
 * 라디오 그룹입니다.
 */
function RadioGroup(props: RadioGroupProps): React.ReactElement {
  const { classNames, disabled, name, selectedValue, items, onChange } = props;

  const handleCheck = (
    e?: React.ChangeEvent<HTMLInputElement>,
    value?: string | number
  ) => {
    if (disabled) {
      return;
    }
    const item = items.find((i) => i.value === value);
    onChange(e, item);
  };

  useEffect(() => {
    const values = [];
    for (const item of items) {
      if (values.indexOf(item.value) !== -1) {
        throw new Error(
          "The value of an item's value attribute cannot be duplicated."
        );
      }
      values.push(item.value);
    }
  }, [items]);

  const cn = useMemo(() => classNamesForRadioGroup(classNames), [classNames]);
  return (
    <div className={cn.root}>
      {items &&
        items.map((item) => (
          <Radio
            key={item.value}
            classNames={item.classNames}
            disabled={disabled || item.disabled}
            label={item.label}
            name={name}
            value={item.value}
            checked={item.value === selectedValue}
            onCheck={handleCheck}
          />
        ))}
    </div>
  );
}
RadioGroup.defaultProps = {
  disabled: false,
  classNames: undefined,
  selectedValue: undefined,
};

export default RadioGroup;
export type { RadioGroupItem, RadioGroupProps };
