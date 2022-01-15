/* eslint-disable @typescript-eslint/await-thenable */
import { buttonClassNames } from '@sinabeulo/styles';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import Button from '../Button.svelte';
import ButtonTest from './ButtonTest.svelte';

describe('Button', () => {
  test('Render as text.', async () => {
    const { container, component } = render(ButtonTest, {
      props: {
        slotDefault: 'Standard',
        slotIcon: '',
      },
    });
    expect(container.textContent).toBe(' Standard');

    await component.$set({
      slotDefault: 'Primary',
      primary: true,
    });
    expect(container.textContent).toBe(' Primary');

    await component.$set({
      slotDefault: 'Checked',
      primary: false,
      checked: true,
    });
    expect(container.textContent).toBe(' Checked');

    await component.$set({
      slotDefault: 'Standard',
      checked: false,
      disabled: true,
    });
    expect(container.textContent).toBe(' Standard');

    await component.$set({
      slotDefault: 'Primary',
      slotIcon: '',
      disabled: true,
      primary: true,
    });
    expect(container.textContent).toBe(' Primary');

    await component.$set({
      slotDefault: 'Checked',
      slotIcon: '',
      disabled: true,
      primary: false,
      checked: true,
    });
    expect(container.textContent).toBe(' Checked');

    await component.$set({
      slotDefault: 'Standard',
      slotIcon: 'icon 1',
    });
    expect(container.textContent).toBe('icon 1 Standard');

    await component.$set({
      slotDefault: 'Primary',
      slotIcon: 'icon 2',
      primary: true,
    });
    expect(container.textContent).toBe('icon 2 Primary');

    await component.$set({
      slotDefault: 'Checked',
      slotIcon: 'icon 3',
      primary: false,
      checked: true,
    });
    expect(container.textContent).toBe('icon 3 Checked');

    await component.$set({
      slotDefault: 'Standard',
      slotIcon: 'icon 4',
      checked: false,
      disabled: true,
    });
    expect(container.textContent).toBe('icon 4 Standard');

    await component.$set({
      slotDefault: 'Primary',
      slotIcon: 'icon 5',
      disabled: true,
      primary: true,
    });
    expect(container.textContent).toBe('icon 5 Primary');

    await component.$set({
      slotDefault: 'Checked',
      slotIcon: 'icon 6',
      disabled: true,
      primary: false,
      checked: true,
    });
    expect(container.textContent).toBe('icon 6 Checked');

    cleanup();
  });

  test('Standard button.', () => {
    const { container } = render(ButtonTest, {
      props: {
        slotDefault: 'Standard',
        slotIcon: 'icon 1',
      },
    });
    const elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    cleanup();
  });

  test('Primary button.', async () => {
    const { container, component } = render(ButtonTest, {
      props: {
        slotDefault: 'Primary',
        slotIcon: 'icon 2',
        primary: true,
      },
    });
    let elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await component.$set({ primary: false });
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    cleanup();
  });

  test('Checked button.', async () => {
    const { container, component } = render(ButtonTest, {
      props: {
        slotDefault: 'Checked',
        slotIcon: 'icon 3',
        checked: true,
      },
    });
    let elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);

    await component.$set({ checked: false });
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
  });

  test('Disabled button.', async () => {
    const { container, component } = render(ButtonTest, {
      props: {
        slotDefault: 'Standard',
        slotIcon: 'icon 1',
        disabled: true,
      },
    });
    let elButton = container.querySelector('button');
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await component.$set({ disabled: false });
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await component.$set({
      slotDefault: 'Primary',
      slotIcon: 'icon 2',
      primary: true,
      disabled: true,
    });
    elButton = container.querySelector('button');
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await component.$set({ disabled: false });
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await component.$set({
      slotDefault: 'Checked',
      slotIcon: 'icon 3',
      checked: true,
      disabled: true,
      primary: false,
    });
    elButton = container.querySelector('button');
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);

    await component.$set({ disabled: false });
    elButton = container.querySelector('button');
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);
    cleanup();
  });

  test('Click event', async () => {
    const onClick = jest.fn();
    const { component, container } = render(Button);
    component.$on('click', onClick);

    const elButton = container.querySelector('button') as HTMLButtonElement;
    await fireEvent.click(elButton);
    expect(onClick).toHaveBeenCalledTimes(1);

    await fireEvent.click(elButton);
    await fireEvent.click(elButton);
    await fireEvent.click(elButton);
    await fireEvent.click(elButton);
    await fireEvent.click(elButton);
    expect(onClick).toHaveBeenCalledTimes(6);
  });
});
