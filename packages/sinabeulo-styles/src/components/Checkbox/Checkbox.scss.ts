type CheckboxClassNames = {
  // 체크박스의 최상위 요소입니다.
  root: string;
  // 체크박스의 최상위 요소가 선택되었을 때입니다.
  checked: string;
  // 체크박스의 최상위 요소가 불확정한 선택일 때입니다.
  indeterminate: string;
  // 체크박스의 최상위 요소가 비활성화일 때입니다.
  disabled: string;
  // 체크박스의 실제 요소입니다.
  input: string;
  // 체크박스의 내용을 담는 요소입니다.
  container: string;
  // 체크박스의 아이콘을 표시하는 요소입니다.
  icon: string;
  // 체크박스의 본문을 표시하는 요소입니다.
  text: string;
};

declare const checkboxClassNames: CheckboxClassNames;

export default checkboxClassNames;
export type { CheckboxClassNames };
