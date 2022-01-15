<script lang="ts">
  import Button from '../Button.svelte';

  export let disabled = undefined as boolean | undefined;
  export let primary = undefined as boolean | undefined;
  export let checked = undefined as boolean | undefined;
  export let slotDefault = '' as string | undefined;
  export let slotIcon = '' as string | undefined;
</script>

<Button {disabled} {primary} {checked}>
  <span slot="icon">{slotIcon}</span>
  {slotDefault}
</Button>
