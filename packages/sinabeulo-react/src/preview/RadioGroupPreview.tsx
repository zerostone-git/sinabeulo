import React, { useCallback, useState } from 'react';
import { Radio, RadioGroup, RadioGroupItem } from '..';

export default function RadioGroupPreview(props: {
  disabled: boolean;
}): JSX.Element {
  const { disabled } = props;

  const [value, setValue] = useState(undefined as string | number | undefined);
  const [value2, setValue2] = useState(
    undefined as string | number | undefined
  );
  const [items] = useState([
    {
      value: 'item1',
      label: 'item1',
    },
    {
      value: 'item2',
      label: 'item2',
    },
    {
      value: 'item3',
      label: 'item3',
    },
    {
      value: 'item4',
      label: 'item4',
    },
  ] as RadioGroupItem[]);
  const handleChange = useCallback(
    (_?: React.ChangeEvent<HTMLInputElement>, item?: RadioGroupItem) => {
      setValue(item?.value);
    },
    []
  );

  const handleCheck = useCallback(
    (
      _?: React.ChangeEvent<HTMLInputElement>,
      selectedValue?: string | number
    ) => {
      setValue2(selectedValue);
    },
    []
  );

  return (
    <div
      style={{
        display: 'grid',
        gridAutoColumns: 'max-content',
        gridAutoRows: 'minmax(28px, auto)',
        gap: '10px',
        marginBottom: '10px',
      }}
    >
      <div style={{ gridRow: 1, gridColumn: 1, gridColumnEnd: 4 }}>
        <RadioGroup
          disabled={disabled}
          items={items}
          name="siradiogroup"
          selectedValue={value}
          onChange={handleChange}
        />
      </div>

      <div style={{ gridRow: 2, gridColumn: 1 }}>
        <Radio
          disabled={disabled}
          name="radiogroup"
          label="item1"
          value="radio1"
          checked={value2 === 'radio1'}
          onCheck={handleCheck}
        />
      </div>
      <div style={{ gridRow: 2, gridColumn: 2 }}>
        <Radio
          disabled={disabled}
          name="radiogroup"
          label="item2"
          value="radio2"
          checked={value2 === 'radio2'}
          onCheck={handleCheck}
        />
      </div>
      <div style={{ gridRow: 2, gridColumn: 3 }}>
        <Radio
          disabled={disabled}
          name="radiogroup"
          label="item3"
          value="radio3"
          checked={value2 === 'radio3'}
          onCheck={handleCheck}
        />
      </div>
      <div style={{ gridRow: 2, gridColumn: 4 }}>
        <Radio
          disabled={disabled}
          name="radiogroup"
          label="item4"
          value="radio4"
          checked={value2 === 'radio4'}
          onCheck={handleCheck}
        />
      </div>
    </div>
  );
}
