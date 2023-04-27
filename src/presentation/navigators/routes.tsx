import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NAV} from '_global';
import {HomeScreen, LoginScreen} from '_screens';
import {RootNavigationProps} from '_types';

const Stack = createNativeStackNavigator<RootNavigationProps>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NAV.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={LoginScreen} name={NAV.LOGIN} />
        <Stack.Screen component={HomeScreen} name={NAV.HOME} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigationProps {}
  }
}

export default Routes;
