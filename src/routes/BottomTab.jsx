import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../constants/routes';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import MarketScreen from '../screens/MarketFlow/MarketScreen';
import ReelsScreen from '../screens/ReelsFlow/ReelsScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';

const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <BottomTabsNavigator.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsNavigator.Screen
        name={routes.HOME_FLOW}
        component={HomeFlow}
      />
      <BottomTabsNavigator.Screen
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.REELS_FLOW}
        component={ReelsScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.MARKETS_FLOW}
        component={MarketScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.PROFILE_FLOW}
        component={ProfileScreen}
      />
    </BottomTabsNavigator.Navigator>
  );
};
export default BottomTabs;
