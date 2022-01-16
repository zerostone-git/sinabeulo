import { defineComponent, PropType } from 'vue';
import { ButtonClassNames, classNamesForButton } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';

/**
 * 버튼입니다.
 */
const Button = defineComponent({
  name: 'SiButton',
  props: {
    /**
     * 버튼의 CSS 클래스 이름입니다.
     */
    classNames: {
      type: Object as PropType<Partial<ButtonClassNames>>,
      required: false,
      default: undefined,
    },
    /**
     * 버튼이 비활성화되어 있는지 여부입니다.
     */
    checked: {
      type: Boolean,
      required: false,
    },
    /**
     * 버튼이 일 순위인 버튼인지 여부입니다.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * 버튼이 체크되어 있는지 여부입니다.
     */
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
          [this.cn.disabled]: this.disabled,
          [this.cn.primary]: this.primary,
          [this.cn.checked]: this.checked,
        })}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <span class={this.cn.container}>
          {this.$slots.icon && (
            <span class={this.cn.icon}>{this.$slots.icon?.()}</span>
          )}
          {this.$slots.default && (
            <span class={this.cn.text}>{this.$slots.default?.()}</span>
          )}
        </span>
      </button>
    );
  },
});

export default Button;
