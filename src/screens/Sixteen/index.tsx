import React from 'react';
import {View, Button} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const Sixteen = () => {
  const navigation = useNavigation<any>();

  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {rotate: `${rotate.value}deg`},
        {scale: scale.value},
      ],
    };
  });

  const startAnimation = () => {
    translateX.value = withRepeat(withTiming(200, {duration: 1000}), -1, true);
    rotate.value = withRepeat(withTiming(360, {duration: 2000}), -1, true);
    scale.value = withRepeat(
      withSpring(1.5, {damping: 2, stiffness: 200}),
      -1,
      true,
    );
  };

  const makeAnimation = () => {
    navigation.navigate('Seventeen');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Start Animation" onPress={startAnimation} />
      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
