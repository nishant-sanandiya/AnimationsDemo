import React, {useRef} from 'react';
import {Animated, Button, Easing, Platform, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

/*

React Native Animated provides a powerful API for creating and manipulating animations in React Native applications. You can manipulate various styles using React Native Animated, including:

Transforms: You can animate transformations such as translate (moving an element), rotate (rotating an element), scale (changing the size of an element), and skew.
Opacity: You can animate the opacity of an element, making it fade in or out.
Position: You can animate the position of an element, moving it across the screen.
Colors: You can animate the color of an element, transitioning it between different colors.
Dimensions: You can animate the dimensions of an element, changing its width and height.
Borders and Border Radius: You can animate the borders and border radius of an element, changing its shape or appearance.
These are some of the most common styles that you can manipulate using React Native Animated, but the library provides flexibility for handling various other styles as well. By animating these styles, you can create visually appealing and dynamic user interfaces in your React Native applications.

*/

export const One = () => {
  const navigation = useNavigation<any>();

  const isNativeDriver = useRef(Platform.OS === 'android').current;
  const borderWidthAnimValue = useRef(
    new Animated.Value(50, {useNativeDriver: isNativeDriver}),
  ).current;

  const changeBorderWidth = () => {
    Animated.timing(borderWidthAnimValue, {
      toValue: 0,
      useNativeDriver: isNativeDriver,
      duration: 2000,
      easing: Easing.ease,
    }).start(() => {
      Animated.timing(borderWidthAnimValue, {
        toValue: 50,
        useNativeDriver: isNativeDriver,
        duration: 2000,
      }).start();
    });
  };

  const navigateToTwo = () => {
    navigation.navigate('Two');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          borderRadius: borderWidthAnimValue,
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'blue',
        }}
      />
      <Button onPress={changeBorderWidth} title="Change Border Width" />

      <Button onPress={navigateToTwo} title="Move to Next Animation" />
    </View>
  );
};
