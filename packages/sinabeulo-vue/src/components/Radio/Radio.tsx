import { defineComponent, PropType } from 'vue';
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
  setup() {
    // eslint-disable-next-line no-plusplus
    const inputId = `SiRadio-${radioId++}`;

    return {
      inputId,
    };
  },
  computed: {
    cn() {
      return classNamesForRadio(this.classNames);
    },
  },
  methods: {
    handleChange(e: Event) {
      if (this.disabled) {
        return;
      }
      this.$emit('check', e, this.value);
    },
  },
  render() {
    return (
      <div
        class={createClassName(this.cn.root, {
          [this.cn.disabled]: !!this.disabled,
          [this.cn.checked]: !!this.checked,
        })}
      >
        <input
          ref="refInput"
          class={this.cn.input}
          type="radio"
          id={this.inputId}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
          checked={this.checked}
          onChange={this.handleChange}
        />
        <label class={this.cn.container} for={this.inputId}>
          <span class={this.cn.icon}>&#xf111;</span>
          <span class={this.cn.text}>{this.label}</span>
        </label>
      </div>
    );
  },
});

export default Radio;
