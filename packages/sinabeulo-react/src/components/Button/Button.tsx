import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { ButtonClassNames, classNamesForButton } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';

/**
 * 버튼의 속성입니다.
 */
type ButtonProps = React.PropsWithChildren<{
  /**
   * 버튼의 CSS 클래스 이름입니다.
   */
  classNames?: Partial<ButtonClassNames>;
  /**
   * 버튼이 체크되어 있는지 여부입니다.
   */
  checked?: boolean;
  /**
   * 버튼이 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 강조할 버튼인지 여부입니다.
   */
  primary?: boolean;
  /**
   * 버튼 클릭될 때의 콜백입니다.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

/**
 * 버튼입니다.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      classNames,
      checked = false,
      disabled = false,
      primary = false,
      onClick,
    } = props;
    const refButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(refButton.current);
      } else if (ref) {
        ref.current = refButton.current;
      }
    }, [ref]);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
          return;
        }
        onClick?.(event);
      },
      [disabled, onClick]
    );

    const cn = useMemo(() => classNamesForButton(classNames), [classNames]);
    return (
      <button
        type="button"
        ref={refButton}
        className={createClassName(cn.root, {
          [cn.primary]: primary,
          [cn.checked]: checked,
        })}
        disabled={disabled}
        onClick={handleClick}
      >
        <span className={cn.container}>{children}</span>
      </button>
    );
  }
);
Button.defaultProps = {
  classNames: undefined,
  checked: undefined,
  disabled: undefined,
  primary: undefined,
  onClick: undefined,
};

export default Button;
export type { ButtonProps };
