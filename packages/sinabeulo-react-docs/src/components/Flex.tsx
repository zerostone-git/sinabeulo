import React from 'react';

type FlexProps = React.PropsWithChildren<{
  direction?: 'horizontal' | 'vertical';
  gap?: number;
}>;

const Flex = (props: FlexProps): JSX.Element => {
  const { children, direction = 'horizontal', gap = 4 } = props;
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
};
Flex.defaultProps = {
  direction: 'horizontal',
  gap: 4,
};

export default Flex;
export type { FlexProps };
