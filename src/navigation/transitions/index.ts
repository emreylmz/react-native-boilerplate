import {
  HeaderStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import { TransitionSpec } from '@react-navigation/stack/src/types';

const configOpen: TransitionSpec = {
  animation: 'timing',
  config: {
    easing: Easing.inOut(Easing.ease),
  },
};

const configClose: TransitionSpec = {
  animation: 'timing',
  config: {
    easing: Easing.linear,
  },
};

const DefaultModalTransition: StackNavigationOptions = {
  cardStyle: {
    // backgroundColor: 'transparent',
  },
  cardOverlayEnabled: true,
  gestureEnabled: true,
  gestureDirection: 'vertical',
  gestureResponseDistance: {
    vertical: 400,
  },
  gestureVelocityImpact: 1,
  detachPreviousScreen: false,
  transitionSpec: {
    open: configOpen,
    close: configClose,
  },
  headerStatusBarHeight: 0,
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
  cardStyleInterpolator: ({ current, layouts: { screen } = {} }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [screen!.height, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [-1, 0, 1, 1],
          outputRange: [0.1, 0.1, 0.4, 0.4],
          extrapolate: 'clamp',
        }),
      },
    };
  },
};

const PickerModalTransition: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
  cardOverlayEnabled: true,
  gestureEnabled: false,
  detachPreviousScreen: false,
  transitionSpec: {
    open: configOpen,
    close: configClose,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, layouts: { screen } = {} }) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [-1, 0, 1, 1.1],
            outputRange: [screen!.height, screen!.height, 0, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
      scale: 1,
    },
  }),
};

const FromTopTransition: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
  cardOverlayEnabled: true,
  gestureEnabled: false,
  transitionSpec: {
    open: configOpen,
    close: configClose,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, layouts: { screen } = {} }) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [-1, 0, 1, 1.1],
            outputRange: [-screen!.height, -screen!.height, 0, 0],
          }),
        },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

const FadeInModalTransition: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: 'transparent',
  },
  cardOverlayEnabled: true,
  gestureEnabled: false,
  detachPreviousScreen: false,
  transitionSpec: {
    open: configOpen,
    close: {
      ...configClose,
      config: {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress.interpolate({
        inputRange: [-1, 0, 1, 1.1],
        outputRange: [0, 0, 1, 1],
        extrapolate: 'clamp',
      }),
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.4],
        extrapolate: 'clamp',
      }),
    },
  }),
};

export {
  DefaultModalTransition,
  PickerModalTransition,
  FromTopTransition,
  FadeInModalTransition,
};
