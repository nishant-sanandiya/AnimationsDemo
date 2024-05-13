import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Four,
  One,
  Three,
  Two,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
} from '../screens';

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Eight">
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen name="Four" component={Four} />
        <Stack.Screen name="Five" component={Five} />
        <Stack.Screen name="Six" component={Six} />
        <Stack.Screen name="Seven" component={Seven} />
        <Stack.Screen name="Eight" component={Eight} />
        <Stack.Screen name="Nine" component={Nine} />
        <Stack.Screen name="Ten" component={Ten} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
