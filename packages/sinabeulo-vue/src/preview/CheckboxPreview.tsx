import { defineComponent, ref, toRefs } from 'vue';
import { Checkbox } from '..';

export default defineComponent({
  components: { Checkbox },
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const { disabled } = toRefs(props);
    const isChecked = ref(false);
    const isIndeterminate = ref(true);
    const handleChange = (_?: Event, checked?: boolean) => {
      isChecked.value = !!checked;
      isIndeterminate.value = false;
    };

    return () => (
      <div
        style={{
          display: 'grid',
          gridAutoColumns: 'max-content',
          gridAutoRows: 'minmax(28px, auto)',
          gap: '10px',
          marginBottom: '10px',
        }}
      >
        <div style={{ gridRow: 1, gridColumn: 1 }}>
          <Checkbox disabled={disabled.value} label="Uncontrolled" />
        </div>
        <div style={{ gridRow: 1, gridColumn: 2 }}>
          <Checkbox
            disabled={disabled.value}
            defaultChecked
            label="Uncontrolled"
          />
        </div>
        <div style={{ gridRow: 1, gridColumn: 3 }}>
          <Checkbox
            disabled={disabled.value}
            label="Uncontrolled"
            defaultIndeterminate
          />
        </div>

        <div style={{ gridRow: 2, gridColumn: 1 }}>
          <Checkbox
            disabled={disabled.value}
            label="Controlled"
            v-model:checked={isChecked.value}
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 2 }}>
          <Checkbox
            disabled={disabled.value}
            label="Controlled"
            checked={isChecked.value}
            onChange={handleChange}
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 3 }}>
          <Checkbox
            disabled={disabled.value}
            label="Controlled"
            checked={isChecked.value}
            indeterminate={isIndeterminate.value}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  },
});
