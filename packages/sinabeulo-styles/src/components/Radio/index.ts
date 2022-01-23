import { composeClassNames } from '@sinabeulo/utils';
import radioClassNames, { RadioClassNames } from './Radio.scss';
import radioGroupClassNames, { RadioGroupClassNames } from './RadioGroup.scss';

const classNamesForRadio = (
  ...composite: (Partial<RadioClassNames> | undefined)[]
): RadioClassNames => composeClassNames(radioClassNames, ...composite);

const classNamesForRadioGroup = (
  ...composite: (Partial<RadioGroupClassNames> | undefined)[]
): RadioGroupClassNames =>
  composeClassNames(radioGroupClassNames, ...composite);

export {
  radioClassNames,
  radioGroupClassNames,
  classNamesForRadio,
  classNamesForRadioGroup,
};
export type { RadioClassNames, RadioGroupClassNames };
