import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNotificationPayload } from '@store/notification/types';

type State = {
  notifications: string[];
};

const initialState: State = {
  notifications: [],
};

const slice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<AddNotificationPayload>) => {
      const { notification } = action.payload;
      state.notifications.push(notification);
    },
  },
});

const { actions, reducer } = slice;

export const { addNotification } = actions;

export default reducer;
