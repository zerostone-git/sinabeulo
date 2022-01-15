import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import useConst from '../useConst';

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

describe('useConst', () => {
  test('From value', () => {
    let currentValue = undefined as number | undefined;
    let initialValue = undefined as number | undefined;
    let count = 0;

    function TestComponent({ value }: { value: number | undefined }) {
      currentValue = useConst(value);
      initialValue ||= currentValue;
      count += 1;
      return <div>{currentValue}</div>;
    }

    const { rerender } = render(<TestComponent value={Math.random()} />, {
      container,
    });
    expect(count).toBe(1);
    expect(initialValue).toBeDefined();
    expect((currentValue = undefined)).toBeUndefined();
    expect(container.textContent).toBe(initialValue?.toString(10));

    rerender(<TestComponent value={Math.random()} />);
    expect(count).toBe(2);
    expect(currentValue).toBeDefined();
    expect(currentValue).toBe(initialValue);
    expect(container.textContent).toBe(initialValue?.toString(10));

    rerender(<TestComponent value={undefined} />);
    expect(count).toBe(3);
    expect(currentValue).toBeDefined();
    expect(currentValue).toBe(initialValue);
    expect(container.textContent).toBe(initialValue?.toString(10));
  });

  test('From function', () => {
    let currentValue = undefined as number | undefined;
    let initialValue = undefined as number | undefined;
    let count = 0;

    function TestComponent({ value }: { value: () => number | undefined }) {
      currentValue = useConst<number | undefined>(value);
      initialValue ||= currentValue;
      count += 1;
      return <div>{currentValue}</div>;
    }

    const initializer = jest.fn(() => Math.random());
    const { rerender } = render(<TestComponent value={initializer} />, {
      container,
    });
    expect(count).toBe(1);
    expect(initialValue).toBeDefined();
    expect((currentValue = undefined)).toBeUndefined();
    expect(container.textContent).toBe(initialValue?.toString(10));
    expect(initializer).toBeCalledTimes(1);

    rerender(<TestComponent value={() => undefined} />);
    expect(count).toBe(2);
    expect(currentValue).toBeDefined();
    expect(currentValue).toBe(initialValue);
    expect(container.textContent).toBe(initialValue?.toString(10));
    expect(initializer).toBeCalledTimes(1);

    rerender(<TestComponent value={initializer} />);
    expect(count).toBe(3);
    expect(currentValue).toBeDefined();
    expect(currentValue).toBe(initialValue);
    expect(container.textContent).toBe(initialValue?.toString(10));
    expect(initializer).toBeCalledTimes(1);
  });
});
