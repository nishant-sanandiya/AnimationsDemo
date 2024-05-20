import React, {useRef} from 'react';
import {Animated, Button} from 'react-native';
import {View} from 'react-native-animatable';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Ten = () => {
  const navigation = useNavigation<any>();

  const position = useRef(new Animated.Value(0)).current;

  const moveRight = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedColor = position.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'red'],
  });

  const makeAnimation = () => {
    navigation.navigate('Eleven');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            backgroundColor: interpolatedColor,
            transform: [
              {
                translateX: position.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      />
      <Button title="Move Right" onPress={moveRight} />
      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
