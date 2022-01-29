import '@sinabeulo/styles/dist/index.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import RadioGroup, { Radio, type RadioGroupItem } from './components/Radio';

declare global {
  interface Window {
    __SI_CHECKBOX_NO: number;
    __SI_RADIO_NO: number;
  }
}

export { Button, Checkbox, Radio, RadioGroup };
export type { RadioGroupItem };
