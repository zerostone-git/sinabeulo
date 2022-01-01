import React, { useState } from 'react';
import { Button, Checkbox } from '@sinabeulo/react';
import Flex from '../components/Flex';

const ButtonDefault = (): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <h3>속성</h3>
      <div>
        <Flex>
          <Checkbox checked={isDisabled} />
          Disabled
        </Flex>
      </div>
      <h3>기본 버튼</h3>
      <div>
        <Flex>
          <Button disabled={isDisabled} primary>
            Primary
          </Button>
          <Button disabled={isDisabled}>Standard</Button>
        </Flex>
      </div>
    </div>
  );
};

export default ButtonDefault;
