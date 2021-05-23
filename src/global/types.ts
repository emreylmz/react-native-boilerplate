export type ThemeColors = {
  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  error: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  warning: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  info: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  success: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  text: {
    primary: string;
    secondary: string;
    subTitle: string;
    disabled: string;
    hint: string;
    link: string;
  };
  background: {
    default: string;
    gray: string;
    paper: string;
    overlay: string;
  };
  common: {
    black: string;
    white: string;
    notification: string;
    star: string;
    heart: string;
  };
  grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  };
  divider: string;
  gradient: {
    overlay: {
      start: string;
      end: string;
    };
  };
};

export type Theme = {
  colors: ThemeColors;
};

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}
