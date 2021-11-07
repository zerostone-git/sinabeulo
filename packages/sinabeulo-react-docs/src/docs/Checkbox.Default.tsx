import React, { useState } from 'react';
import { Checkbox } from '@sinabeulo/react';

const CheckboxDefault = (): JSX.Element => (
  <div>
    <h3>속성</h3>
    <div />
    <h3>기본 버튼</h3>
    <div>
      ◎
      &#9678;
      &#9673;
      &#9675;
      &#10004;
      <Checkbox label="Primary" />
      <Checkbox label="Primary" />
      <Checkbox label="Primary" />
      <Checkbox label="Primary" />
      <Checkbox label="Primary" />
    </div>
  </div>
);

export default CheckboxDefault;
