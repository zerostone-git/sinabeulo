type TextFieldClassNames = {
  // 텍스트 필드의 최상위 요소입니다.
  root: string;
  // 텍스트 필드의 최상위 요소가 비활성화일 때입니다.
  disabled: string;
  // 텍스트 필드의 최상위 요소가 아이콘을 포함할 때입니다.
  hasIcon: string;
  // 텍스트 필드의 내용을 담는 요소입니다.
  container: string;
  // 텍스트 필드의 입력을 표시하는 요소입니다.
  input: string;
  // 텍스트 필드의 아이콘을 표시하는 요소입니다.
  icon: string;
  // 텍스트 필드의 버튼을 표시하는 요소입니다.
  button: string;
};

declare const textFieldClassNames: TextFieldClassNames;

export default textFieldClassNames;
export type { TextFieldClassNames };
