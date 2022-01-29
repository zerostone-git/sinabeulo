# @sinabeulo/react

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

##### `children?: React.ReactNode`

표시할 내용입니다.

##### `icon?: React.ReactNode`

표시할 아이콘입니다.

##### `onClick?: React.MouseEventHandler<HTMLButtonElement>`

클릭될 때의 콜백입니다.

### Checkbox

#### Props

##### `classNames?: Partial<`[`CheckboxClassNames`](../sinabeulo-styles/README.md#checkboxclassnames)`>`

CSS 클래스 이름입니다.

##### `disabled?: boolean = false`

비활성화되어 있는지 여부입니다.

##### `label?: string`

표시할 문자열입니다.

##### `checked?: boolean`

선택 여부입니다. 제어 컴포넌트로 사용하려면 이 속성의 값을 지정해야 하고, 그렇지 않으면 비제어 컴포넌트로 사용됩니다.

##### `indeterminate?: boolean`

제어 컴포넌트로 사용될 때 불확실한 상태로 표시할지 여부입니다.

##### `defaultChecked?: boolean`

비제어 컴포넌트로 사용될 때 기본 체크 상태로 표시할지 여부입니다.

##### `defaultIndeterminate?: boolean`

비제어 컴포넌트로 사용될 때 기본으로 불확실한 상태로 표시할지 여부입니다.

##### `onChange?: (e?: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void`

제어 컴포넌트로 사용될 때 선택 여부 값이 변경되었을 때의 콜백입니다.

### Radio

#### Props

##### `classNames?: Partial<`[`RadioClassNames`](../sinabeulo-styles/README.md#radioclassnames)`>`

CSS 클래스 이름입니다.

##### `disabled?: boolean = false`

비활성화되어 있는지 여부입니다.

##### `label?: string`

옆에 표시할 문자열입니다.

##### `name?: string`

속하는 그룹 이름입니다.

##### `value?: string | number`

값입니다.

##### `checked?: boolean = false`

선택 여부입니다.

##### `onCheck: (e?: React.ChangeEvent<HTMLInputElement>, value?: string | number) => void`

선택할 때의 콜백입니다.

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

##### `onChange: (e?: React.ChangeEvent<HTMLInputElement>, item?: RadioGroupItem) => void`

선택 값이 변경되었을 때의 콜백입니다.

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
