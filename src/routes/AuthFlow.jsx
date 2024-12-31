import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants/routes';
import SigninScreen from '../screens/AuthFlow/SigninScreen';
import SignUpScreen from '../screens/AuthFlow/SignUpScreen';

const AuthFlow = () => {
  const AuthFlowStack = createNativeStackNavigator();
  const {SIGN_IN, SIGN_UP} = routes;
  return (
    <AuthFlowStack.Navigator screenOptions={{headerShown: false}}>
      <AuthFlowStack.Screen name={SIGN_IN} component={SigninScreen} />
      <AuthFlowStack.Screen name={SIGN_UP} component={SignUpScreen} />
    </AuthFlowStack.Navigator>
  );
};

export default AuthFlow;
