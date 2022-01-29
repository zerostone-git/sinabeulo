import React, { useCallback, useState } from 'react';
import { radioClassNames } from '@sinabeulo/styles';
import { cleanup, fireEvent, render } from '@testing-library/react';
import RadioGroup, { RadioGroupItem } from '../RadioGroup';

const radioGroupItems = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
  { value: 'item4', label: 'item4' },
] as RadioGroupItem[];

function ControlledRadioGroup(props: {
  disabled?: boolean;
  items?: RadioGroupItem[];
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement>,
    item?: RadioGroupItem
  ) => void;
}): JSX.Element {
  const { disabled, items = radioGroupItems, onChange } = props;
  const [selectedValue, setSelectedValue] = useState(
    undefined as string | number | undefined
  );
  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>, item?: RadioGroupItem) => {
      setSelectedValue(item?.value);
      onChange?.(e, item);
    },
    [onChange]
  );

  return (
    <RadioGroup
      disabled={disabled}
      name="radiogroup"
      items={items}
      selectedValue={selectedValue}
      onChange={handleChange}
    />
  );
}
ControlledRadioGroup.defaultProps = {
  disabled: undefined,
  items: undefined,
  onChange: undefined,
};

describe('RadioGroup', () => {
  let items = radioGroupItems;
  beforeEach(() => {
    items = [...radioGroupItems.map((item) => ({ ...item }))];
  });

  test('Render as text.', () => {
    const onChange = jest.fn();
    const { container } = render(
      <RadioGroup
        name="radiogroup"
        items={radioGroupItems}
        onChange={onChange}
      />
    );
    const elLabels = container.querySelectorAll('label');
    expect(elLabels.length).toBe(4);
    elLabels.forEach((elLabel, i) => {
      expect(elLabel.textContent).toBe(`item${i + 1}`);
    });
    expect(container.textContent).toBe('item1item2item3item4');

    cleanup();
  });

  test('Disabled group', () => {
    const { container, rerender } = render(
      <ControlledRadioGroup items={items} disabled />
    );
    let elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    elRadios.forEach((elRadio, i) => {
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`item${i + 1}`);
      expect(elRadio).toHaveClass(radioClassNames.disabled);
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(true);
      expect(elInput.checked).toBe(false);

      fireEvent.click(elLabel);
      expect(elRadio).toHaveClass(radioClassNames.disabled);
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(true);
      expect(elInput.checked).toBe(false);
    });

    rerender(<ControlledRadioGroup items={items} />);
    elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    elRadios.forEach((elRadio, i) => {
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`item${i + 1}`);
      expect(elRadio).not.toHaveClass(radioClassNames.disabled);
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(false);
      expect(elInput.checked).toBe(false);

      fireEvent.click(elLabel);
      expect(elRadio).not.toHaveClass(radioClassNames.disabled);
      expect(elRadio).toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(false);
      expect(elInput.checked).toBe(true);
    });

    cleanup();
  });

  test('Disabled item', () => {
    items[1].disabled = true;
    items[2].disabled = true;

    const { container } = render(<ControlledRadioGroup items={items} />);
    const elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    elRadios.forEach((elRadio, i) => {
      const item = items[i];
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`item${i + 1}`);
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).toBe(false);

      fireEvent.click(elLabel);
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio.classList.contains(radioClassNames.checked)).not.toBe(
        item.disabled ?? false
      );
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).not.toBe(item.disabled ?? false);
    });

    cleanup();
  });

  test('Change event', () => {
    items[1].disabled = true;
    items[3].disabled = true;

    let handleCount = 0;
    const onChange = jest.fn();
    const { container } = render(
      <ControlledRadioGroup items={items} onChange={onChange} />
    );
    const elRadios = container.querySelectorAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    elRadios.forEach((elRadio, i) => {
      const item = items[i];
      const elInput = elRadio.querySelector('input') as HTMLInputElement;
      const elLabel = elRadio.querySelector('label') as HTMLLabelElement;
      expect(elRadio.textContent).toBe(`item${i + 1}`);
      expect(elRadio.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio).not.toHaveClass(radioClassNames.checked);
      expect(elInput.disabled).toBe(item.disabled ?? false);
      expect(elInput.checked).toBe(false);

      fireEvent.click(elLabel);
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
    });
    expect(handleCount).toBe(2);

    cleanup();
  });
});
