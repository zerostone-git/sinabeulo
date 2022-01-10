<script lang="ts">
  import { ButtonClassNames } from '@sinabeulo/styles';
  import Button from '../Button.svelte';

  export let classNames = undefined as ButtonClassNames | undefined;
  export let disabled = undefined as boolean | undefined;
  export let primary = undefined as boolean | undefined;
  export let checked = undefined as boolean | undefined;
  export let slotDefault = '' as string | undefined;
  export let slotIcon = '' as string | undefined;
</script>

<Button {classNames} {disabled} {primary} {checked}>
  <span slot="icon">{slotIcon}</span>
  {slotDefault}
</Button>
