import React from 'react';
import { TemplateNavigator } from './TemplateNavigator';
import { SplashScreen } from '@screens';

const TemplateStack = TemplateNavigator();

const RootNavigator: React.FC = () => {
  return (
    <TemplateStack.Navigator initialRouteName={'CarWashDetail'}>
      <TemplateStack.Screen name="Main" component={SplashScreen} />
    </TemplateStack.Navigator>
  );
};

export default RootNavigator;
