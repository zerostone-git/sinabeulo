import { defineComponent, PropType, toRefs } from 'vue';
import {
  RadioClassNames,
  RadioGroupClassNames,
  classNamesForRadioGroup,
} from '@sinabeulo/styles';
import Radio from './Radio';

/**
 * 라디오 그룹에 표시할 아이템의 속성입니다.
 */
type RadioGroupItem = {
  /**
   * 라디오의 CSS 클래스 이름입니다.
   */
  classNames?: Partial<RadioClassNames>;
  /**
   * 라디오가 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 라디오의 옆에 표시할 문자열입니다.
   */
  label?: string;
  /**
   * 라디오의 값입니다.
   */
  value?: string | number;
};

/**
 * 라디오입니다.
 */
const RadioGroup = defineComponent({
  name: 'SiRadioGroup',
  components: {
    Radio,
  },
  props: {
    /**
     * CSS 클래스 이름입니다.
     */
    classNames: {
      type: Object as PropType<Partial<RadioGroupClassNames>>,
      required: false,
      default: undefined,
    },
    /**
     * 비활성화되어 있는지 여부입니다.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * 이름입니다.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * 표시할 아이템 목록입니다.
     */
    items: {
      type: Array as PropType<RadioGroupItem[]>,
      required: true,
    },
    /**
     * 선택 값입니다.
     */
    selectedValue: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: undefined,
    },
  },
  emits: ['change', 'update:selectedValue'],
  setup(props, { emit }) {
    const { classNames, disabled, name, items, selectedValue } = toRefs(props);
    const handleCheck = (e: Event, value?: string | number) => {
      if (disabled.value) {
        return;
      }
      const item = items.value.find((i) => i.value === value);
      emit('change', e, item);
      emit('update:selectedValue', item?.value);
    };

    const cn = classNamesForRadioGroup(classNames.value);
    return () => (
      <div class={cn.root}>
        {items &&
          items.value.map((item) => (
            <Radio
              key={item.value}
              classNames={item.classNames}
              disabled={disabled.value || item.disabled}
              label={item.label}
              name={name.value}
              value={item.value}
              checked={item.value === selectedValue.value}
              onCheck={handleCheck}
            />
          ))}
      </div>
    );
  },
});

export default RadioGroup;
export type { RadioGroupItem };
