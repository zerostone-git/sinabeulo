type SelectItemsClassNames = {
  // 선택 아이템 목록의 최상위 요소입니다.
  root: string;
  // 선택 아이템 목록의 구분자 요소입니다.
  separator: string;
  // 선택 아이템 목록의 머리글 요소입니다.
  header: string;
  // 선택 아이템 목록의 각 아이템 요소입니다.
  item: string;
  // 선택 아이템 목록의 각 아이템이 비활성화일 때 입니다.
  itemDisabled: string;
  // 선택 아이템 목록의 각 아이템이 내용을 담는 요소입니다.
  itemContainer: string;
};

declare const selectItemsClassNames: SelectItemsClassNames;

export default selectItemsClassNames;
export type { SelectItemsClassNames };
