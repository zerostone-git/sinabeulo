import '@fortawesome/fontawesome-free/scss/solid.scss';
import {
  buttonClassNames,
  checkboxClassNames,
  layerClassNames,
  radioClassNames,
  selectClassNames,
  selectItemsClassNames,
  textFieldClassNames,
} from '..';

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

const Checkbox = `<div>
<div>
  <div class="${checkboxClassNames.root}">
    <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-1">
    <label class="${checkboxClassNames.container}" for="checkbox-1">
      <span class="${checkboxClassNames.icon}">
        &#xf00c;
      </span>
      <span class="${checkboxClassNames.text}">Unchecked</span>
    </label>
  </div>
  <div class="${checkboxClassNames.root} ${checkboxClassNames.checked}">
    <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-2">
    <label class="${checkboxClassNames.container}" for="checkbox-2">
      <span class="${checkboxClassNames.icon}">
        &#xf00c;
      </span>
      <span class="${checkboxClassNames.text}">Checked</span>
    </label>
  </div>
  <div class="${checkboxClassNames.root} ${checkboxClassNames.indeterminate}">
    <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-2">
    <label class="${checkboxClassNames.container}" for="checkbox-2">
      <span class="${checkboxClassNames.icon}">
        &#xf0c8;
      </span>
      <span class="${checkboxClassNames.text}">Indeterminate</span>
    </label>
  </div>
</div>
<br />
<div>
  <div class="${checkboxClassNames.root} ${checkboxClassNames.disabled}">
    <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-3">
    <label class="${checkboxClassNames.container}" for="checkbox-3">
      <span class="${checkboxClassNames.icon}">
        &#xf00c;
      </span>
      <span class="${checkboxClassNames.text}">Unchecked</span>
    </label>
  </div>
  <div class="${checkboxClassNames.root} ${checkboxClassNames.checked} ${checkboxClassNames.disabled}">
    <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-4">
    <label class="${checkboxClassNames.container}" for="checkbox-4">
      <span class="${checkboxClassNames.icon}">
        &#xf00c;
      </span>
      <span class="${checkboxClassNames.text}">Checked</span>
    </label>
  </div>
  <div class="${checkboxClassNames.root} ${checkboxClassNames.indeterminate} ${checkboxClassNames.disabled}">
    <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-4">
    <label class="${checkboxClassNames.container}" for="checkbox-4">
      <span class="${checkboxClassNames.icon}">
        &#xf0c8;
      </span>
      <span class="${checkboxClassNames.text}">Indeterminate</span>
    </label>
  </div>
  </div>
</div><br />`;

const checkboxes = document.createElement('div');
checkboxes.innerHTML = Checkbox;
document.body.appendChild(checkboxes);

const Radio = `<div>
<div>
  <div class="${radioClassNames.root}">
    <input class="${radioClassNames.input}" type="radio" id="radio-1">
    <label class="${radioClassNames.container}" for="radio-1">
      <span class="${radioClassNames.icon}">
        &#xf111;
      </span>
      <span class="${radioClassNames.text}">Unchecked</span>
    </label>
  </div>
  <div class="${radioClassNames.root} ${radioClassNames.checked}">
    <input class="${radioClassNames.input}" type="radio" id="radio-2">
    <label class="${radioClassNames.container}" for="radio-2">
      <span class="${radioClassNames.icon}">
        &#xf111;
      </span>
      <span class="${radioClassNames.text}">Checked</span>
    </label>
  </div>
</div>
<br />
<div>
  <div class="${radioClassNames.root} ${radioClassNames.disabled}">
    <input class="${radioClassNames.input}" type="radio" id="radio-3">
    <label class="${radioClassNames.container}" for="radio-3">
      <span class="${radioClassNames.icon}">
        &#xf111;
      </span>
      <span class="${radioClassNames.text}">Unchecked</span>
    </label>
  </div>
  <div class="${radioClassNames.root} ${radioClassNames.checked} ${radioClassNames.disabled}">
    <input class="${radioClassNames.input}" type="radio" id="radio-4">
    <label class="${radioClassNames.container}" for="radio-4">
      <span class="${radioClassNames.icon}">
        &#xf111;
      </span>
      <span class="${radioClassNames.text}">Checked</span>
    </label>
  </div>
</div>
</div><br />`;

const radios = document.createElement('div');
radios.innerHTML = Radio;
document.body.appendChild(radios);

const Select = `<div>
<div>
  <div style="width: 200px"
    role="combobox"
    aria-expanded="false"
    class="${selectClassNames.root}"
  >
    <span class="${selectClassNames.container}">
      <span class="${selectClassNames.text}">Selected Text, Selected Text, Selected Text</span>
      <span class="${selectClassNames.icon}">&#xf078;</span>
    </span>
  </div>
</div>
<br />
<div>
  <div style="width: 200px"
    role="combobox"
    aria-expanded="false"
    class="${selectClassNames.root} ${selectClassNames.disabled}"
  >
    <span class="${selectClassNames.container}">
      <span class="${selectClassNames.text}">Selected Text, Selected Text, Selected Text</span>
      <span class="${selectClassNames.icon}">&#xf078;</span>
    </span>
  </div>
</div>
<br />
</div><br />`;

const selectes = document.createElement('div');
selectes.innerHTML = Select;
document.body.appendChild(selectes);

const SelectItems = `
<div class="${layerClassNames.root}">
  <div class="${layerClassNames.wrapper}">
    <div class="${layerClassNames.container}">
      <div class="${layerClassNames.content}" style="top: 220px; left: 350px; width: 200px;">
        <div class="${selectItemsClassNames.root}" role="listbox">
          <div role="group">
            <div class="${selectItemsClassNames.header}">
              <span>Buttons</span>
            </div>
            <button class="${buttonClassNames.root} ${selectItemsClassNames.item}" type="button">
              <span class="${buttonClassNames.container} ${selectItemsClassNames.itemContainer}">
                <span class="${buttonClassNames.text}">Standard</span>
              </span>
            </button>
            <button class="${buttonClassNames.root} ${buttonClassNames.disabled} ${selectItemsClassNames.itemDisabled} ${selectItemsClassNames.item}" type="button">
              <span class="${buttonClassNames.container} ${selectItemsClassNames.itemContainer}">
                <span class="${buttonClassNames.text}">Standard</span>
              </span>
            </button>
            <button class="${buttonClassNames.root} ${selectItemsClassNames.item}" type="button">
              <span class="${buttonClassNames.container} ${selectItemsClassNames.itemContainer}">
                <span class="${buttonClassNames.text}">Standard</span>
              </span>
            </button>
            <div role="separator" class="${selectItemsClassNames.separator}"></div>
          </div>
          <div role="group">
            <div class="${selectItemsClassNames.header}">
              <span>Checkboxes</span>
            </div>
            <div class="${checkboxClassNames.root} ${selectItemsClassNames.item}">
              <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-1">
              <label class="${checkboxClassNames.container} ${selectItemsClassNames.itemContainer}" for="checkbox-1">
                <span class="${checkboxClassNames.icon}">
                  &#10003;
                </span>
                <span class="${checkboxClassNames.text}">Unchecked</span>
              </label>
            </div>
            <div class="${checkboxClassNames.root} ${checkboxClassNames.disabled} ${selectItemsClassNames.itemDisabled} ${selectItemsClassNames.item}">
              <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-1">
              <label class="${checkboxClassNames.container} ${selectItemsClassNames.itemContainer}" for="checkbox-1">
                <span class="${checkboxClassNames.icon}">
                  &#10003;
                </span>
                <span class="${checkboxClassNames.text}">Unchecked</span>
              </label>
            </div>
            <div class="${checkboxClassNames.root} ${selectItemsClassNames.item}">
              <input class="${checkboxClassNames.input}" type="checkbox" id="checkbox-1">
              <label class="${checkboxClassNames.container} ${selectItemsClassNames.itemContainer}" for="checkbox-1">
                <span class="${checkboxClassNames.icon}">
                  &#10003;
                </span>
                <span class="${checkboxClassNames.text}">Unchecked</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

const selectItemses = document.createElement('div');
selectItemses.innerHTML = SelectItems;
document.body.appendChild(selectItemses);

const TextFields = `<div>
<div>
  <div class="${textFieldClassNames.root}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" />
    </div>
  </div>
  <div class="${textFieldClassNames.root}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" value="이것은 입력입니다." readonly />
    </div>
  </div>
</div>
<br />
<div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.hasIcon} ">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" />
      <span class="${textFieldClassNames.icon}">&#xf073;</span>
    </div>
  </div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.hasIcon} ">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" />
      <span class="${textFieldClassNames.icon}">&#xf002;</span>
    </div>
  </div>
</div>
<br />
<div>
  <div class="${textFieldClassNames.root}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" />
      <button class="${buttonClassNames.root} ${textFieldClassNames.button}" type="button">
        <span class="${buttonClassNames.container}">
          <span class="${buttonClassNames.icon}">&#xf06e;</span>
        </span>
      </button>
    </div>
  </div>
  <div class="${textFieldClassNames.root}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" />
      <button class="${buttonClassNames.root} ${textFieldClassNames.button}" type="button">
        <span class="${buttonClassNames.container}">
          <span class="${buttonClassNames.icon}">&#xf070;</span>
        </span>
      </button>
    </div>
  </div>
</div>
<br />
<div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.disabled}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" />
    </div>
  </div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.disabled}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" value="이것은 입력입니다." readonly disabled />
    </div>
  </div>
</div>
<br />
<div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.hasIcon} ${textFieldClassNames.disabled} ">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" disabled />
      <span class="${textFieldClassNames.icon}">&#xf073;</span>
    </div>
  </div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.hasIcon} ${textFieldClassNames.disabled} ">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" disabled />
      <span class="${textFieldClassNames.icon}">&#xf002;</span>
    </div>
  </div>
</div>
<br />
<div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.disabled}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" disabled />
      <button class="${buttonClassNames.root} ${buttonClassNames.disabled} ${textFieldClassNames.button}" type="button">
        <span class="${buttonClassNames.container}">
          <span class="${buttonClassNames.icon}">&#xf06e;</span>
        </span>
      </button>
    </div>
  </div>
  <div class="${textFieldClassNames.root} ${textFieldClassNames.disabled}">
    <div class="${textFieldClassNames.container}">
      <input type="text" class="${textFieldClassNames.input}" disabled />
      <button class="${buttonClassNames.root} ${buttonClassNames.disabled} ${textFieldClassNames.button}" type="button">
        <span class="${buttonClassNames.container}">
          <span class="${buttonClassNames.icon}">&#xf070;</span>
        </span>
      </button>
    </div>
  </div>
</div>
</div>`;

const textFields = document.createElement('div');
textFields.innerHTML = TextFields;
document.body.appendChild(textFields);
