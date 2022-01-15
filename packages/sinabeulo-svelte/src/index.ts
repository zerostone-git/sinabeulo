import '@sinabeulo/styles/dist/index.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

declare global {
  interface Window {
    // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
    __SI_CHECKBOX_NO: number;
  }
}

export { Button, Checkbox };
