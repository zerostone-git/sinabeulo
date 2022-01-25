import { defineComponent, PropType, toRefs } from 'vue';
import { RadioClassNames, classNamesForRadio } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';

let radioId = 1;

/**
 * 라디오입니다.
 */
const Radio = defineComponent({
  name: 'SiRadio',
  props: {
    /**
     * 라디오의 CSS 클래스 이름입니다.
     */
    classNames: {
      type: Object as PropType<Partial<RadioClassNames>>,
      required: false,
      default: undefined,
    },
    /**
     * 라디오가 비활성화되어 있는지 여부입니다.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * 라디오의 옆에 표시할 문자열입니다.
     */
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    /**
     * 라디오가 속하는 그룹 이름입니다.
     */
    name: {
      type: String,
      required: false,
      default: undefined,
    },
    /**
     * 라디오의 값입니다.
     */
    value: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: undefined,
    },
    /**
     * 선택 여부입니다.
     */
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['check'],
  setup(props, { emit }) {
    const { classNames, disabled, label, name, value, checked } = toRefs(props);
    const handleChange = (e: Event) => {
      if (disabled.value) {
        return;
      }
      emit('check', e, value.value);
    };

    // eslint-disable-next-line no-plusplus
    const inputId = `SiRadio-${radioId++}`;
    const cn = classNamesForRadio(classNames.value);
    return () => (
      <div
        class={createClassName(cn.root, {
          [cn.disabled]: !!disabled.value,
          [cn.checked]: !!checked.value,
        })}
      >
        <input
          ref="refInput"
          class={cn.input}
          type="radio"
          id={inputId}
          name={name.value}
          value={value.value}
          disabled={disabled.value}
          checked={checked.value}
          onChange={handleChange}
        />
        <label class={cn.container} for={inputId}>
          <span class={cn.icon}>&#xf111;</span>
          <span class={cn.text}>{label.value}</span>
        </label>
      </div>
    );
  },
});

export default Radio;
