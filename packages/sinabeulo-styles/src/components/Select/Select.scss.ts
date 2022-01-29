type SelectClassNames = {
  // 선택의 최상위 요소입니다.
  root: string;
  // 선택의 최상위 요소가 비활성화일 때입니다.
  disabled: string;
  // 선택의 내용을 담는 요소입니다.
  container: string;
  // 선택의 아이콘을 표시하는 요소입니다.
  icon: string;
  // 선택의 본문을 표시하는 요소입니다.
  text: string;
};

declare const selectClassNames: SelectClassNames;

export default selectClassNames;
export type { SelectClassNames };
