import {
  buttonClassNames,
  primaryButtonClassNames,
  toggleButtonClassNames,
  checkboxClassNames,
} from '..';

const Button = `<div>
<button class="${buttonClassNames.root}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.label}">Standard</span>
  </span>
</button>
<button class="${buttonClassNames.root}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.label}">Standard</span>
  </span>
</button>
</div><br />`;

const PrimaryButton = `<div>
<button class="${primaryButtonClassNames.root}" type="button">
  <span class="${primaryButtonClassNames.container}">
    <span class="${primaryButtonClassNames.label}">Primary</span>
  </span>
</button>
<button class="${primaryButtonClassNames.root}" type="button" disabled>
  <span class="${primaryButtonClassNames.container}">
    <span class="${primaryButtonClassNames.label}">Primary</span>
  </span>
</button>
</div><br />`;

const ToggleButton = `<div>
<button class="${toggleButtonClassNames.root} ${toggleButtonClassNames.checked}" type="button">
  <span class="${toggleButtonClassNames.container}">
    <span class="${toggleButtonClassNames.label}">Checked</span>
  </span>
</button>
<button class="${toggleButtonClassNames.root}" type="button">
  <span class="${toggleButtonClassNames.container}">
    <span class="${toggleButtonClassNames.label}">Unchecked</span>
  </span>
</button>
<button class="${toggleButtonClassNames.root} ${toggleButtonClassNames.checked}" type="button" disabled>
  <span class="${toggleButtonClassNames.container}">
    <span class="${toggleButtonClassNames.label}">Standard</span>
  </span>
</button>
<button class="${toggleButtonClassNames.root}" type="button" disabled>
  <span class="${toggleButtonClassNames.container}">
    <span class="${toggleButtonClassNames.label}">Standard</span>
  </span>
</button>
</div><br />`;
const buttons = document.createElement('div');
buttons.innerHTML = Button + PrimaryButton + ToggleButton;
document.body.appendChild(buttons);

const Checkbox = `<div>
<div class="${checkboxClassNames.root}">
  <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-1">
  <label class="${checkboxClassNames.label}" for="checkbox-1">
    <div class="${checkboxClassNames.checkbox}">
      <i class="ms-Checkbox-checkmark checkmark-458">&#10003;</i>
    </div>
    <span class="${checkboxClassNames.text}">Unchecked checkbox (uncontrolled)</span>
  </label>
</div>
</div><br />`;

const checkboxes = document.createElement('div');
checkboxes.innerHTML = Checkbox;
document.body.appendChild(checkboxes);
