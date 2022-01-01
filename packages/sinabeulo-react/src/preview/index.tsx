import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '..';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <div>
    <div>
      <p>
        <Button>Standard</Button>
      </p>
      <p>
        <Button checked>Checked</Button>
      </p>
      <p>
        <Button primary>Primary</Button>
      </p>
    </div>
  </div>,
  container
);
