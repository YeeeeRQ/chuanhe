type CollectionItem = {
  id: number;
  category_id: number;
  name: string;
  tag: boolean;
  atlas: boolean;
  isCast: boolean;
  isExchange: boolean;
  img: string;
};
type CollectionList = CollectionItem[];

export type { CollectionItem, CollectionList };
