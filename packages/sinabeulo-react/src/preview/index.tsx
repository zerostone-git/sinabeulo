import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '..';
import ButtonPreview from './ButtonPreview';
import CheckboxPreview from './CheckboxPreview';

const container = document.createElement('div');
document.body.appendChild(container);

function Preview(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <Checkbox
        label="Disabled"
        checked={isDisabled}
        onChange={(e, checked) => setIsDisabled(!!checked)}
      />
      <hr />
      <ButtonPreview disabled={isDisabled} />
      <CheckboxPreview disabled={isDisabled} />
    </>
  );
}

ReactDOM.render(<Preview />, container);
