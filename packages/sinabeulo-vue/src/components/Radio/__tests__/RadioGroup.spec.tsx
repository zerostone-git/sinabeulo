import { defineComponent, PropType } from 'vue';
import { radioClassNames } from '@sinabeulo/styles';
import { DOMWrapper, mount } from '@vue/test-utils';
import RadioGroup, { RadioGroupItem } from '../RadioGroup';

const radioGroupItems = [
  { value: 'item1', label: 'item1' },
  { value: 'item2', label: 'item2' },
  { value: 'item3', label: 'item3' },
  { value: 'item4', label: 'item4' },
] as RadioGroupItem[];

const ControlledRadioGroup = defineComponent({
  components: { RadioGroup },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    items: {
      type: Array as PropType<RadioGroupItem[]>,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      selectedValue: undefined as string | number | undefined,
    };
  },
  methods: {
    handleChange(e?: Event, item?: RadioGroupItem) {
      this.selectedValue = item?.value;
    },
  },
  render() {
    return (
      <RadioGroup
        disabled={this.disabled}
        name="radiogroup"
        items={this.items}
        selectedValue={this.selectedValue}
        onChange={this.handleChange}
      />
    );
  },
});

describe('RadioGroup', () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  async function* asyncGenerator(radios: DOMWrapper<Element>[]) {
    let i = 0;
    while (i < radios.length) {
      // eslint-disable-next-line no-plusplus
      yield radios[i++];
    }
  }

  let items = radioGroupItems;
  beforeEach(() => {
    items = [...radioGroupItems.map((item) => ({ ...item }))];
  });

  test('Render as text.', () => {
    const wrapper = mount(RadioGroup, {
      props: { name: 'radiogroup', items },
    });
    const elLabels = wrapper.findAll('label');
    expect(elLabels.length).toBe(4);
    elLabels.forEach((elLabel, i) => {
      expect(elLabel.text()).toBe(`item${i + 1}`);
    });
    expect(wrapper.text()).toBe('item1item2item3item4');

    wrapper.unmount();
  });

  test('Disabled group', async () => {
    const wrapper = mount(ControlledRadioGroup, {
      props: { items, disabled: true },
    });
    let i = 0;
    let elRadios = wrapper.findAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    for await (const elRadio of asyncGenerator(elRadios)) {
      const elInput = elRadio.find('input');
      expect(elRadio.text()).toBe(`item${(i += 1)}`);
      expect(elRadio.element).toHaveClass(radioClassNames.disabled);
      expect(elRadio.element).not.toHaveClass(radioClassNames.checked);
      expect((elInput.element as HTMLInputElement).disabled).toBe(true);
      expect((elInput.element as HTMLInputElement).checked).toBe(false);

      elInput.element as HTMLInputElement;
      await elInput.trigger('change');
      expect(elRadio.element).toHaveClass(radioClassNames.disabled);
      expect(elRadio.element).not.toHaveClass(radioClassNames.checked);
      expect((elInput.element as HTMLInputElement).disabled).toBe(true);
      expect((elInput.element as HTMLInputElement).checked).toBe(false);
    }

    await wrapper.setProps({ items, disabled: false });
    elRadios = wrapper.findAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    i = 0;
    for await (const elRadio of asyncGenerator(elRadios)) {
      const elInput = elRadio.find('input');
      expect(elRadio.text()).toBe(`item${(i += 1)}`);
      expect(elRadio.element).not.toHaveClass(radioClassNames.disabled);
      expect(elRadio.element).not.toHaveClass(radioClassNames.checked);
      expect((elInput.element as HTMLInputElement).disabled).toBe(false);
      expect((elInput.element as HTMLInputElement).checked).toBe(false);

      elInput.element as HTMLInputElement;
      await elInput.trigger('change');
      expect(elRadio.element).not.toHaveClass(radioClassNames.disabled);
      expect(elRadio.element).toHaveClass(radioClassNames.checked);
      expect((elInput.element as HTMLInputElement).disabled).toBe(false);
      expect((elInput.element as HTMLInputElement).checked).toBe(true);
    }

    wrapper.unmount();
  });

  test('Disabled item', async () => {
    items[1].disabled = true;
    items[2].disabled = true;

    const wrapper = mount(ControlledRadioGroup, {
      props: { items },
    });
    let i = 0;
    const elRadios = wrapper.findAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    for await (const elRadio of asyncGenerator(elRadios)) {
      const item = items[i];
      const elInput = elRadio.find('input');
      expect(elRadio.text()).toBe(`item${(i += 1)}`);
      expect(elRadio.element.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio.element).not.toHaveClass(radioClassNames.checked);
      expect((elInput.element as HTMLInputElement).disabled).toBe(
        item.disabled ?? false
      );
      expect((elInput.element as HTMLInputElement).checked).toBe(false);

      elInput.element as HTMLInputElement;
      await elInput.trigger('change');
      expect(elRadio.element.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(
        elRadio.element.classList.contains(radioClassNames.checked)
      ).not.toBe(item.disabled ?? false);
      expect((elInput.element as HTMLInputElement).disabled).toBe(
        item.disabled ?? false
      );
      expect((elInput.element as HTMLInputElement).checked).not.toBe(
        item.disabled ?? false
      );
    }

    wrapper.unmount();
  });

  test('Change event', async () => {
    items[1].disabled = true;
    items[3].disabled = true;

    const wrapper = mount(ControlledRadioGroup, {
      props: { items },
    });
    let i = 0;
    let handleCount = 0;
    const elRadios = wrapper.findAll(`.${radioClassNames.root}`);
    expect(elRadios.length).toBe(4);

    for await (const elRadio of asyncGenerator(elRadios)) {
      const item = items[i];
      const elInput = elRadio.find('input');
      expect(elRadio.text()).toBe(`item${(i += 1)}`);
      expect(elRadio.element.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(elRadio.element).not.toHaveClass(radioClassNames.checked);
      expect((elInput.element as HTMLInputElement).disabled).toBe(
        item.disabled ?? false
      );
      expect((elInput.element as HTMLInputElement).checked).toBe(false);

      elInput.element as HTMLInputElement;
      await elInput.trigger('change');
      if (!item.disabled) {
        handleCount += 1;
      }
      expect(elRadio.element.classList.contains(radioClassNames.disabled)).toBe(
        item.disabled ?? false
      );
      expect(
        elRadio.element.classList.contains(radioClassNames.checked)
      ).not.toBe(item.disabled ?? false);
      expect((elInput.element as HTMLInputElement).disabled).toBe(
        item.disabled ?? false
      );
      expect((elInput.element as HTMLInputElement).checked).not.toBe(
        item.disabled ?? false
      );
      expect(wrapper.emitted('change')).toHaveLength(handleCount);
    }
    expect(handleCount).toBe(2);

    wrapper.unmount();
  });
});
