import React, { useCallback, useState } from 'react';
import { Checkbox } from '..';

export default function CheckboxPreview(props: {
  disabled: boolean;
}): JSX.Element {
  const { disabled } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(true);
  const handleChange = useCallback(
    (_?: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => {
      setIsChecked(!!checked);
      setIsIndeterminate(false);
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
      <div style={{ gridRow: 1, gridColumn: 1 }}>
        <Checkbox disabled={disabled} label="Uncontrolled" />
      </div>
      <div style={{ gridRow: 1, gridColumn: 2 }}>
        <Checkbox disabled={disabled} label="Uncontrolled" defaultChecked />
      </div>
      <div style={{ gridRow: 1, gridColumn: 3 }}>
        <Checkbox
          disabled={disabled}
          label="Uncontrolled"
          defaultIndeterminate
        />
      </div>

      <div style={{ gridRow: 2, gridColumn: 1 }}>
        <Checkbox
          disabled={disabled}
          label="Controlled"
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
      <div style={{ gridRow: 2, gridColumn: 2 }}>
        <Checkbox
          disabled={disabled}
          label="Controlled"
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
      <div style={{ gridRow: 2, gridColumn: 3 }}>
        <Checkbox
          disabled={disabled}
          label="Controlled"
          checked={isChecked}
          indeterminate={isIndeterminate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
