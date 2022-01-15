import { buttonClassNames } from '@sinabeulo/styles';
import { mount } from '@vue/test-utils';
import Button from '../Button';

describe('Button', () => {
  test('Render as text.', () => {
    let wrapper = mount(Button, {
      slots: {
        default: () => 'Standard',
      },
    });
    expect(wrapper.text()).toBe('Standard');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        primary: true,
      },
      slots: {
        default: () => 'Primary',
      },
    });
    expect(wrapper.text()).toBe('Primary');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        checked: true,
      },
      slots: {
        default: () => 'Checked',
      },
    });
    expect(wrapper.text()).toBe('Checked');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: () => 'Standard',
      },
    });
    expect(wrapper.text()).toBe('Standard');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
        primary: true,
      },
      slots: {
        default: () => 'Primary',
      },
    });
    expect(wrapper.text()).toBe('Primary');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
        checked: true,
      },
      slots: {
        default: () => 'Checked',
      },
    });
    expect(wrapper.text()).toBe('Checked');
    wrapper.unmount();

    wrapper = mount(Button, {
      slots: {
        default: () => 'Standard',
        icon: () => <span>icon 1</span>,
      },
    });
    expect(wrapper.text()).toBe('icon 1Standard');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        primary: true,
      },
      slots: {
        default: () => 'Primary',
        icon: () => <span>icon 2</span>,
      },
    });
    expect(wrapper.text()).toBe('icon 2Primary');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        checked: true,
      },
      slots: {
        default: () => 'Checked',
        icon: () => <span>icon 3</span>,
      },
    });
    expect(wrapper.text()).toBe('icon 3Checked');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: () => 'Standard',
        icon: () => <span>icon 4</span>,
      },
    });
    expect(wrapper.text()).toBe('icon 4Standard');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
        primary: true,
      },
      slots: {
        default: () => 'Primary',
        icon: () => <span>icon 5</span>,
      },
    });
    expect(wrapper.text()).toBe('icon 5Primary');
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
        checked: true,
      },
      slots: {
        default: () => 'Checked',
        icon: () => <span>icon 6</span>,
      },
    });
    expect(wrapper.text()).toBe('icon 6Checked');
    wrapper.unmount();
  });

  test('Standard button.', () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => 'Standard',
      },
    });
    const elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    wrapper.unmount();
  });

  test('Primary button.', async () => {
    const wrapper = mount(Button, {
      props: {
        primary: true,
      },
      slots: {
        default: () => 'Primary',
      },
    });
    let elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await wrapper.setProps({ primary: false });
    elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    wrapper.unmount();
  });

  test('Checked button.', async () => {
    const wrapper = mount(Button, {
      props: {
        checked: true,
      },
      slots: {
        default: () => 'Checked',
      },
    });
    let elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);

    await wrapper.setProps({ checked: false });
    elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    wrapper.unmount();
  });

  test('Disabled button.', async () => {
    let wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: () => 'Standard',
      },
    });
    let elButton = wrapper.find('button').element;
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await wrapper.setProps({ disabled: false });
    elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
        primary: true,
      },
      slots: {
        default: () => 'Primary',
      },
    });
    elButton = wrapper.find('button').element;
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);

    await wrapper.setProps({ disabled: false });
    elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).toHaveClass(buttonClassNames.primary);
    expect(elButton).not.toHaveClass(buttonClassNames.checked);
    wrapper.unmount();

    wrapper = mount(Button, {
      props: {
        disabled: true,
        checked: true,
      },
      slots: {
        default: () => 'Checked',
      },
    });
    elButton = wrapper.find('button').element;
    expect(elButton).toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);

    await wrapper.setProps({ disabled: false });
    elButton = wrapper.find('button').element;
    expect(elButton).not.toHaveClass(buttonClassNames.disabled);
    expect(elButton).not.toHaveClass(buttonClassNames.primary);
    expect(elButton).toHaveClass(buttonClassNames.checked);
    wrapper.unmount();
  });

  test('Click event', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: () => 'Button',
      },
    });

    const warpButton = wrapper.find('button');
    await warpButton.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);

    await warpButton.trigger('click');
    await warpButton.trigger('click');
    await warpButton.trigger('click');
    await warpButton.trigger('click');
    await warpButton.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(6);
    wrapper.unmount();
  });
});
