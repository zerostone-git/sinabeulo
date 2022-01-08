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
  layerClassNames,
  LayerClassNames,
  classNamesForLayer,
} from './components/Layer';
import {
  radioClassNames,
  RadioClassNames,
  classNamesForRadio,
} from './components/Radio';
import {
  selectClassNames,
  SelectClassNames,
  classNamesForSelect,
} from './components/Select';
import {
  selectItemsClassNames,
  SelectItemsClassNames,
  classNamesForSelectItems,
} from './components/SelectItems';

export {
  classNamesForButton,
  classNamesForCheckbox,
  classNamesForLayer,
  classNamesForRadio,
  classNamesForSelect,
  classNamesForSelectItems,
  buttonClassNames,
  checkboxClassNames,
  layerClassNames,
  radioClassNames,
  selectClassNames,
  selectItemsClassNames,
};
export type {
  ButtonClassNames,
  CheckboxClassNames,
  LayerClassNames,
  RadioClassNames,
  SelectClassNames,
  SelectItemsClassNames,
};
