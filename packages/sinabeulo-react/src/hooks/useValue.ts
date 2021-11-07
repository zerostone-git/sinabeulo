import React from 'react';
import useConst from './useConst';

export type ChangeCallback<
  TElement extends HTMLElement,
  TValue,
  TEvent extends React.SyntheticEvent<TElement> | undefined
> = (ev: TEvent, newValue: TValue | undefined) => void;

/**
 * 제어 컴포넌트의 값을 처리하는 훅입니다.
 * @param value - 컴포넌트의 속성에 전달된 값입니다. 이 값이 있을 경우 항상 이 값을 사용합니다.
 * @param defaultValue - Initial value for the internal state in the uncontrolled case.
 * @returns An array of the current value and an updater callback. Like `React.useState`, the updater callback always has the same identity, and it can take either a new value, or a function which is passed the previous value and returns the new value.
 * @see https://reactjs.org/docs/uncontrolled-components.html
 */
export function useValue<
  TValue,
  TElement extends HTMLElement,
  TEvent extends React.SyntheticEvent<TElement> | undefined
>(
  value: TValue | undefined,
  defaultValue: TValue | undefined,
  onChange?: ChangeCallback<TElement, TValue, TEvent | undefined>
): Readonly<
  [
    TValue | undefined,
    (
      update: React.SetStateAction<TValue | undefined>,
      ev?: React.FormEvent<TElement>
    ) => void
  ]
> {
  const [valueIn, setValueIn] = React.useState<TValue | undefined>(
    defaultValue
  );
  const isControlled = useConst(value !== undefined);
  const currentValue = isControlled ? value : valueIn;

  // Duplicate the current value and onChange in refs so they're accessible from
  // setValueOrCallOnChange without creating a new callback every time
  const valueRef = React.useRef(currentValue);
  const onChangeRef = React.useRef(onChange);
  React.useEffect(() => {
    valueRef.current = currentValue;
    onChangeRef.current = onChange;
  });

  // To match the behavior of the setter returned by React.useState, this callback's identity
  // should never change. This means it MUST NOT directly reference variables that can change.
  const setValueOrCallOnChange = useConst(
    () => (update: React.SetStateAction<TValue | undefined>, ev?: TEvent) => {
      // Assuming here that TValue is not a function, because a controllable value will typically
      // be something a user can enter as input
      const newValue: TValue | undefined =
        typeof update === 'function'
          ? (update as (value: TValue | undefined) => TValue | undefined)(
              valueRef.current
            )
          : update;

      if (onChangeRef.current) {
        onChangeRef.current(ev, newValue);
      }

      if (!isControlled) {
        setValueIn(newValue);
      }
    }
  );

  return [currentValue, setValueOrCallOnChange] as Readonly<
    [
      TValue | undefined,
      (
        update: React.SetStateAction<TValue | undefined>,
        ev?: React.FormEvent<TElement>
      ) => void
    ]
  >;
}
