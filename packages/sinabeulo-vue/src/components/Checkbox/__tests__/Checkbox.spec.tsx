import { defineComponent } from 'vue';
import { checkboxClassNames } from '@sinabeulo/styles';
import { mount } from '@vue/test-utils';
import Checkbox from '../Checkbox';

const ControlledCheckbox = defineComponent({
  components: { Checkbox },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    checked: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    indeterminate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      isChecked: !!this.checked,
      isIndeterminate: !!this.indeterminate,
    };
  },
  watch: {
    checked(value: boolean) {
      this.isChecked = value;
    },
    indeterminate(value: boolean) {
      this.isIndeterminate = value;
    },
  },
  methods: {
    handleChange(e?: Event, c?: boolean) {
      this.isChecked = !!c;
    },
  },
  render() {
    return (
      <Checkbox
        label="This is controlled checkbox"
        disabled={this.disabled}
        checked={this.isChecked}
        indeterminate={this.isIndeterminate}
        onChange={this.handleChange}
      />
    );
  },
});

describe('Checkbox', () => {
  test('Render as text.', async () => {
    {
      const wrapper = mount(Checkbox, {
        props: {
          label: 'This is uncontrolled checkbox',
        },
      });
      expect(wrapper.text()).toBe('This is uncontrolled checkbox');
      await wrapper.setProps({ defaultIndeterminate: true });
      expect(wrapper.text()).toBe('This is uncontrolled checkbox');
      await wrapper.setProps({ checked: true });
      expect(wrapper.text()).toBe('This is uncontrolled checkbox');

      wrapper.unmount();
    }
    {
      const wrapper = mount(Checkbox, {
        props: {
          label: 'This is uncontrolled checkbox',
          defaultChecked: true,
          defaultIndeterminate: true,
        },
      });
      expect(wrapper.text()).toBe('This is uncontrolled checkbox');

      wrapper.unmount();
    }
    {
      const wrapper = mount(ControlledCheckbox);
      expect(wrapper.text()).toBe('This is controlled checkbox');

      await wrapper.setProps({ indeterminate: true });
      expect(wrapper.text()).toBe('This is controlled checkbox');

      await wrapper.setProps({ checked: true });
      expect(wrapper.text()).toBe('This is controlled checkbox');

      wrapper.unmount();
    }
    {
      const wrapper = mount(ControlledCheckbox, {
        props: {
          checked: true,
          indeterminate: true,
        },
      });
      expect(wrapper.text()).toBe('This is controlled checkbox');

      wrapper.unmount();
    }
  });

  describe('Uncontrolled checkbox', () => {
    test('Disabled checkbox', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          label: 'This is uncontrolled checkbox',
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let warpInput = wrapper.find({ ref: 'refInput' });
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      warpInput = wrapper.find({ ref: 'refInput' });

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Checked checkbox', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          label: 'This is uncontrolled checkbox',
          defaultChecked: true,
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let warpInput = wrapper.find({ ref: 'refInput' });
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      warpInput = wrapper.find({ ref: 'refInput' });

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Indeterminate checkbox', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          label: 'This is uncontrolled checkbox',
          defaultIndeterminate: true,
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let warpInput = wrapper.find({ ref: 'refInput' });
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      warpInput = wrapper.find({ ref: 'refInput' });

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Checked and indeterminate checkbox', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          label: 'This is uncontrolled checkbox',
          defaultChecked: true,
          defaultIndeterminate: true,
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let warpInput = wrapper.find({ ref: 'refInput' });
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      warpInput = wrapper.find({ ref: 'refInput' });

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });
  });

  describe('Controlled checkbox', () => {
    test('Disabled checkbox', async () => {
      const wrapper = mount(ControlledCheckbox);
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let wrapCheckbox = wrapper.findComponent(Checkbox);
      let warpInput = wrapCheckbox.find({ ref: 'refInput' });
      let elInput = warpInput.element as HTMLInputElement;
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      wrapCheckbox = wrapper.findComponent(Checkbox);
      warpInput = wrapCheckbox.find({ ref: 'refInput' });
      elInput = warpInput.element as HTMLInputElement;

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Checked checkbox', async () => {
      const wrapper = mount(ControlledCheckbox, {
        props: {
          checked: true,
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      let wrapCheckbox = wrapper.findComponent(Checkbox);
      let warpInput = wrapCheckbox.find({ ref: 'refInput' });
      let elInput = warpInput.element as HTMLInputElement;
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false, checked: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      wrapCheckbox = wrapper.findComponent(Checkbox);
      warpInput = wrapCheckbox.find({ ref: 'refInput' });
      elInput = warpInput.element as HTMLInputElement;

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Indeterminate checkbox', async () => {
      const wrapper = mount(ControlledCheckbox, {
        props: {
          indeterminate: true,
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let wrapCheckbox = wrapper.findComponent(Checkbox);
      let warpInput = wrapCheckbox.find({ ref: 'refInput' });
      let elInput = warpInput.element as HTMLInputElement;
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: false, indeterminate: false });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      wrapCheckbox = wrapper.findComponent(Checkbox);
      warpInput = wrapCheckbox.find({ ref: 'refInput' });
      elInput = warpInput.element as HTMLInputElement;

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Checked and indeterminate checkbox', async () => {
      const wrapper = mount(ControlledCheckbox, {
        props: {
          checked: true,
          indeterminate: true,
        },
      });
      let elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({ disabled: true });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      let wrapCheckbox = wrapper.findComponent(Checkbox);
      let warpInput = wrapCheckbox.find({ ref: 'refInput' });
      let elInput = warpInput.element as HTMLInputElement;
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).toHaveClass(checkboxClassNames.indeterminate);

      await wrapper.setProps({
        disabled: false,
        checked: false,
        indeterminate: false,
      });
      elRoot = wrapper.find(`.${checkboxClassNames.root}`).element;
      wrapCheckbox = wrapper.findComponent(Checkbox);
      warpInput = wrapCheckbox.find({ ref: 'refInput' });
      elInput = warpInput.element as HTMLInputElement;

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(elRoot).not.toHaveClass(checkboxClassNames.disabled);
      expect(elRoot).not.toHaveClass(checkboxClassNames.checked);
      expect(elRoot).not.toHaveClass(checkboxClassNames.indeterminate);

      wrapper.unmount();
    });

    test('Change event', async () => {
      const wrapper = mount(ControlledCheckbox);

      const wrapCheckbox = wrapper.findComponent(Checkbox);
      const warpInput = wrapCheckbox.find({ ref: 'refInput' });
      const elInput = warpInput.element as HTMLInputElement;
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(wrapper.emitted('change')).toHaveLength(1);
      expect(wrapCheckbox.props('checked')).toBeTruthy();

      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      elInput.checked = !wrapCheckbox.props('checked');
      await warpInput.trigger('change');
      expect(wrapper.emitted('change')).toHaveLength(6);
      expect(wrapCheckbox.props('checked')).toBeFalsy();

      wrapper.unmount();
    });
  });
});
