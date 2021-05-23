import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AppNavigator } from '@navigation';
import { enableScreens } from 'react-native-screens';
import { startServices } from '@store';
import { StoreProvider, ThemeProvider } from '@providers';

enableScreens();

startServices();

const App = () => {
  const themeMode = useColorScheme();
  return (
    <StoreProvider>
      <ThemeProvider>
        <StatusBar
          barStyle={themeMode === 'dark' ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor={'transparent'}
        />
        <AppNavigator />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
