import React from 'react';
import { Provider } from 'react-redux';
// import { AppStateHandler } from 'store/appState/handler';
import { store } from '@store';

const handlers: any[] = [];

const StoreProvider: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      {handlers.map((HandlerComponent, index) => (
        <HandlerComponent key={index.toString()} />
      ))}
      {children}
    </Provider>
  );
};

export default StoreProvider;
