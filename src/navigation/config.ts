// import { dimensions } from 'utils';
import { Theme } from '@global/types';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import { Theme as NavigationTheme } from '@react-navigation/native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

// const headerConfig: (options: any) => StackHeaderOptions = ({
//   state,
//   navigation,
//   theme: { colors },
// }) => ({
//   headerTitle: '',
//   headerStyle: {
//     backgroundColor: colors.background.default,
//     shadowColor: 'transparent',
//     height: dimensions.navHeight,
//   },
// });

const getDefaultHeaderStyle: (theme: Theme) => StackHeaderOptions = ({
  colors,
}) => ({
  headerTintColor: colors.text.primary,
  headerStyle: {
    backgroundColor: colors.background.default,
    shadowColor: 'transparent',
    // height: dimensions.navHeight,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'left',
});

const getTabBarOptions: (theme: Theme) => BottomTabBarOptions = ({
  colors,
}) => ({
  activeTintColor: colors.primary.main,
  inactiveTintColor: colors.secondary.main,
  activeBackgroundColor: colors.background.default,
  inactiveBackgroundColor: colors.background.default,
  labelStyle: {
    fontWeight: 'bold',
  },
  // tabStyle: {
  //   ...(Platform.OS === 'ios' ? { paddingBottom: 10 } : {}),
  // },
  style: {
    // ...(Platform.OS === 'ios' ? { height: '10%' } : {}),
    shadowColor: 'transparent',
    borderTopWidth: 0,
  },
});

const getNavigationTheme: (theme: Theme) => NavigationTheme = theme => ({
  dark: false,
  colors: {
    primary: theme.colors.primary.main,
    background: theme.colors.background.default,
    card: theme.colors.background.default,
    text: theme.colors.primary.main,
    border: theme.colors.background.default,
    notification: theme.colors.common.notification,
  },
});

export {
  // headerConfig,
  getDefaultHeaderStyle,
  getTabBarOptions,
  getNavigationTheme,
};
