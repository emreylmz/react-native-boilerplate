import { useTheme } from '@hooks';
import { getTabBarOptions } from './config';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen } from '@screens';
// import { SearchIco, HeartIco, BellIco, UserIco } from 'components/icons';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Browse"
      tabBarOptions={getTabBarOptions(theme)}
      // screenOptions={({ route }) => ({
      //   // tabBarIcon: ({ focused, color, size }) => {
      //   //   let TabIcon = SearchIco;
      //   //   switch (route.name) {
      //   //     case 'Browse':
      //   //       TabIcon = SearchIco;
      //   //       break;
      //   //     case 'Bookings':
      //   //     case 'Favorites':
      //   //       TabIcon = HeartIco;
      //   //       break;
      //   //     case 'Notifications':
      //   //       TabIcon = BellIco;
      //   //       break;
      //   //     case 'Profile':
      //   //       TabIcon = UserIco;
      //   //       break;
      //   //   }
      //   //   return <TabIcon width={size} color={color} />;
      //   // },
      // })}
    >
      {/*<Tab.Screen name="Browse" component={BrowseNavigator} />*/}
      <Tab.Screen name="Favorites" component={SplashScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
