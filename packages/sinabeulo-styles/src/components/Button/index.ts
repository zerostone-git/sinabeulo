import { composeClassNames } from '@sinabeulo/utils';
import buttonClassNames, { ButtonClassNames } from './Button.scss';
import primaryButtonClassNames, {
  PrimaryButtonClassNames,
} from './PrimaryButton.scss';
import toggleButtonClassNames, {
  ToggleButtonClassNames,
} from './ToggleButton.scss';

const classNamesForButton = (
  ...composite: (Partial<ButtonClassNames> | undefined)[]
): ButtonClassNames => composeClassNames(buttonClassNames, ...composite);

const primaryButtonClassNamesExport = {
  ...buttonClassNames,
  ...primaryButtonClassNames,
};
const classNamesForPrimaryButton = (
  ...composite: (Partial<PrimaryButtonClassNames> | undefined)[]
): PrimaryButtonClassNames =>
  composeClassNames(primaryButtonClassNamesExport, ...composite);

const toggleButtonClassNamesExport = {
  ...buttonClassNames,
  ...toggleButtonClassNames,
};
const classNamesForToggleButton = (
  ...composite: (Partial<ToggleButtonClassNames> | undefined)[]
): ToggleButtonClassNames =>
  composeClassNames(toggleButtonClassNamesExport, ...composite);

export {
  buttonClassNames,
  primaryButtonClassNamesExport as primaryButtonClassNames,
  toggleButtonClassNamesExport as toggleButtonClassNames,
  classNamesForButton,
  classNamesForPrimaryButton,
  classNamesForToggleButton,
};
export type {
  ButtonClassNames,
  PrimaryButtonClassNames,
  ToggleButtonClassNames,
};
