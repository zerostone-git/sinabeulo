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
     * CSS 클래스 이름입니다.
     */
    classNames: {
      type: Object as PropType<Partial<CheckboxClassNames>>,
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
     * 표시할 문자열입니다.
     */
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    /**
     * 선택 여부입니다. 제어 컴포넌트로 사용하려면 이 속성의 값을 지정해야 하고, 그렇지 않으면 비제어 컴포넌트로 사용됩니다.
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
  setup(props, { emit }) {
    const {
      classNames,
      disabled,
      label,
      checked,
      indeterminate,
      defaultChecked,
      defaultIndeterminate,
    } = toRefs(props);
    const isControlled = checked.value !== undefined;
    const isCheckedIn = ref(defaultChecked.value);
    const isIndeterminateIn = ref(defaultIndeterminate.value);
    const isChecked = computed(
      () => (isControlled ? checked.value : isCheckedIn.value) ?? false
    );
    const isIndeterminate = computed(
      () =>
        (isControlled ? indeterminate.value : isIndeterminateIn.value) ?? false
    );
    const handleChange = (e: Event) => {
      if (disabled.value) {
        return;
      }
      if (isControlled) {
        emit('change', e, (e.target as HTMLInputElement).checked);
        emit('update:checked', (e.target as HTMLInputElement).checked);
      } else {
        isCheckedIn.value = !isChecked.value;
        isIndeterminateIn.value = false;
      }
    };

    // eslint-disable-next-line no-plusplus
    const inputId = `SiCheckbox-${checkboxId++}`;
    const cn = classNamesForCheckbox(classNames.value);
    return () => (
      <div
        class={createClassName(cn.root, {
          [cn.disabled]: disabled.value,
          [cn.checked]: isChecked.value && !isIndeterminate.value,
          [cn.indeterminate]: isIndeterminate.value,
        })}
      >
        <input
          ref="refInput"
          class={cn.input}
          type="checkbox"
          id={inputId}
          disabled={disabled.value}
          checked={isChecked.value}
          onChange={handleChange}
        />
        <label class={cn.container} for={inputId}>
          {isIndeterminate.value ? (
            <span class={cn.icon}>&#xf0c8;</span>
          ) : (
            <span class={cn.icon}>&#xf00c;</span>
          )}
          <span class={cn.text}>{label.value}</span>
        </label>
      </div>
    );
  },
});

export default Checkbox;
