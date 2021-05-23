import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeAppStatePayload } from './types';

type State = {
  isForeground: boolean;
};

const initialState: State = {
  isForeground: false,
};

const slice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    changeAppState: (state, action: PayloadAction<ChangeAppStatePayload>) => {
      const { isForeground } = action.payload;
      state.isForeground = isForeground;
    },
  },
});

const { actions, reducer } = slice;

export const { changeAppState } = actions;

export default reducer;
