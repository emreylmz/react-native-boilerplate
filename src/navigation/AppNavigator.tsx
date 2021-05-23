import { useTheme } from '@hooks';
import { getNavigationTheme } from './config';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './NavigationService';
import RootNavigator from './RootNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultModalTransition } from './transitions';

const RootStack = createStackNavigator();

const { navigatorRef, setIsMounted, setRouteName } = NavigationService;

const AppNavigator: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigatorRef}
      onReady={() => {
        setIsMounted(true);
        setRouteName(navigatorRef.current?.getCurrentRoute()?.name);
      }}
      onStateChange={async () => {
        // const previousRouteName = routeName;
        const currentRouteName = navigatorRef.current?.getCurrentRoute()?.name;

        // if (previousRouteName !== currentRouteName) {
        // 	await analytics().logScreenView({
        // 		screen_name: currentRouteName,
        // 		screen_class: currentRouteName,
        // 	});
        // }

        setRouteName(currentRouteName);
      }}
      theme={getNavigationTheme(theme)}
    >
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        screenOptions={DefaultModalTransition}
      >
        <RootStack.Screen name="Main" component={RootNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
