import React from 'react';
import { Button } from '..';

export default function ButtonPreview(props: {
  disabled: boolean;
}): JSX.Element {
  const { disabled } = props;
  return (
    <div
      style={{
        display: 'grid',
        gridAutoColumns: 'max-content',
        gridAutoRows: 'minmax(40px, auto)',
        gap: '10px',
        marginBottom: '10px',
      }}
    >
      <div style={{ gridRow: 1, gridColumn: 1 }}>
        <Button disabled={disabled}>Standard</Button>
      </div>
      <div style={{ gridRow: 1, gridColumn: 2 }}>
        <Button disabled={disabled} icon={<span>&#128513;</span>}>
          Standard
        </Button>
      </div>
      <div style={{ gridRow: 1, gridColumn: 3 }}>
        <Button disabled={disabled} icon={<span>&#128513;</span>} />
      </div>

      <div style={{ gridRow: 2, gridColumn: 1 }}>
        <Button disabled={disabled} primary>
          Primary
        </Button>
      </div>
      <div style={{ gridRow: 2, gridColumn: 2 }}>
        <Button disabled={disabled} primary icon={<span>&#128513;</span>}>
          Primary
        </Button>
      </div>
      <div style={{ gridRow: 2, gridColumn: 3 }}>
        <Button disabled={disabled} primary icon={<span>&#128513;</span>} />
      </div>

      <div style={{ gridRow: 3, gridColumn: 1 }}>
        <Button disabled={disabled} checked>
          Checked
        </Button>
      </div>
      <div style={{ gridRow: 3, gridColumn: 2 }}>
        <Button disabled={disabled} checked icon={<span>&#128513;</span>}>
          Checked
        </Button>
      </div>
      <div style={{ gridRow: 3, gridColumn: 3 }}>
        <Button disabled={disabled} checked icon={<span>&#128513;</span>} />
      </div>
    </div>
  );
}
