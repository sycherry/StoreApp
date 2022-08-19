import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/home';
import {Item} from '../screens/item';
import {Provider as ReduxProvider} from 'react-redux';
import configureStoreWrap from '../redux/store';

const store = configureStoreWrap();

export type NavigatorParamList = {
  Home: any;
  Item: {item: any};
};

export default function RootNavigation() {
  const Stack = createStackNavigator<NavigatorParamList>();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
