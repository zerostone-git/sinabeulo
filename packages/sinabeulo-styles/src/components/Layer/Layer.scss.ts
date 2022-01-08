type LayerClassNames = {
  // 레이어의 최상위 요소입니다.
  root: string;
  // 레이어를 감싸는 요소입니다.
  wrapper: string;
  // 러이어의 내용을 담는 요소입니다.
  container: string;
  // 레이어의 내용입니다.
  content: string;
};

declare const layerClassNames: LayerClassNames;

export default layerClassNames;
export type { LayerClassNames };
