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

export const Two = () => {
  const navigation = useNavigation<any>();

  const isNativeDriver = useRef(Platform.OS === 'android').current;
  const position = useRef(
    new Animated.ValueXY({x: 0, y: 0}, {useNativeDriver: isNativeDriver}),
  ).current;

  const changePosition = () => {
    Animated.timing(position, {
      useNativeDriver: isNativeDriver,
      toValue: {
        x: 50,
        y: 50,
      },
      easing: Easing.bounce,
      duration: 1000,
      isInteraction: true,
    }).start(() => {
      Animated.timing(position, {
        useNativeDriver: isNativeDriver,
        toValue: {
          x: 0,
          y: 0,
        },
        duration: 1000,
        isInteraction: true,
        easing: Easing.bounce,
      }).start();
    });
  };

  const navigateToThree = () => {
    navigation.navigate('Three');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: 50,
            width: 50,
            backgroundColor: 'red',
            borderWidth: 2,
            borderColor: 'blue',
          },
          position.getLayout(),
        ]}
      />
      <Button onPress={changePosition} title="Change Position" />

      <Button onPress={navigateToThree} title="Move to Next Animation" />
    </View>
  );
};
