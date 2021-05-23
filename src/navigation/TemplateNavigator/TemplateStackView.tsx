import React from 'react';
import { StyleSheet, View } from 'react-native';

type TemplateStackViewProps = {
  navigation: any;
  screen: any;
  route: any;
};

const TemplateStackView: React.FC<TemplateStackViewProps> = ({
  children,
  navigation,
  screen,
  route,
}) => {
  const { options: { containerBackgroundColor = 'transparent' } = {} } =
    screen || {};
  return (
    <View
      style={[styles.container, { backgroundColor: containerBackgroundColor }]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFillObject },
});

export default TemplateStackView;
