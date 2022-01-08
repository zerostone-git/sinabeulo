type RadioClassNames = {
  // 라디오의 최상위 요소입니다.
  root: string;
  // 라디오의 최상위 요소가 선택되었을 때입니다.
  checked: string;
  // 라디오의 최상위 요소가 비활성화일 때입니다.
  disabled: string;
  // 라디오의 실제 요소입니다.
  input: string;
  // 라디오의 내용을 담는 요소입니다.
  container: string;
  // 라디오의 아이콘을 표시하는 요소입니다.
  icon: string;
  // 라디오의 본문을 표시하는 요소입니다.
  text: string;
};

declare const radioClassNames: RadioClassNames;

export default radioClassNames;
export type { RadioClassNames };
