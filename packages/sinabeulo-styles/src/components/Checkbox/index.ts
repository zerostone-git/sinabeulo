import { composeClassNames } from '@sinabeulo/utils';
import checkboxClassNames, { CheckboxClassNames } from './Checkbox.scss';

const classNamesForCheckbox = (
  ...composite: (Partial<CheckboxClassNames> | undefined)[]
): CheckboxClassNames => composeClassNames(checkboxClassNames, ...composite);

export { checkboxClassNames, classNamesForCheckbox };
export type { CheckboxClassNames };
