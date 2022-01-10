/* eslint-disable @typescript-eslint/ban-ts-comment */
import { buttonClassNames } from '@sinabeulo/styles';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import Button from '../Button.svelte';
// @ts-ignore
import ButtonTest from './ButtonTest.svelte';

describe('Button', () => {
  test('Render as text.', () => {
    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Standard',
          slotIcon: '',
        },
      });
      expect(container.textContent).toBe(' Standard');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Primary',
          slotIcon: '',
          primary: true,
        },
      });
      expect(container.textContent).toBe(' Primary');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Checked',
          slotIcon: '',
          checked: true,
        },
      });
      expect(container.textContent).toBe(' Checked');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Standard',
          slotIcon: '',
          disabled: true,
        },
      });
      expect(container.textContent).toBe(' Standard');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Primary',
          slotIcon: '',
          disabled: true,
          primary: true,
        },
      });
      expect(container.textContent).toBe(' Primary');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Checked',
          slotIcon: '',
          disabled: true,
          checked: true,
        },
      });
      expect(container.textContent).toBe(' Checked');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Standard',
          slotIcon: 'icon 1',
        },
      });
      expect(container.textContent).toBe('icon 1 Standard');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Primary',
          slotIcon: 'icon 2',
          primary: true,
        },
      });
      expect(container.textContent).toBe('icon 2 Primary');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Checked',
          slotIcon: 'icon 3',
          checked: true,
        },
      });
      expect(container.textContent).toBe('icon 3 Checked');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Standard',
          slotIcon: 'icon 4',
          disabled: true,
        },
      });
      expect(container.textContent).toBe('icon 4 Standard');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Primary',
          slotIcon: 'icon 5',
          disabled: true,
          primary: true,
        },
      });
      expect(container.textContent).toBe('icon 5 Primary');
      cleanup();
    }

    {
      const { container } = render(ButtonTest, {
        props: {
          slotDefault: 'Checked',
          slotIcon: 'icon 6',
          disabled: true,
          checked: true,
        },
      });
      expect(container.textContent).toBe('icon 6 Checked');
      cleanup();
    }
  });

  test('Standard button.', () => {
    const { container } = render(ButtonTest, {
      props: {
        slotDefault: 'Standard',
        slotIcon: 'icon 1',
      },
    });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );
    cleanup();
  });

  test('Primary button.', () => {
    const { container, rerender } = render(ButtonTest, {
      props: {
        slotDefault: 'Primary',
        slotIcon: 'icon 2',
        primary: true,
      },
    });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );

    rerender({
      props: {
        slotDefault: 'Primary',
        slotIcon: 'icon 2',
        primary: false,
      },
    });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.checked
    );
    cleanup();
  });

  test('Checked button.', () => {
    const { container, rerender } = render(ButtonTest, {
      props: {
        slotDefault: 'Checked',
        slotIcon: 'icon 3',
        checked: true,
      },
    });
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.disabled
    );
    expect(container.querySelector('button')).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(container.querySelector('button')).toHaveClass(
      buttonClassNames.checked
    );

    rerender({
      props: {
        slotDefault: 'Checked',
        slotIcon: 'icon 3',
        checked: false,
      },
    });
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
    {
      const { container, rerender } = render(ButtonTest, {
        props: {
          slotDefault: 'Standard',
          slotIcon: 'icon 1',
          disabled: true,
        },
      });
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.disabled
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.primary
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.checked
      );

      rerender({
        props: {
          disabled: false,
        },
      });
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.disabled
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.primary
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.checked
      );
      cleanup();
    }
    {
      const { container, rerender } = render(ButtonTest, {
        props: {
          slotDefault: 'Primary',
          slotIcon: 'icon 2',
          primary: true,
          disabled: true,
        },
      });
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.disabled
      );
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.primary
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.checked
      );

      rerender({
        props: {
          slotDefault: 'Primary',
          slotIcon: 'icon 2',
          primary: true,
          disabled: false,
        },
      });
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.disabled
      );
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.primary
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.checked
      );
      cleanup();
    }
    {
      const { container, rerender } = render(ButtonTest, {
        props: {
          slotDefault: 'Checked',
          slotIcon: 'icon 3',
          checked: true,
          disabled: true,
        },
      });
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.disabled
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.primary
      );
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.checked
      );

      rerender({
        props: {
          slotDefault: 'Checked',
          slotIcon: 'icon 3',
          checked: true,
          disabled: false,
        },
      });
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.disabled
      );
      expect(container.querySelector('button')).not.toHaveClass(
        buttonClassNames.primary
      );
      expect(container.querySelector('button')).toHaveClass(
        buttonClassNames.checked
      );
      cleanup();
    }
  });

  test('Click event', async () => {
    const onClick = jest.fn();
    const { component, container } = render(Button);
    component.$on('click', onClick);

    const button = container.querySelector('button') as HTMLButtonElement;
    await fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    await fireEvent.click(button);
    await fireEvent.click(button);
    await fireEvent.click(button);
    await fireEvent.click(button);
    await fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(6);
  });
});
