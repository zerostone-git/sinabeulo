// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/scss/solid.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '..';
import ButtonPreview from './ButtonPreview';
import CheckboxPreview from './CheckboxPreview';
import RadioGroupPreview from './RadioGroupPreview';

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
      <RadioGroupPreview disabled={isDisabled} />
    </>
  );
}

ReactDOM.render(<Preview />, container);
