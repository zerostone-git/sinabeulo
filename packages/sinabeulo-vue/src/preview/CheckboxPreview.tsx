import { defineComponent } from 'vue';
import { Checkbox } from '..';

export default defineComponent({
  components: { Checkbox },
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isChecked: false,
      isIndeterminate: true,
    };
  },
  methods: {
    handleChange(_?: Event, checked?: boolean) {
      this.isChecked = !!checked;
      this.isIndeterminate = false;
    },
  },
  render() {
    return (
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
          <Checkbox disabled={this.disabled} label="Uncontrolled" />
        </div>
        <div style={{ gridRow: 1, gridColumn: 2 }}>
          <Checkbox
            disabled={this.disabled}
            defaultChecked
            label="Uncontrolled"
          />
        </div>
        <div style={{ gridRow: 1, gridColumn: 3 }}>
          <Checkbox
            disabled={this.disabled}
            label="Uncontrolled"
            defaultIndeterminate
          />
        </div>

        <div style={{ gridRow: 2, gridColumn: 1 }}>
          <Checkbox
            disabled={this.disabled}
            label="Controlled"
            v-model:checked={this.isChecked}
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 2 }}>
          <Checkbox
            disabled={this.disabled}
            label="Controlled"
            checked={this.isChecked}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 3 }}>
          <Checkbox
            disabled={this.disabled}
            label="Controlled"
            checked={this.isChecked}
            indeterminate={this.isIndeterminate}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  },
});
