import React, { createContext, useState, useLayoutEffect } from 'react';
import { defaultFunction, THEME_NAME } from '@global/constants';
import { getData, setData, SetDataError } from '@global/storage';
import { InteractionManager, useColorScheme } from 'react-native';
import { Theme, Themes } from '@global/types';
import themes from '@global/theme/themes';

type SetTheme = (name: Themes, onError: SetDataError) => void;

const defaultValue: {
  theme: Theme;
  setTheme: SetTheme;
} = {
  theme: themes[Themes.Light],
  setTheme: defaultFunction,
};

const ThemeContext = createContext(defaultValue);

const getTheme: (name: Themes) => Theme = name => {
  return themes[name] || themes[Themes.Light];
};

const GetCurrentTheme = async () => {
  const savedThemeName = await getData(THEME_NAME);
  return getTheme(savedThemeName);
};

const ThemeProvider: React.FC = ({ children }) => {
  const themeMode = useColorScheme();
  const [themeName, setThemeName] = useState(
    themeMode === 'dark' ? Themes.Dark : Themes.Light,
  );

  const theme = getTheme(themeName);

  useLayoutEffect(() => {
    async function setFromStorage() {
      const savedThemeName = await getData(THEME_NAME);
      if (savedThemeName) {
        setThemeName(savedThemeName);
      }
    }
    InteractionManager.runAfterInteractions(() => {
      setFromStorage();
    });
  }, []);

  const setTheme = async (name: Themes, onError: SetDataError) => {
    await setData(
      THEME_NAME,
      name,
      () => {
        setThemeName(name);
      },
      onError,
    );
  };

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, GetCurrentTheme };
