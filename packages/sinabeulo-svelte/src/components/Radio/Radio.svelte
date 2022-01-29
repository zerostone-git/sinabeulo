<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { type RadioClassNames, classNamesForRadio } from '@sinabeulo/styles';
  import { createClassName } from '@sinabeulo/utils';

  // eslint-disable-next-line no-undef, no-underscore-dangle
  if (!window.__SI_RADIO_NO) {
    // eslint-disable-next-line no-undef, no-underscore-dangle
    window.__SI_RADIO_NO = 1;
  }
  // eslint-disable-next-line no-undef, no-underscore-dangle, no-plusplus
  const inputId = `SiRadio-${window.__SI_RADIO_NO++}`;
  const dispatch = createEventDispatcher();

  /**
   * CSS 클래스 이름입니다.
   */
  export let classNames = undefined as Partial<RadioClassNames> | undefined;
  /**
   * 비활성화되어 있는지 여부입니다.
   */
  export let disabled = false;
  /**
   * 옆에 표시할 문자열입니다.
   */
  export let label = '';
  /**
   * 속하는 그룹 이름입니다.
   */
  export let name = undefined as string | undefined;
  /**
   * 값입니다.
   */
  export let value = undefined as string | number | undefined;
  /**
   * 선택 여부입니다.
   */
  export let checked = false;

  $: cn = classNamesForRadio(classNames);

  function handleChange(e: Event) {
    if (disabled) {
      return;
    }
    dispatch('check', { origin: e, value });
  }
</script>

<div
  class={createClassName(cn.root, {
    [cn.disabled]: !!disabled,
    [cn.checked]: !!checked,
  })}
>
  <input
    class={cn.input}
    type="radio"
    id={inputId}
    {name}
    {value}
    {disabled}
    {checked}
    on:change={handleChange}
  />
  <label class={cn.container} for={inputId}>
    <span class={cn.icon}>&#xf111;</span>
    <span class={cn.text}>{label}</span>
  </label>
</div>
