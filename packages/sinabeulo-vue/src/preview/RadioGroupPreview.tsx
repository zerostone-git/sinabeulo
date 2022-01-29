import { defineComponent, ref, toRefs } from 'vue';
import { Radio, RadioGroup, RadioGroupItem } from '..';

export default defineComponent({
  components: { Radio, RadioGroup },
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const { disabled } = toRefs(props);
    const value = ref(undefined as string | number | undefined);
    const value2 = ref(undefined as string | number | undefined);
    const items = ref([
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
    ] as RadioGroupItem[]);
    const handleChange = (_?: Event, item?: RadioGroupItem) => {
      value.value = item?.value;
    };
    const handleCheck = (_?: Event, selectedValue?: string | number) => {
      value2.value = selectedValue;
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
        <div style={{ gridRow: 1, gridColumn: 1, gridColumnEnd: 4 }}>
          <RadioGroup
            disabled={disabled.value}
            items={items.value}
            name="siradiogroup"
            selectedValue={value.value}
            onChange={handleChange}
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 1, gridColumnEnd: 4 }}>
          <RadioGroup
            disabled={disabled.value}
            items={items.value}
            name="siradiogroup"
            v-model:selectedValue={value.value}
          />
        </div>

        <div style={{ gridRow: 3, gridColumn: 1 }}>
          <Radio
            disabled={disabled.value}
            name="radiogroup"
            label="item1"
            value={'radio1'}
            checked={value2.value === 'radio1'}
            onCheck={handleCheck}
          />
        </div>
        <div style={{ gridRow: 3, gridColumn: 2 }}>
          <Radio
            disabled={disabled.value}
            name="radiogroup"
            label="item2"
            value={'radio2'}
            checked={value2.value === 'radio2'}
            onCheck={handleCheck}
          />
        </div>
        <div style={{ gridRow: 3, gridColumn: 3 }}>
          <Radio
            disabled={disabled.value}
            name="radiogroup"
            label="item3"
            value={'radio3'}
            checked={value2.value === 'radio3'}
            onCheck={handleCheck}
          />
        </div>
        <div style={{ gridRow: 3, gridColumn: 4 }}>
          <Radio
            disabled={disabled.value}
            name="radiogroup"
            label="item4"
            value={'radio4'}
            checked={value2.value === 'radio4'}
            onCheck={handleCheck}
          />
        </div>
      </div>
    );
  },
});
