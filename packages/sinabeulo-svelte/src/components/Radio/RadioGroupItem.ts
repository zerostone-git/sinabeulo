import type { RadioClassNames } from '@sinabeulo/styles';

/**
 * 라디오 그룹에 표시할 아이템의 속성입니다.
 */
export type RadioGroupItem = {
  /**
   * 라디오의 CSS 클래스 이름입니다.
   */
  classNames?: RadioClassNames;
  /**
   * 라디오가 비활성화되어 있는지 여부입니다.
   */
  disabled?: boolean;
  /**
   * 라디오의 옆에 표시할 문자열입니다.
   */
  label?: string;
  /**
   * 라디오의 값입니다.
   */
  value?: string | number;
};
