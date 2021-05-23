import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OwnProps {}

type Props = OwnProps;

const SplashScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.root}>
      <Text>React Native Boilerplate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
