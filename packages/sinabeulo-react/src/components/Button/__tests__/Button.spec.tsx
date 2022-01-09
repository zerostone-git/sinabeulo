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
    render(<Button>Standard</Button>, { container });
    expect(container.textContent).toBe('Standard');

    render(<Button primary>Primary</Button>, { container });
    expect(container.textContent).toBe('Primary');

    render(<Button checked>Checked</Button>, { container });
    expect(container.textContent).toBe('Checked');

    render(<Button disabled>Standard</Button>, { container });
    expect(container.textContent).toBe('Standard');

    render(
      <Button disabled primary>
        Primary
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('Primary');

    render(
      <Button disabled checked>
        Checked
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('Checked');

    render(<Button icon={<span>icon 1</span>}>Standard</Button>, { container });
    expect(container.textContent).toBe('icon 1Standard');

    render(
      <Button icon={<span>icon 2</span>} primary>
        Primary
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('icon 2Primary');

    render(
      <Button icon={<span>icon 3</span>} checked>
        Checked
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('icon 3Checked');

    render(
      <Button icon={<span>icon 4</span>} disabled>
        Standard
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('icon 4Standard');

    render(
      <Button icon={<span>icon 5</span>} disabled primary>
        Primary
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('icon 5Primary');

    render(
      <Button icon={<span>icon 6</span>} disabled checked>
        Checked
      </Button>,
      { container }
    );
    expect(container.textContent).toBe('icon 6Checked');
  });

  test('Standard button.', () => {
    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );
  });

  test('Primary button.', () => {
    render(<Button primary>Primary</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );

    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );
  });

  test('Checked button.', () => {
    render(<Button checked>Checked</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.checked
    );

    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );
  });

  test('Disabled button.', () => {
    render(<Button disabled>Standard</Button>, { container });
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );

    render(<Button>Standard</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );

    render(
      <Button primary disabled>
        Primary
      </Button>,
      { container }
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );

    render(<Button primary>Primary</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );

    render(
      <Button checked disabled>
        Checked
      </Button>,
      { container }
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.checked
    );

    render(<Button checked>Checked</Button>, { container });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.checked
    );
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
