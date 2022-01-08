import { composeClassNames } from '@sinabeulo/utils';
import selectClassNames, { SelectClassNames } from './Select.scss';

const classNamesForSelect = (
  ...composite: (Partial<SelectClassNames> | undefined)[]
): SelectClassNames => composeClassNames(selectClassNames, ...composite);

export { selectClassNames, classNamesForSelect };
export type { SelectClassNames };
