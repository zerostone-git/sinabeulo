import { buttonClassNames } from '..';

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

const IconButton = `<div>
<button class="${buttonClassNames.root}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#128513;</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.primary}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#128513;</span>
  </span>
</button>
</div><br />`;

const CheckedButton = `<div>
<button class="${buttonClassNames.root} ${buttonClassNames.checked}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#128513;</span>
    <span class="${buttonClassNames.text}">Checked</span>
  </span>
</button>
<button class="${buttonClassNames.root}" type="button">
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#128513;</span>
    <span class="${buttonClassNames.text}">Unchecked</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.checked} ${buttonClassNames.disabled}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#128513;</span>
    <span class="${buttonClassNames.text}">Checked</span>
  </span>
</button>
<button class="${buttonClassNames.root} ${buttonClassNames.disabled}" type="button" disabled>
  <span class="${buttonClassNames.container}">
    <span class="${buttonClassNames.icon}">&#128513;</span>
    <span class="${buttonClassNames.text}">Unchecked</span>
  </span>
</button>
</div><br />`;
const buttons = document.createElement('div');
buttons.innerHTML = Button + PrimaryButton + IconButton + CheckedButton;
document.body.appendChild(buttons);
