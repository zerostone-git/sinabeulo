import { buttonClassNames } from '@sinabeulo/styles';
import { mount } from '@vue/test-utils';
import Button from '../Button';

describe('Button', () => {
  test('Render as text.', () => {
    let wrapper = mount(Button, {
      props: {
        primary: true,
      },
      slots: {
        default: 'Primary',
      },
    });
    expect(wrapper.text()).toBe('Primary');
    wrapper.unmount();

    wrapper = mount(Button, {
      slots: {
        default: 'Standard',
      },
    });
    expect(wrapper.text()).toBe('Standard');
    wrapper.unmount();
  });

  test('Primary style button.', () => {
    let wrapper = mount(Button, {
      props: {
        primary: true,
      },
      slots: {
        default: 'Primary',
      },
    });
    expect(wrapper.find('button').element).toHaveClass(
      buttonClassNames.primary
    );
    wrapper.unmount();

    wrapper = mount(Button, {
      slots: {
        default: 'Standard',
      },
    });
    expect(wrapper.find('button').element).not.toHaveClass(
      buttonClassNames.primary
    );
    wrapper.unmount();
  });

  test('Checked button.', () => {
    let wrapper = mount(Button, {
      props: {
        primary: true,
        checked: true,
      },
      slots: {
        default: 'Primary',
      },
    });
    expect(wrapper.find('button').element).toHaveClass(
      buttonClassNames.primary
    );
    expect(wrapper.find('button').element).toHaveClass(
      buttonClassNames.checked
    );
    wrapper.unmount();

    wrapper = mount(Button, {
      slots: {
        default: 'Standard',
      },
    });
    expect(wrapper.find('button').element).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(wrapper.find('button').element).not.toHaveClass(
      buttonClassNames.checked
    );
    wrapper.unmount();
  });

  test('Disabled button.', () => {
    let wrapper = mount(Button, {
      props: {
        primary: true,
        disabled: true,
      },
      slots: {
        default: 'Primary',
      },
    });
    expect(wrapper.find('button').element).toHaveClass(
      buttonClassNames.primary
    );
    expect(wrapper.find('button').element).toBeDisabled();
    wrapper.unmount();

    wrapper = mount(Button, {
      slots: {
        default: 'Standard',
      },
    });
    expect(wrapper.find('button').element).not.toHaveClass(
      buttonClassNames.primary
    );
    expect(wrapper.find('button').element).not.toBeDisabled();
    wrapper.unmount();
  });

  test('Click event', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Standard',
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);

    await button.trigger('click');
    await button.trigger('click');
    await button.trigger('click');
    await button.trigger('click');
    await button.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(6);
    wrapper.unmount();
  });
});
