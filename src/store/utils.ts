import { call } from 'redux-saga/effects';
import { Saga } from 'redux-saga';
import { Action } from 'redux';

const safeSaga = (
  recovery: (...args: any[]) => any,
  saga: Saga,
  ...args: any[]
) =>
  function* (action: Action) {
    try {
      yield call(saga, ...args, action);
    } catch (err) {
      yield call(recovery, ...args, err);
    }
  };

export { safeSaga };
