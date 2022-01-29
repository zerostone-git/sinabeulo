import { composeClassNames } from '@sinabeulo/utils';
import selectItemsClassNames, {
  SelectItemsClassNames,
} from './SelectItems.scss';

const classNamesForSelectItems = (
  ...composite: (Partial<SelectItemsClassNames> | undefined)[]
): SelectItemsClassNames =>
  composeClassNames(selectItemsClassNames, ...composite);

export { selectItemsClassNames, classNamesForSelectItems };
export type { SelectItemsClassNames };
