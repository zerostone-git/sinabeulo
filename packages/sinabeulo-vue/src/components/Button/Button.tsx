import { defineComponent, PropType } from 'vue';
import { ButtonClassNames, classNamesForButton } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';

/**
 * 버튼의 속성입니다.
 */
type ButtonProps = {
  /**
   * 버튼의 CSS 클래스 이름입니다.
   */
  classNames?: ButtonClassNames;
  /**
   * 버튼이 체크되어 있는지 여부입니다.
   */
  checked?: boolean;
  /**
   * 버튼이 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 강조할 버튼인지 여부입니다.
   */
  primary?: boolean;
};

/**
 * 버튼입니다.
 */
const Button = defineComponent({
  name: 'Button',
  props: {
    classNames: {
      type: Object as PropType<Partial<ButtonClassNames>>,
      required: false,
      default: undefined,
    },
    checked: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    primary: {
      type: Boolean,
      required: false,
    },
  },
  emits: ['click'],
  computed: {
    cn() {
      return classNamesForButton(this.classNames);
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (this.disabled) {
        return;
      }
      this.$emit('click', event);
    },
  },
  render() {
    return (
      <button
        type="button"
        ref="refButton"
        class={createClassName(this.cn.root, {
          [this.cn.checked]: this.checked,
          [this.cn.primary]: this.primary,
        })}
        disabled={this.disabled}
        onClick={(event) => this.handleClick(event)}
      >
        <span class={this.cn.container}>{this.$slots.default?.()}</span>
      </button>
    );
  },
});

export default Button;
export type { ButtonProps };
