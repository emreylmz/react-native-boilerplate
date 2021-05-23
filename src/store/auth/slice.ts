import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FailLoginPayload,
  LoginPayload,
  SetUserPermissionsPayload,
  SuccessLoadUserPayload,
  SuccessLoginPayload,
} from '@store/auth/types';

type State = {
  loggedIn: boolean;
  errorMessage?: string;
  user?: any;
  userPermissions?: string[];
  userPermissionsAreSet: boolean;
};

const initialState: State = {
  loggedIn: false,
  errorMessage: '',
  user: {},
  userPermissions: [],
  userPermissionsAreSet: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, _: PayloadAction<LoginPayload>) => {
      state.loggedIn = true;
      state.errorMessage = '';
    },
    successLogin: (state, action: PayloadAction<SuccessLoginPayload>) => {
      const { user } = action.payload;
      state.loggedIn = false;
      state.user = user;
    },
    successLoadUser: (state, action: PayloadAction<SuccessLoadUserPayload>) => {
      const { user } = action.payload;
      state.loggedIn = false;
      state.user = user;
    },
    failLogin: (state, action: PayloadAction<FailLoginPayload>) => {
      const { errorMessage } = action.payload;
      state.loggedIn = false;
      state.errorMessage = errorMessage;
    },
    setUserPermissions: (
      state,
      action: PayloadAction<SetUserPermissionsPayload>,
    ) => {
      const { permissions } = action.payload;
      state.userPermissions = permissions;
      state.userPermissionsAreSet = true;
    },
    refreshToken: () => {},
    setRefreshTokenTimer: () => {},
    loadUser: () => {},
  },
});

const { actions, reducer } = slice;

export const {
  login,
  successLogin,
  successLoadUser,
  failLogin,
  setUserPermissions,
  refreshToken,
  setRefreshTokenTimer,
  loadUser,
} = actions;

export default reducer;
