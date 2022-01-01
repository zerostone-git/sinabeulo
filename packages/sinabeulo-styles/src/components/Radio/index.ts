import { composeClassNames } from '@sinabeulo/utils';
import radioClassNames, { RadioClassNames } from './Radio.scss';

const classNamesForRadio = (
  ...composite: (Partial<RadioClassNames> | undefined)[]
): RadioClassNames => composeClassNames(radioClassNames, ...composite);

export { radioClassNames, classNamesForRadio };
export type { RadioClassNames };
