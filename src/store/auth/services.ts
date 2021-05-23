import { takeLatest, takeLeading, all, put } from 'redux-saga/effects';
import { safeSaga } from '@store/utils';
import {
  login,
  refreshToken,
  setRefreshTokenTimer,
  loadUser,
  successLogin,
  successLoadUser,
} from './slice';
import { LoginPayload } from '@store/auth/types';

export function* loginSaga({ username, password }: LoginPayload) {
  yield put(successLogin({ user: { username, password } }));
}

export function* refreshTokenSaga() {}

export function* setRefreshTokenTimerSaga() {}

export function* loadUserSaga() {
  yield put(successLoadUser({ user: {} }));
}

const recovery = (err: any) => console.log('caught', err);

export default function* authServices() {
  yield all([
    takeLatest(login, safeSaga(recovery, loginSaga)),
    takeLatest(refreshToken, safeSaga(recovery, refreshTokenSaga)),
    takeLatest(
      setRefreshTokenTimer,
      safeSaga(recovery, setRefreshTokenTimerSaga),
    ),
    takeLeading(loadUser, safeSaga(recovery, loadUserSaga)),
  ]);
}
