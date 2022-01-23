<script lang="ts">
  import { Checkbox } from '..';
  import ButtonPreview from './ButtonPreview.svelte';
  import CheckboxPreview from './CheckboxPreview.svelte';
  import RadioGroupPreview from './RadioGroupPreview.svelte';

  let disabled = false;
</script>

<Checkbox label="Disabled" bind:checked={disabled} />
<hr />
<ButtonPreview {disabled} />
<CheckboxPreview {disabled} />
<RadioGroupPreview {disabled} />
