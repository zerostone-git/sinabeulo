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

export {
  classNamesForButton,
  classNamesForCheckbox,
  buttonClassNames,
  checkboxClassNames,
};
export type { ButtonClassNames, CheckboxClassNames };
