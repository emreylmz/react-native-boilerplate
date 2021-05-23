import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailLoadItemsPayload,
  LoadItemsPayload,
  SuccessLoadItemsPayload,
} from './types';

type State = {
  items: any[];
  itemsPageSize: number;
  loadingItems: boolean;
  totalItems: number;
  itemErrors: string[];
};

const initialState: State = {
  items: [],
  itemsPageSize: 10,
  loadingItems: false,
  totalItems: 0,
  itemErrors: [],
};

const slice = createSlice({
  name: '<componentName>',
  initialState,
  reducers: {
    loadItems: (state, _: PayloadAction<LoadItemsPayload>) => {
      state.loadingItems = true;
      state.itemErrors = [];
    },
    successLoadItems: (
      state,
      action: PayloadAction<SuccessLoadItemsPayload>,
    ) => {
      const { items, totalCount } = action.payload;
      state.items = items;
      state.totalItems = totalCount;
      state.loadingItems = false;
    },
    failLoadItems: (state, action: PayloadAction<FailLoadItemsPayload>) => {
      const { errors } = action.payload;
      state.itemErrors = errors;
      state.loadingItems = false;
    },
  },
});

const { actions, reducer } = slice;

export const { loadItems, successLoadItems, failLoadItems } = actions;

export default reducer;
