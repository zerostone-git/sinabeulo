import React, { useState } from 'react';
import { Button } from '@sinabeulo/react';
import Flex from '../components/Flex';

const ButtonDefault = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <h3>속성</h3>
      <div>
        <label>
          <Flex>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Checked
          </Flex>
        </label>
      </div>
      <div>
        <label>
          <Flex>
            <input
              type="checkbox"
              checked={isDisabled}
              onChange={() => setIsDisabled(!isDisabled)}
            />
            Disabled
          </Flex>
        </label>
      </div>
      <h3>기본 버튼</h3>
      <div>
        <Flex>
          <Button checked={isChecked} disabled={isDisabled} primary>
            Primary
          </Button>
          <Button checked={isChecked} disabled={isDisabled}>
            Standard
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default ButtonDefault;
