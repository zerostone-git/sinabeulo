import React, { useCallback, useEffect, useState } from 'react';
import { checkboxClassNames } from '@sinabeulo/styles';
import { cleanup, fireEvent, getByRole, render } from '@testing-library/react';
import Checkbox from '../Checkbox';

function ControlledCheckbox(props: {
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement>,
    checked?: boolean
  ) => void;
}): JSX.Element {
  const { disabled, checked, indeterminate, onChange } = props;
  const [isChecked, setIsChecked] = useState(!!checked);
  const [isIndeterminate, setIsIndeterminate] = useState(!!indeterminate);
  const handleChange = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>, c?: boolean) => {
      setIsChecked(!!c);
      setIsIndeterminate(false);
      onChange?.(e, c);
    },
    [onChange]
  );
  useEffect(() => setIsChecked(!!checked), [checked]);
  useEffect(() => setIsIndeterminate(!!indeterminate), [indeterminate]);

  return (
    <Checkbox
      label="This is controlled checkbox"
      disabled={disabled}
      checked={isChecked}
      indeterminate={isIndeterminate}
      onChange={handleChange}
    />
  );
}
ControlledCheckbox.defaultProps = {
  disabled: undefined,
  checked: undefined,
  indeterminate: undefined,
  onChange: undefined,
};

describe('Checkbox', () => {
  test('Render as text.', () => {
    {
      const { container, rerender } = render(
        <Checkbox label="This is uncontrolled checkbox" />
      );
      expect(container.textContent).toBe('This is uncontrolled checkbox');

      rerender(
        <Checkbox label="This is uncontrolled checkbox" defaultIndeterminate />
      );
      expect(container.textContent).toBe('This is uncontrolled checkbox');

      rerender(
        <Checkbox
          label="This is uncontrolled checkbox"
          checked
          defaultIndeterminate
        />
      );
      expect(container.textContent).toBe('This is uncontrolled checkbox');

      cleanup();
    }
    {
      const { container } = render(
        <Checkbox
          label="This is uncontrolled checkbox"
          defaultChecked
          defaultIndeterminate
        />
      );
      expect(container.textContent).toBe('This is uncontrolled checkbox');

      cleanup();
    }
    {
      const { container, rerender } = render(<ControlledCheckbox />);
      expect(container.textContent).toBe('This is controlled checkbox');

      rerender(<ControlledCheckbox indeterminate />);
      expect(container.textContent).toBe('This is controlled checkbox');

      rerender(<ControlledCheckbox checked indeterminate />);
      expect(container.textContent).toBe('This is controlled checkbox');

      cleanup();
    }
    {
      const { container } = render(
        <ControlledCheckbox checked indeterminate />
      );
      expect(container.textContent).toBe('This is controlled checkbox');

      cleanup();
    }
  });

  describe('Uncontrolled checkbox', () => {
    test('Disabled checkbox', () => {
      const { container, rerender } = render(
        <Checkbox label="This is uncontrolled checkbox" />
      );
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" disabled />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Checked checkbox', () => {
      const { container, rerender } = render(
        <Checkbox label="This is uncontrolled checkbox" defaultChecked />
      );
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" disabled />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Indeterminate checkbox', () => {
      const { container, rerender } = render(
        <Checkbox label="This is uncontrolled checkbox" defaultIndeterminate />
      );
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" disabled />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Checked and indeterminate checkbox', () => {
      const { container, rerender } = render(
        <Checkbox
          label="This is uncontrolled checkbox"
          defaultChecked
          defaultIndeterminate
        />
      );
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" disabled />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<Checkbox label="This is uncontrolled checkbox" />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });
  });

  describe('Controlled checkbox', () => {
    test('Disabled checkbox', () => {
      const { container, rerender } = render(<ControlledCheckbox />);
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox disabled />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Checked checkbox', () => {
      const { container, rerender } = render(<ControlledCheckbox checked />);
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox disabled checked />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Indeterminate checkbox', () => {
      const { container, rerender } = render(
        <ControlledCheckbox indeterminate />
      );
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox disabled indeterminate />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Checked and indeterminate checkbox', () => {
      const { container, rerender } = render(
        <ControlledCheckbox checked indeterminate />
      );
      let elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox disabled checked indeterminate />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      rerender(<ControlledCheckbox />);
      elRoot = container.querySelector(`.${checkboxClassNames.root}`);
      elLabel = container.querySelector('label') as HTMLLabelElement;

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      fireEvent.click(elLabel);
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      cleanup();
    });

    test('Change event', () => {
      const onChange = jest.fn();
      const { container } = render(<ControlledCheckbox onChange={onChange} />);

      const elLabel = container.querySelector('label') as HTMLLabelElement;
      fireEvent.click(elLabel);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(
        (getByRole(container, 'checkbox') as unknown as { checked: boolean })
          .checked
      ).toBeTruthy();

      for (let i = 0; i < 5; i += 1) {
        fireEvent.click(elLabel);
      }
      expect(onChange).toHaveBeenCalledTimes(6);
      expect(
        (getByRole(container, 'checkbox') as unknown as { checked: boolean })
          .checked
      ).toBeFalsy();

      cleanup();
    });
  });
});
