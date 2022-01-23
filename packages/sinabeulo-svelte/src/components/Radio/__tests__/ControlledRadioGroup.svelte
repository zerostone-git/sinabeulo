<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import RadioGroup from '../RadioGroup.svelte';
  import type { RadioGroupItem } from '../RadioGroupItem';

  const dispatch = createEventDispatcher();

  export let disabled = undefined as boolean | undefined;
  export let items = [] as RadioGroupItem[];
  let selectedValue = undefined as string | number | undefined;

  function handleChange(e: CustomEvent) {
    dispatch('change', e.detail);
  }
</script>

<RadioGroup
  {disabled}
  name="radiogroup"
  {items}
  bind:selectedValue
  on:change={handleChange}
/>
