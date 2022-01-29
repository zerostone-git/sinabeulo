/* eslint-disable @typescript-eslint/await-thenable */
import { radioClassNames } from '@sinabeulo/styles';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import type { RadioGroupItem } from '..';
import RadioGroup from '../RadioGroup.svelte';
import ControlledRadioGroup from './ControlledRadioGroup.svelte';

const radioGroupItems = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
  { value: 'item4', label: 'item4' },
] as RadioGroupItem[];

describe('RadioGroup', () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  async function* asyncGenerator(radios: NodeListOf<Element>) {
    let i = 0;
    while (i < radios.length) {
      // eslint-disable-next-line no-plusplus
      yield radios.item(i++);
    }
  }

  let items = radioGroupItems;
  beforeEach(() => {
    items = [...radioGroupItems.map((item) => ({ ...item }))];
  });

  test('Render as text.', () => {
    const { container } = render(RadioGroup, {
      props: { name: 'radiogroup', items },
    });
    const elLabels = container.querySelectorAll('label');
    expect(elLabels.length).toBe(4);
    elLabels.forEach((elLabel, i) => {
      expect(elLabel.textContent).toBe(` item${i + 1}`);
    });
    expect(container.textContent).toBe('  item1  item2  item3  item4');

    cleanup();
  });

  test('Disabled group', async () => {
    const { container, component } = render(ControlledRadioGroup, {
      props: { items, disabled: true },
    });
    let i = 0;
    let elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    for await (const elRadio of asyncGenerator(elRadios)) {
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`  item${(i += 1)}`);
      expect(elRadio).toHaveClass(radioClassNames.disabled);
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(true);
      expect(elInput.checked).toBe(false);

      await fireEvent.click(elLabel);
      expect(elRadio).toHaveClass(radioClassNames.disabled);
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(true);
      expect(elInput.checked).toBe(false);
    }

    await component.$set({ disabled: false });
    elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    i = 0;
    for await (const elRadio of asyncGenerator(elRadios)) {
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`  item${(i += 1)}`);
      expect(elRadio).not.toHaveClass(radioClassNames.disabled);
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(false);
      expect(elInput.checked).toBe(false);

      await fireEvent.click(elLabel);
      expect(elRadio).not.toHaveClass(radioClassNames.disabled);
      expect(elRadio).toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(false);
      expect(elInput.checked).toBe(true);
    }

    cleanup();
  });

  test('Disabled item', async () => {
    items[1].disabled = true;
    items[2].disabled = true;

    const { container } = render(ControlledRadioGroup, {
      props: { items },
    });
    let i = 0;
    const elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    for await (const elRadio of asyncGenerator(elRadios)) {
      const item = items[i];
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`  item${(i += 1)}`);
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).toBe(false);

      await fireEvent.click(elLabel);
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio.classList.contains(radioClassNames.checked)).not.toBe(
        item.disabled ?? false
      );
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).not.toBe(item.disabled ?? false);
    }

    cleanup();
  });

  test('Change event', async () => {
    items[1].disabled = true;
    items[3].disabled = true;

    let i = 0;
    let handleCount = 0;
    const onChange = jest.fn();
    const { container, component } = render(ControlledRadioGroup, {
      props: { items },
    });
    component.$on('change', onChange);

    const elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    for await (const elRadio of asyncGenerator(elRadios)) {
      const item = items[i];
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`  item${(i += 1)}`);
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).toBe(false);

      await fireEvent.click(elLabel);
      if (!item.disabled) {
        handleCount += 1;
      }
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio.classList.contains(radioClassNames.checked)).not.toBe(
        item.disabled ?? false
      );
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).not.toBe(item.disabled ?? false);
      expect(onChange).toHaveBeenCalledTimes(handleCount);
    }
    expect(handleCount).toBe(2);

    cleanup();
  });
});
