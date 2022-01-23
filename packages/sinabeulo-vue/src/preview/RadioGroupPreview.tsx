import { defineComponent } from 'vue';
import { Radio, RadioGroup, RadioGroupItem } from '..';

export default defineComponent({
  components: { Radio, RadioGroup },
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      value: undefined as string | number | undefined,
      value2: undefined as string | number | undefined,
      items: [
        {
          value: 'item1',
          label: 'item1',
        },
        {
          value: 'item2',
          label: 'item2',
        },
        {
          value: 'item3',
          label: 'item3',
        },
        {
          value: 'item4',
          label: 'item4',
        },
      ] as RadioGroupItem[],
    };
  },
  methods: {
    handleChange(_?: Event, item?: RadioGroupItem) {
      this.value = item?.value;
    },
    handleCheck(_?: Event, selectedValue?: string | number) {
      this.value2 = selectedValue;
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
        <div style={{ gridRow: 1, gridColumn: 1, gridColumnEnd: 4 }}>
          <RadioGroup
            disabled={this.disabled}
            items={this.items}
            name="siradiogroup"
            selectedValue={this.value}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 1, gridColumnEnd: 4 }}>
          <RadioGroup
            disabled={this.disabled}
            items={this.items}
            name="siradiogroup"
            v-model:selectedValue={this.value}
          />
        </div>

        <div style={{ gridRow: 3, gridColumn: 1 }}>
          <Radio
            disabled={this.disabled}
            name="radiogroup"
            label="item1"
            value={'radio1'}
            checked={this.value2 === 'radio1'}
            onCheck={this.handleCheck}
          />
        </div>
        <div style={{ gridRow: 3, gridColumn: 2 }}>
          <Radio
            disabled={this.disabled}
            name="radiogroup"
            label="item2"
            value={'radio2'}
            checked={this.value2 === 'radio2'}
            onCheck={this.handleCheck}
          />
        </div>
        <div style={{ gridRow: 3, gridColumn: 3 }}>
          <Radio
            disabled={this.disabled}
            name="radiogroup"
            label="item3"
            value={'radio3'}
            checked={this.value2 === 'radio3'}
            onCheck={this.handleCheck}
          />
        </div>
        <div style={{ gridRow: 3, gridColumn: 4 }}>
          <Radio
            disabled={this.disabled}
            name="radiogroup"
            label="item4"
            value={'radio4'}
            checked={this.value2 === 'radio4'}
            onCheck={this.handleCheck}
          />
        </div>
      </div>
    );
  },
});
