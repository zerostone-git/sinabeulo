<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {
    type CheckboxClassNames,
    classNamesForCheckbox,
  } from '@sinabeulo/styles';
  import { createClassName } from '@sinabeulo/utils';

  // eslint-disable-next-line no-undef, no-underscore-dangle
  if (!window.__SI_CHECKBOX_NO) {
    // eslint-disable-next-line no-undef, no-underscore-dangle
    window.__SI_CHECKBOX_NO = 1;
  }
  // eslint-disable-next-line no-undef, no-underscore-dangle, no-plusplus
  const inputId = `SiCheckbox-${window.__SI_CHECKBOX_NO++}`;
  const dispatch = createEventDispatcher();

  /**
   * CSS 클래스 이름입니다.
   */
  export let classNames = undefined as Partial<CheckboxClassNames> | undefined;
  /**
   * 비활성화되어 있는지 여부입니다.
   */
  export let disabled = false;
  /**
   * 표시할 문자열입니다.
   */
  export let label = '';
  /**
   * 선택 여부입니다.
   */
  export let checked = false;
  /**
   * 불확실한 상태로 표시할지 여부입니다.
   */
  export let indeterminate = false;

  $: cn = classNamesForCheckbox(classNames);

  function handleChange(e: Event) {
    if (disabled) {
      return;
    }
    checked = (e.target as HTMLInputElement).checked;
    indeterminate = false;
    dispatch('change', { origin: e, checked });
  }
</script>

<div
  class={createClassName(cn.root, {
    [cn.disabled]: !!disabled,
    [cn.checked]: !!checked && !indeterminate,
    [cn.indeterminate]: !!indeterminate,
  })}
>
  <input
    class={cn.input}
    type="checkbox"
    id={inputId}
    {disabled}
    {checked}
    on:change={handleChange}
  />
  <label class={cn.container} for={inputId}>
    {#if indeterminate}
      <span class={cn.icon}>&#xf0c8;</span>
    {:else}
      <span class={cn.icon}>&#xf00c;</span>
    {/if}
    <span class={cn.text}>{label}</span>
  </label>
</div>
