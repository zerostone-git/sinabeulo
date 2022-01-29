<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {
    classNamesForRadioGroup,
    type RadioGroupClassNames,
  } from '@sinabeulo/styles';
  import Radio from './Radio.svelte';
  import type { RadioGroupItem } from './RadioGroupItem';

  const dispatch = createEventDispatcher();

  /**
   * CSS 클래스 이름입니다.
   */
  export let classNames = undefined as
    | Partial<RadioGroupClassNames>
    | undefined;
  /**
   * 비활성화되어 있는지 여부입니다.
   */
  export let disabled = false;
  /**
   * 이름입니다.
   */
  export let name: string;
  /**
   * 표시할 아이템 목록입니다.
   */
  export let items: RadioGroupItem[];
  /**
   * 선택 값입니다.
   */
  export let selectedValue = undefined as string | number | undefined;

  $: cn = classNamesForRadioGroup(classNames);

  function handleCheck(e: CustomEvent<{ e?: Event; value?: string | number }>) {
    if (disabled) {
      return;
    }
    const item = items.find((i) => i.value === e.detail.value);
    selectedValue = item?.value;
    dispatch('change', { origin: e, item });
  }
</script>

<div class={cn.root}>
  {#each items as item}
    <Radio
      classNames={item.classNames}
      disabled={disabled || item.disabled}
      label={item.label}
      {name}
      value={item.value}
      checked={item.value === selectedValue}
      on:check={handleCheck}
    />
  {/each}
</div>
