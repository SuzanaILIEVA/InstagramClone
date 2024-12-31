import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedPostScreen from '../screens/HomeFlow/FeedPostScreen';

import {routes} from '../constants/routes';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreen';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();
  const {FEED_POST, PROFILE_FLOW} = routes;
  return (
    <HomeFlowStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={PROFILE_FLOW}>
      <HomeFlowStack.Screen name={FEED_POST} component={FeedPostScreen} />
      <HomeFlowStack.Screen name={PROFILE_FLOW} component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};

export default HomeFlow;
