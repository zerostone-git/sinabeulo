import React from 'react';
import { buttonClassNames } from '@sinabeulo/styles';
import { fireEvent, render } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  test('Render as text.', () => {
    const { container, rerender } = render(<Button>Standard</Button>);
    expect(container.textContent).toBe('Standard');

    rerender(<Button primary>Primary</Button>);
    expect(container.textContent).toBe('Primary');

    rerender(<Button checked>Checked</Button>);
    expect(container.textContent).toBe('Checked');

    rerender(<Button disabled>Standard</Button>);
    expect(container.textContent).toBe('Standard');

    rerender(
      <Button disabled primary>
        Primary
      </Button>
    );
    expect(container.textContent).toBe('Primary');

    rerender(
      <Button disabled checked>
        Checked
      </Button>
    );
    expect(container.textContent).toBe('Checked');

    rerender(<Button icon={<span>icon 1</span>}>Standard</Button>);
    expect(container.textContent).toBe('icon 1Standard');

    rerender(
      <Button icon={<span>icon 2</span>} primary>
        Primary
      </Button>
    );
    expect(container.textContent).toBe('icon 2Primary');

    rerender(
      <Button icon={<span>icon 3</span>} checked>
        Checked
      </Button>
    );
    expect(container.textContent).toBe('icon 3Checked');

    rerender(
      <Button icon={<span>icon 4</span>} disabled>
        Standard
      </Button>
    );
    expect(container.textContent).toBe('icon 4Standard');

    rerender(
      <Button icon={<span>icon 5</span>} disabled primary>
        Primary
      </Button>
    );
    expect(container.textContent).toBe('icon 5Primary');

    rerender(
      <Button icon={<span>icon 6</span>} disabled checked>
        Checked
      </Button>
    );
    expect(container.textContent).toBe('icon 6Checked');
  });

  test('Standard button.', () => {
    const { container } = render(<Button>Standard</Button>);
    const elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
  });

  test('Primary button.', () => {
    const { container, rerender } = render(<Button primary>Primary</Button>);
    let elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    rerender(<Button>Standard</Button>);
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
  });

  test('Checked button.', () => {
    const { container, rerender } = render(<Button checked>Checked</Button>);
    let elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);

    rerender(<Button>Standard</Button>);
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
  });

  test('Disabled button.', () => {
    const { container, rerender } = render(<Button disabled>Standard</Button>);
    let elButton = container.querySelector('button');
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    rerender(<Button>Standard</Button>);
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    rerender(
      <Button primary disabled>
        Primary
      </Button>
    );
    elButton = container.querySelector('button');
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    rerender(<Button primary>Primary</Button>);
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    rerender(
      <Button checked disabled>
        Checked
      </Button>
    );
    elButton = container.querySelector('button');
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);

    rerender(<Button checked>Checked</Button>);
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);
  });

  test('Click event', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick}>Button</Button>);
    const elButton = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(elButton);
    expect(onClick).toHaveBeenCalledTimes(1);

    for (let i = 0; i < 5; i += 1) {
      fireEvent.click(elButton);
    }
    expect(onClick).toHaveBeenCalledTimes(6);
  });
});
