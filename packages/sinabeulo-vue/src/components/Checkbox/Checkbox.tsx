import { computed, defineComponent, PropType, ref, toRefs } from 'vue';
import { CheckboxClassNames, classNamesForCheckbox } from '@sinabeulo/styles';
import { createClassName } from '@sinabeulo/utils';

let checkboxId = 1;

/**
 * 체크박스입니다.
 */
const Checkbox = defineComponent({
  name: 'SiCheckbox',
  props: {
    /**
     * 체크박스의 CSS 클래스 이름입니다.
     */
    classNames: {
      type: Object as PropType<Partial<CheckboxClassNames>>,
      required: false,
      default: undefined,
    },
    /**
     * 체크박스의 옆에 표시할 문자열입니다.
     */
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    /**
     * 체크박스가 비활성화되어 있는지 여부입니다.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    /**
     * 체크 여부입니다. 제어 컴포넌트로 사용하려면 이 속성의 값을 지정해야 하고, 그렇지 않으면 비제어 컴포넌트로 사용됩니다.
     */
    checked: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    /**
     * 제어 컴포넌트로 사용될 때 불확실한 상태로 표시할지 여부입니다.
     */
    indeterminate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    /**
     * 비제어 컴포넌트로 사용될 때 기본 체크 상태로 표시할지 여부입니다.
     */
    defaultChecked: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    /**
     * 비제어 컴포넌트로 사용될 때 기본으로 불확실한 상태로 표시할지 여부입니다.
     */
    defaultIndeterminate: {
      type: Boolean,
      required: false,
      default: undefined,
    },
  },
  emits: ['change', 'update:checked'],
  setup(props) {
    const { checked, indeterminate } = toRefs(props);
    const isControlled = props.checked !== undefined;
    const isCheckedIn = ref(props.defaultChecked);
    const isIndeterminateIn = ref(props.defaultIndeterminate);
    const isChecked = computed(() =>
      isControlled ? checked.value : isCheckedIn.value
    );
    const isIndeterminate = computed(() =>
      isControlled ? indeterminate.value : isIndeterminateIn.value
    );
    // eslint-disable-next-line no-plusplus
    const inputId = `checkbox-${checkboxId++}`;

    return {
      inputId,
      isControlled,
      isCheckedIn,
      isIndeterminateIn,
      isChecked,
      isIndeterminate,
    };
  },
  computed: {
    cn() {
      return classNamesForCheckbox(this.classNames);
    },
  },
  methods: {
    handleChange(e: Event) {
      if (this.disabled) {
        return;
      }
      if (this.isControlled) {
        this.$emit('change', e, (e.target as HTMLInputElement).checked);
        this.$emit('update:checked', (e.target as HTMLInputElement).checked);
      } else {
        this.isCheckedIn = !this.isChecked;
        this.isIndeterminateIn = false;
      }
    },
  },
  render() {
    return (
      <div
        class={createClassName(this.cn.root, {
          [this.cn.disabled]: !!this.disabled,
          [this.cn.checked]: !!this.isChecked && !this.isIndeterminate,
          [this.cn.indeterminate]: !!this.isIndeterminate,
        })}
      >
        <input
          ref="refInput"
          class={this.cn.input}
          type="checkbox"
          id={this.inputId}
          disabled={this.disabled}
          checked={this.isChecked}
          onChange={this.handleChange}
        />
        <label class={this.cn.container} for={this.inputId}>
          {this.isIndeterminate ? (
            <span class={this.cn.icon}>&#xf0c8;</span>
          ) : (
            <span class={this.cn.icon}>&#xf00c;</span>
          )}
          <span class={this.cn.text}>{this.label}</span>
        </label>
      </div>
    );
  },
});

export default Checkbox;
