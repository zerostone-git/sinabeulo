/* eslint-disable @typescript-eslint/await-thenable */
import { checkboxClassNames } from '@sinabeulo/styles';
import { cleanup, fireEvent, getByRole, render } from '@testing-library/svelte';
import Checkbox from '../Checkbox.svelte';

describe('Checkbox', () => {
  test('Render as text.', async () => {
    {
      const { container, component } = render(Checkbox, {
        props: {
          label: 'This is checkbox',
        },
      });
      expect(container.textContent).toBe('  This is checkbox');
      await component.$set({
        indeterminate: true,
      });
      expect(container.textContent).toBe('  This is checkbox');

      await component.$set({
        label: 'This is checkbox',
        checked: true,
        indeterminate: true,
      });
      expect(container.textContent).toBe('  This is checkbox');

      cleanup();
    }
    {
      const { container } = render(Checkbox, {
        props: {
          label: 'This is checkbox',
          checked: true,
          indeterminate: true,
        },
      });
      expect(container.textContent).toBe('  This is checkbox');

      cleanup();
    }
  });

  test('Disabled checkbox', async () => {
    const { container, component } = render(Checkbox, {
      props: {
        label: 'This is checkbox',
      },
    });
    let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: true });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    let elLabel = container.querySelector('label') as HTMLLabelElement;
    await fireEvent.click(elLabel);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: false });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    elLabel = container.querySelector('label') as HTMLLabelElement;

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    cleanup();
  });

  test('Checked checkbox', async () => {
    const { container, component } = render(Checkbox, {
      props: {
        label: 'This is checkbox',
        checked: true,
      },
    });
    let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: true });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    let elLabel = container.querySelector('label') as HTMLLabelElement;
    await fireEvent.click(elLabel);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: false });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    elLabel = container.querySelector('label') as HTMLLabelElement;

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    cleanup();
  });

  test('Indeterminate checkbox', async () => {
    const { container, component } = render(Checkbox, {
      props: {
        label: 'This is checkbox',
        indeterminate: true,
      },
    });
    let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: true });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

    let elLabel = container.querySelector('label') as HTMLLabelElement;
    await fireEvent.click(elLabel);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: false });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    elLabel = container.querySelector('label') as HTMLLabelElement;

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    cleanup();
  });

  test('Checked and indeterminate checkbox', async () => {
    const { container, component } = render(Checkbox, {
      props: {
        label: 'This is checkbox',
        checked: true,
        indeterminate: true,
      },
    });
    let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: true });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

    let elLabel = container.querySelector('label') as HTMLLabelElement;
    await fireEvent.click(elLabel);
    expect(elRoot).toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

    await component.$set({ disabled: false });
    elRoot = container.querySelector(`.${checkboxClassNames.root}`);
    elLabel = container.querySelector('label') as HTMLLabelElement;

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    await fireEvent.click(elLabel);
    expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
    expect(elRoot).toHaveClass(checkboxClassNames.checked);
    expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

    cleanup();
  });

  test('Change event', async () => {
    const onChange = jest.fn();
    const { container, component } = render(Checkbox);
    component.$on('change', onChange);

    const elLabel = container.querySelector('label') as HTMLLabelElement;
    await fireEvent.click(elLabel);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(
      (getByRole(container, 'checkbox') as unknown as { checked: boolean })
        .checked
    ).toBeTruthy();

    await fireEvent.click(elLabel);
    await fireEvent.click(elLabel);
    await fireEvent.click(elLabel);
    await fireEvent.click(elLabel);
    await fireEvent.click(elLabel);
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(
      (getByRole(container, 'checkbox') as unknown as { checked: boolean })
        .checked
    ).toBeFalsy();

    cleanup();
  });
});
