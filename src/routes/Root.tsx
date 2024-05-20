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
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
  Seventeen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="Eleven" component={Eleven} />
        <Stack.Screen name="Twelve" component={Twelve} />
        <Stack.Screen name="Thirteen" component={Thirteen} />
        <Stack.Screen name="Fourteen" component={Fourteen} />
        <Stack.Screen name="Fifteen" component={Fifteen} />
        <Stack.Screen name="Sixteen" component={Sixteen} />
        <Stack.Screen name="Seventeen" component={Seventeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
