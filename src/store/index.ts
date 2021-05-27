import createSagaMiddleware from 'redux-saga';
import appStateReducer from './appState/slice';
import authReducer from './auth/slice';
import notificationReducer from './notification/slice';
// REDUCER IMPORTS
import authServices from './auth/services';
// SERVICE IMPORTS
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
    // REDUCERS
  },
  middleware: [sagaMiddleware],
});

function startServices() {
  sagaMiddleware.run(authServices);
  // SERVICES
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, startServices };
