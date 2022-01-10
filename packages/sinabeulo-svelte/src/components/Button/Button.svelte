<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ButtonClassNames, classNamesForButton } from '@sinabeulo/styles';
  import { createClassName } from '@sinabeulo/utils';

  export let classNames = undefined as ButtonClassNames | undefined;
  export let disabled = false;
  export let primary = false;
  export let checked = false;

  $: cn = classNamesForButton(classNames);

  const dispatch = createEventDispatcher();
  function handleClick(e: MouseEvent) {
    if (disabled) {
      return;
    }
    dispatch('click', e);
  }
</script>

<button
  type="button"
  class={createClassName(cn.root, {
    [cn.disabled]: disabled,
    [cn.primary]: primary,
    [cn.checked]: checked,
  })}
  {disabled}
  on:click={handleClick}
>
  <span class={cn.container}>
    {#if $$slots.icon}
      <span class={cn.icon}><slot name="icon" /></span>
    {/if}
    {#if $$slots.default}
      <span class={cn.text}><slot /></span>
    {/if}
  </span>
</button>
