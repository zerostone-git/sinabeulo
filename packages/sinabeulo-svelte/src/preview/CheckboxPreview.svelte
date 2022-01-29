<script lang="ts">
  import { Checkbox } from '..';

  export let disabled = false;

  let isChecked = false;
  let isIndeterminate = true;

  function handleChange(e: CustomEvent<{ e?: Event; checked?: boolean }>) {
    isChecked = !!e.detail.checked;
    isIndeterminate = false;
  }
</script>

<div>
  <div
    style="display: grid; grid-auto-columns: max-content; grid-auto-rows: minmax(28px, auto); gap: 10px; margin-bottom: 10px;"
  >
    <div style="grid-row: 1; grid-column: 1;">
      <Checkbox {disabled} label="Uncontrolled" />
    </div>
    <div style="grid-row: 1; grid-column: 2;">
      <Checkbox {disabled} label="Uncontrolled" checked />
    </div>
    <div style="grid-row: 1; grid-column: 3;">
      <Checkbox {disabled} label="Uncontrolled" indeterminate />
    </div>

    <div style="grid-row: 2; grid-column: 1;">
      <Checkbox {disabled} label="Controlled" bind:checked={isChecked} />
    </div>
    <div style="grid-row: 2; grid-column: 2;">
      <Checkbox
        {disabled}
        label="Controlled"
        checked={isChecked}
        on:change={handleChange}
      />
    </div>
    <div style="grid-row: 2; grid-column: 3;">
      <Checkbox
        {disabled}
        label="Controlled"
        checked={isChecked}
        indeterminate={isIndeterminate}
        on:change={handleChange}
      />
    </div>
  </div>
</div>
