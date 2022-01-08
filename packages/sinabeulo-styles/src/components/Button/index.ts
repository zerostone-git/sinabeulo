import { composeClassNames } from '@sinabeulo/utils';
import buttonClassNames, { ButtonClassNames } from './Button.scss';

const classNamesForButton = (
  ...composite: (Partial<ButtonClassNames> | undefined)[]
): ButtonClassNames => composeClassNames(buttonClassNames, ...composite);

export { buttonClassNames, classNamesForButton };
export type { ButtonClassNames };
