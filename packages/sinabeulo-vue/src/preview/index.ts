import { buttonClassNames, checkboxClassNames } from '..';

const Button = `<div>
<button class="${buttonClassNames.root}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Standard</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.disabled}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Standard</span>
  </span>
</button>
</div><br />`;

const PrimaryButton = `<div>
<button class="${buttonClassNames.root} ${buttonClassNames.primary}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Primary</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.primary} ${buttonClassNames.disabled}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Primary</span>
  </span>
</button>
</div><br />`;

const ToggleButton = `<div>
<button class="${buttonClassNames.root} ${buttonClassNames.checked}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Checked</span>
  </span>
</button>
<button class="${buttonClassNames.root}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Unchecked</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.checked} ${buttonClassNames.disabled}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.text}">Checked</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.disabled}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#10003;</span>
    <span class="${buttonClassNames.text}">Unchecked</span>
  </span>
</button>
</div><br />`;
const buttons = document.createElement('div');
buttons.innerHTML = Button + PrimaryButton + ToggleButton;
document.body.appendChild(buttons);

const Checkbox = `<div>
<div class="${checkboxClassNames.root}">
  <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-1">
  <label class="${checkboxClassNames.container}" for="checkbox-1">
    <span class="${checkboxClassNames.icon}">
      &#10003;
    </span>
    <span class="${checkboxClassNames.text}">Unchecked</span>
  </label>
</div>
<br />
<div class="${checkboxClassNames.root} ${checkboxClassNames.checked}">
  <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-2">
  <label class="${checkboxClassNames.container}" for="checkbox-2">
    <span class="${checkboxClassNames.icon}">
      &#10003;
    </span>
    <span class="${checkboxClassNames.text}">Checked</span>
  </label>
</div>
<br />
<div class="${checkboxClassNames.root} ${checkboxClassNames.disabled}">
  <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-3">
  <label class="${checkboxClassNames.container}" for="checkbox-3">
    <span class="${checkboxClassNames.icon}">
      &#10003;
    </span>
    <span class="${checkboxClassNames.text}">Unchecked</span>
  </label>
</div>
<br />
<div class="${checkboxClassNames.root} ${checkboxClassNames.checked} ${checkboxClassNames.disabled}">
  <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-4">
  <label class="${checkboxClassNames.container}" for="checkbox-4">
    <span class="${checkboxClassNames.icon}">
      &#10003;
    </span>
    <span class="${checkboxClassNames.text}">Checked</span>
  </label>
</div>
</div><br />`;

const checkboxes = document.createElement('div');
checkboxes.innerHTML = Checkbox;
document.body.appendChild(checkboxes);
