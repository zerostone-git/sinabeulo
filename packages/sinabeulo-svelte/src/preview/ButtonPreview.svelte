<script lang="ts">
  import { Button } from '..';

  export let disabled = false;
</script>

<div
  style="display: grid; grid-auto-columns: max-content; grid-auto-rows: minmax(40px, auto); gap: 10px; margin-bottom: 10px;"
>
  <div style="grid-row: 1; grid-column: 1;">
    <Button {disabled}>Standard</Button>
  </div>
  <div style="grid-row: 1; grid-column: 2;">
    <Button {disabled}><span slot="icon">&#128513;</span>Standard</Button>
  </div>
  <div style="grid-row: 1; grid-column: 3;">
    <Button {disabled}><span slot="icon">&#128513;</span></Button>
  </div>

  <div style="grid-row: 2; grid-column: 1;">
    <Button {disabled} primary>Primary</Button>
  </div>
  <div style="grid-row: 2; grid-column: 2;">
    <Button {disabled} primary><span slot="icon">&#128513;</span>Primary</Button
    >
  </div>
  <div style="grid-row: 2; grid-column: 3;">
    <Button {disabled} primary><span slot="icon">&#128513;</span></Button>
  </div>

  <div style="grid-row: 3; grid-column: 1;">
    <Button {disabled} checked>Checked</Button>
  </div>
  <div style="grid-row: 3; grid-column: 2;">
    <Button {disabled} checked><span slot="icon">&#128513;</span>Checked</Button
    >
  </div>
  <div style="grid-row: 3; grid-column: 3;">
    <Button {disabled} checked><span slot="icon">&#128513;</span></Button>
  </div>
</div>
