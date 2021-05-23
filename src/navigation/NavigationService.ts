import React, { createRef } from 'react';
import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

const navigatorRef: React.RefObject<NavigationContainerRef> = createRef();
let routeName: String | undefined;
let isMounted: Boolean = false;

const setRouteName = (name?: string) => {
  routeName = name;
};

const setIsMounted = (mounted: boolean) => {
  isMounted = mounted;
};

const navigate = (name: string, params?: any) => {
  if (!isMounted) {
    return;
  }
  navigatorRef.current?.navigate(name, params);
};

const pop = () => {
  if (!isMounted) {
    return;
  }
  navigatorRef.current?.dispatch(CommonActions.goBack());
};

const resetToHome: () => void = () => {
  if (!isMounted) {
    return;
  }
  navigatorRef.current?.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          state: {
            routes: [
              {
                name: 'Home',
              },
            ],
          },
        },
      ],
    }),
  });
};

export default {
  navigatorRef,
  routeName,
  isMounted,
  setRouteName,
  setIsMounted,
  navigate,
  pop,
  resetToHome,
};
