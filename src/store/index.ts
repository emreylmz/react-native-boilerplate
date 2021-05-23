import createSagaMiddleware from 'redux-saga';
import reducerMap from './_resources/reducers';
import serviceMap from './_resources/services';
import appStateReducer from './appState/slice';
import authReducer from './auth/slice';
import notificationReducer from './notification/slice';
import authServices from './auth/services';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware({
  onError: err => {
    console.log('caught in root', err);
    startServices();
  },
});

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    auth: authReducer,
    notification: notificationReducer,
    ...reducerMap,
  },
  middleware: [sagaMiddleware],
});

function startServices() {
  sagaMiddleware.run(authServices);
  serviceMap.forEach(sagaMiddleware.run);
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, startServices };
