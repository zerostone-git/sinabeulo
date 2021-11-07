import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { buttonClassNames } from '@sinabeulo/styles';
import { render } from '@testing-library/react';
import Button from '../Button';

let container!: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null as unknown as HTMLDivElement;
});

describe('Button', () => {
  test('Render as text.', () => {
    render(<Button primary>Primary</Button>, { container });
    expect(container.textContent).toBe('Primary');

    render(<Button>Standard</Button>, { container });
    expect(container.textContent).toBe('Standard');
  });

  test('Primary style button.', () => {
    render(<Button primary>Primary</Button>, { container });
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.rootPrimary
    );

    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.rootPrimary
    );
  });

  test('Checked button.', () => {
    render(
      <Button primary checked>
        Primary
      </Button>,
      { container }
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.rootPrimary
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.checked
    );

    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.rootPrimary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );
  });

  test('Disabled button.', () => {
    render(
      <Button primary disabled>
        Primary
      </Button>,
      { container }
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.rootPrimary
    );
    expect(container.querySelector('button')).toBeDisabled();

    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.rootPrimary
    );
    expect(container.querySelector('button')).not.toBeDisabled();
  });

  test('Click event', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>, { container });

    const button = container.querySelector('button') as HTMLButtonElement;
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);

    for (let i = 0; i < 5; i += 1) {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
    expect(onClick).toHaveBeenCalledTimes(6);
  });
});
