import { defineComponent, PropType, toRefs } from 'vue';
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
     * 버튼이 일 순위인 버튼인지 여부입니다.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * 버튼이 비활성화되어 있는지 여부입니다.
     */
    checked: {
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
  setup(props, { emit, slots }) {
    const { classNames, disabled, checked, primary } = toRefs(props);
    const handleClick = (event: MouseEvent) => {
      if (disabled.value) {
        return;
      }
      emit('click', event);
    };

    const cn = classNamesForButton(classNames.value);
    return () => (
      <button
        type="button"
        ref="refButton"
        class={createClassName(cn.root, {
          [cn.disabled]: disabled.value,
          [cn.primary]: primary.value,
          [cn.checked]: checked.value,
        })}
        disabled={disabled.value}
        onClick={handleClick}
      >
        <span class={cn.container}>
          {slots.icon && <span class={cn.icon}>{slots.icon?.()}</span>}
          {slots.default && <span class={cn.text}>{slots.default?.()}</span>}
        </span>
      </button>
    );
  },
});

export default Button;
