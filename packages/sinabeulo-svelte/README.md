# @sinabeulo/svelte

## Components

### Button

#### Props

##### `classNames?: Partial<`[`ButtonClassNames`](../sinabeulo-styles/README.md#buttonclassnames)`>`

CSS 클래스 이름입니다.

##### `disabled?: boolean = false`

비활성화되어 있는지 여부입니다.

##### `primary?: boolean = false`

일 순위인 버튼인지 여부입니다.

##### `checked?: boolean = false`

체크되어 있는지 여부입니다.

#### Events

##### `click`

클릭될 때 발생하는 이벤트입니다.

```typescript
(event: CustomEvent<{ origin: MouseEvent }>) => void;
```

#### Slots

##### `default`

표시할 내용입니다.

##### `icon`

표시할 아이콘입니다.

### Checkbox

#### Props

##### `classNames?: Partial<`[`CheckboxClassNames`](../sinabeulo-styles/README.md#checkboxclassnames)`>`

CSS 클래스 이름입니다.

##### `disabled?: boolean = false`

비활성화되어 있는지 여부입니다.

##### `label?: string = ''`

표시할 문자열입니다.

##### `checked?: boolean = false`

선택 여부입니다.

##### `indeterminate?: boolean = false`

불확실한 상태로 표시할지 여부입니다.

#### Events

##### `change`

선택 여부 값이 변경되었을 때 발생하는 이벤트입니다.

```typescript
(event: CustomEvent<{ origin: Event, checked: boolean }>) => void;
```

### Radio

#### Props

##### `classNames?: Partial<`[`RadioClassNames`](../sinabeulo-styles/README.md#radioclassnames)`>`

CSS 클래스 이름입니다.

##### `disabled?: boolean = false`

비활성화되어 있는지 여부입니다.

##### `label?: string = ''`

옆에 표시할 문자열입니다.

##### `name?: string`

속하는 그룹 이름입니다.

##### `value?: string | number`

값입니다.

##### `checked?: boolean = false`

선택 여부입니다.

### Events

##### `check`

선택할 때 발생하는 이벤트입니다.

```typescript
(event: CustomEvent<{ origin: Event, value: string | number | undefined }>) => void;
```

### RadioGroup

#### Props

##### `classNames?: Partial<`[`RadioGroupClassNames`](../sinabeulo-styles/README.md#radiogroupclassnames)`>`

CSS 클래스 이름입니다.

##### `disabled?: boolean = false`

비활성화되어 있는지 여부입니다.

##### `name: string`

이름입니다.

##### `items: `[`RadioGroupItem`](#radiogroupitem)`[]`

표시할 아이템 목록입니다.

##### `selectedValue?: string | number`

선택 값입니다.

### Events

##### `change`

선택 값이 변경되었을 때의 발생하는 이벤트입니다.

```typescript
(event: CustomEvent<{ origin: Event, item: RadioGroupItem }>) => void;
```

## Types

### RadioGroupItem

##### `classNames?: Partial<`[`RadioClassNames`](../sinabeulo-styles/README.md#radioclassnames)`>`

라디오의 CSS 클래스 이름입니다.

##### `disabled?: boolean`

라디오가 비활성화되어 있는지 여부입니다.

##### `label?: string`

라디오의 옆에 표시할 문자열입니다.

##### `value?: string | number`

라디오의 값입니다.
