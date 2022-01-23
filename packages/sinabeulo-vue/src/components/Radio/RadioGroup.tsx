import { defineComponent, PropType } from 'vue';
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
  classNames?: RadioClassNames;
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
     * 라디오 그룹의 CSS 클래스 이름입니다.
     */
    classNames: {
      type: Object as PropType<Partial<RadioGroupClassNames>>,
      required: false,
      default: undefined,
    },
    /**
     * 라디오 그룹이 비활성화되어 있는지 여부입니다.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * 라디오 그룹 이름입니다.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * 라디오 그룹에 표시할 아이템 목록입니다.
     */
    items: {
      type: Array as PropType<RadioGroupItem[]>,
      required: true,
    },
    /**
     * 라디오 그룹의 선택 값입니다.
     */
    selectedValue: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: undefined,
    },
  },
  emits: ['change', 'update:selectedValue'],
  computed: {
    cn() {
      return classNamesForRadioGroup(this.classNames);
    },
  },
  methods: {
    handleCheck(e: Event, value?: string | number) {
      if (this.disabled) {
        return;
      }
      const item = this.items.find((i) => i.value === value);
      this.$emit('change', e, item);
      this.$emit('update:selectedValue', item?.value);
    },
  },
  render() {
    return (
      <div class={this.cn.root}>
        {this.items.map((item) => (
          <Radio
            key={item.value}
            classNames={item.classNames}
            disabled={this.disabled || item.disabled}
            label={item.label}
            name={this.name}
            value={item.value}
            checked={item.value === this.selectedValue}
            onCheck={this.handleCheck}
          />
        ))}
      </div>
    );
  },
});

export default RadioGroup;
export type { RadioGroupItem };
