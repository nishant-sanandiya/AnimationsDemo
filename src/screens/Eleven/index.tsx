import React from 'react';
import {Animated, Button, PanResponder} from 'react-native';
import {View} from 'react-native-animatable';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Eleven = () => {
  const navigation = useNavigation<any>();

  const position = new Animated.ValueXY({
    x: 0,
    y: 0,
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: () => {
      position.setValue({x: 0, y: 0});
      // You can add animations or additional logic here
    },
  });

  const makeAnimation = () => {
    navigation.navigate('Twelve');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, position.getLayout()]}
        {...panResponder.panHandlers}
      />
      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
