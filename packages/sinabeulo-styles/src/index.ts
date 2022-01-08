import './theme.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/scss/solid.scss';
import {
  buttonClassNames,
  ButtonClassNames,
  classNamesForButton,
} from './components/Button';
import {
  checkboxClassNames,
  CheckboxClassNames,
  classNamesForCheckbox,
} from './components/Checkbox';
import {
  radioClassNames,
  RadioClassNames,
  classNamesForRadio,
} from './components/Radio';

export {
  classNamesForButton,
  classNamesForCheckbox,
  classNamesForRadio,
  buttonClassNames,
  checkboxClassNames,
  radioClassNames,
};
export type { ButtonClassNames, CheckboxClassNames, RadioClassNames };
