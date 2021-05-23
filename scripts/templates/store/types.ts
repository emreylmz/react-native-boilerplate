export type LoadItemsPayload = {
  page: number;
  pageSize: number;
  filterParams: { [key: string]: any };
  callback?: (success: boolean, items: any[]) => void;
};

export type SuccessLoadItemsPayload = {
  items: any[];
  totalCount: number;
};

export type FailLoadItemsPayload = {
  errors: string[];
};
