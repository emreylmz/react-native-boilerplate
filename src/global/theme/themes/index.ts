import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import { Theme, Themes } from '../../types';

const themes: { [key in Themes]: Theme } = {
  [Themes.Light]: lightTheme,
  [Themes.Dark]: darkTheme,
};

export default themes;
