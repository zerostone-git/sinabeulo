<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {
    type ButtonClassNames,
    classNamesForButton,
  } from '@sinabeulo/styles';
  import { createClassName } from '@sinabeulo/utils';

  /**
   * CSS 클래스 이름입니다.
   */
  export let classNames = undefined as Partial<ButtonClassNames> | undefined;
  /**
   * 비활성화되어 있는지 여부입니다.
   */
  export let disabled = false;
  /**
   * 일 순위인 버튼인지 여부입니다.
   */
  export let primary = false;
  /**
   * 체크되어 있는지 여부입니다.
   */
  export let checked = false;

  $: cn = classNamesForButton(classNames);

  const dispatch = createEventDispatcher();
  function handleClick(e: MouseEvent) {
    if (disabled) {
      return;
    }
    dispatch('click', { origin: e });
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
