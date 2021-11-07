import { ButtonClassNames } from '.';

type ToggleButtonClassNames = ButtonClassNames & {
  checked: string;
};

declare const toggleButtonClassNames: ToggleButtonClassNames;

export default toggleButtonClassNames;
export type { ToggleButtonClassNames };
