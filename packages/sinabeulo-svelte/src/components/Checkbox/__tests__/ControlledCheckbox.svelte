<script lang="ts">
  import Checkbox from '../Checkbox.svelte';

  export let disabled = false;
  export let checked = false;
  export let indeterminate = false;

  function handleChange(e: CustomEvent<{ e?: Event; checked?: boolean }>) {
    checked = !!e.detail.checked;
    indeterminate = false;
  }
</script>

<Checkbox
  label="This is controlled checkbox"
  {disabled}
  {checked}
  {indeterminate}
  on:change={handleChange}
/>
