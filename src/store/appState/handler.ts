import { useEffect } from 'react';
import { AppState } from 'react-native';
import { shallowEqual } from 'react-redux';
import { changeAppState } from './slice';
import { useAppDispatch, useAppSelector } from '@hooks';

const AppStateHandler = ({}) => {
  const { isForeground } = useAppSelector(
    state => ({
      isForeground: state.appState.isForeground,
    }),
    shallowEqual,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (newState: string) => {
    const newStatus = newState === 'active';
    if (isForeground !== newStatus) {
      dispatch(changeAppState({ isForeground: newStatus }));
      // Logger.breadcrumb('AppState Change', 'AppState', newState);
    }
  };

  return null;
};

export { AppStateHandler };
