<script lang="ts">
  import { Radio, RadioGroup, type RadioGroupItem } from '..';

  export let disabled = false;

  let value = undefined as string | number | undefined;
  let value2 = undefined as string | number | undefined;
  const items = [
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
  ] as RadioGroupItem[];

  function handleChange(e: CustomEvent<{ e?: Event; item?: RadioGroupItem }>) {
    value = e.detail.item?.value;
  }
  function handleCheck(e: CustomEvent<{ e?: Event; value?: string | number }>) {
    value2 = e.detail.value;
  }
</script>

<div>
  <div
    style="display: grid; grid-auto-columns: max-content; grid-auto-rows: minmax(28px, auto); gap: 10px; margin-bottom: 10px;"
  >
    <div style="grid-row: 1; grid-column: 1; grid-column-end: 4;">
      <RadioGroup
        {disabled}
        {items}
        name="siradiogroup"
        selectedValue={value}
        on:change={handleChange}
      />
    </div>
    <div style="grid-row: 2; grid-column: 1; grid-column-end: 4;">
      <RadioGroup
        {disabled}
        {items}
        name="siradiogroup"
        bind:selectedValue={value}
      />
    </div>
    <div style="grid-row: 3; grid-column: 1;">
      <Radio
        {disabled}
        name="radiogroup"
        label="item1"
        value="radio1"
        checked={value2 === 'radio1'}
        on:check={handleCheck}
      />
    </div>
    <div style="grid-row: 3; grid-column: 2;">
      <Radio
        {disabled}
        name="radiogroup"
        label="item2"
        value="radio2"
        checked={value2 === 'radio2'}
        on:check={handleCheck}
      />
    </div>
    <div style="grid-row: 3; grid-column: 3;">
      <Radio
        {disabled}
        name="radiogroup"
        label="item3"
        value="radio3"
        checked={value2 === 'radio3'}
        on:check={handleCheck}
      />
    </div>
    <div style="grid-row: 3; grid-column: 4;">
      <Radio
        {disabled}
        name="radiogroup"
        label="item4"
        value="radio4"
        checked={value2 === 'radio4'}
        on:check={handleCheck}
      />
    </div>
  </div>
</div>
