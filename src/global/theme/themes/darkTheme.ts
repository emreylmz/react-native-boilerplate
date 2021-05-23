import { ThemeColors } from '../../types';

const colors: ThemeColors = {
  primary: {
    light: '#4b72b5',
    main: '#094785',
    dark: '#002158',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#faf9fe',
    main: '#C7C6CB',
    dark: '#96959a',
    contrastText: '#000000',
  },
  error: {
    light: '#ff8673',
    main: '#f55347',
    dark: '#bb161e',
    contrastText: '#000000',
  },
  warning: {
    light: '#ffe060',
    main: '#ffae2b',
    dark: '#c77f00',
    contrastText: '#000000',
  },
  info: {
    light: '#70c5ff',
    main: '#2f95dc',
    dark: '#0068aa',
    contrastText: '#000000',
  },
  success: {
    light: '#6effa7',
    main: '#24e077',
    dark: '#00ad49',
    contrastText: '#000000',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    subTitle: '#C7C6CB',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    link: '#4DA5EB',
  },
  background: {
    default: '#ffffff',
    gray: '#908E94',
    paper: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
    notification: '#f55347',
    star: '#FC9309',
    heart: '#e03238',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  gradient: {
    overlay: {
      start: 'rgba(0, 0, 0, 0.4)',
      end: 'rgba(0, 0, 0, 0.0)',
    },
  },
};

export default {
  colors,
};
