import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import {
  useNavigationBuilder,
  createNavigatorFactory,
} from '@react-navigation/native';
import { StackRouter } from '@react-navigation/routers';
import TemplateStackView from './TemplateStackView';
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';

type ScreenOptions = {
  gestureDirection: 'vertical' | 'horizontal';
  cardOverlayEnabled: boolean;
  gestureEnabled: boolean;
};

interface OwnProps {
  contentStyle?: StyleProp<ViewStyle>;
}

type Props = OwnProps & NativeStackNavigatorProps;

const initialScreenOptions: ScreenOptions = {
  gestureDirection: 'vertical',
  cardOverlayEnabled: true,
  gestureEnabled: true,
};

const TemplateNavigator: React.FC<Props> = ({
  initialRouteName,
  children,
  contentStyle,
  // options,
  screenOptions = initialScreenOptions,
  ...rest
}) => {
  const { state, navigation, descriptors } = useNavigationBuilder(StackRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  return (
    <View style={[styles.container, contentStyle]} {...rest}>
      {state.routes.map(route => {
        const screen = descriptors[route.key];
        return (
          <TemplateStackView
            key={route.key}
            screen={screen}
            route={route}
            navigation={navigation}
          >
            {screen.render()}
          </TemplateStackView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default createNavigatorFactory(TemplateNavigator);
