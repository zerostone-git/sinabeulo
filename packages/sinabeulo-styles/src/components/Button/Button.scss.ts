type ButtonClassNames = {
  /**
   * 버튼의 최상위 요소입니다.
   */
  root: string;
  /**
   * 버튼의 최상위 요소가 일 순위일 때입니다.
   */
  primary: string;
  /**
   * 버튼의 최상위 요소가 선택되었을 때입니다.
   */
  checked: string;
  /**
   * 버튼의 최상위 요소가 비활성화일 때입니다.
   */
  disabled: string;
  /**
   * 버튼의 내용을 담는 요소입니다.
   */
  container: string;
  /**
   * 버튼의 아이콘을 표시하는 요소입니다.
   */
  icon: string;
  /**
   * 버튼의 본문을 표시하는 요소입니다.
   */
  text: string;
};

declare const buttonClassNames: ButtonClassNames;

export default buttonClassNames;
export type { ButtonClassNames };
