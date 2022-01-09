import { composeClassNames } from '@sinabeulo/utils';
import textFieldClassNames, { TextFieldClassNames } from './TextField.scss';

const classNamesForTextField = (
  ...composite: (Partial<TextFieldClassNames> | undefined)[]
): TextFieldClassNames => composeClassNames(textFieldClassNames, ...composite);

export { textFieldClassNames, classNamesForTextField };
export type { TextFieldClassNames };
