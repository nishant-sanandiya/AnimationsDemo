import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, Platform, Button} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Thirteen = () => {
  const navigation = useNavigation<any>();

  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: Platform.OS === 'android',
    }).start();
  }, [animationValue]);

  const opacity = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const scale = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const makeAnimation = () => {
    navigation.navigate('Fourteen');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.animatedView,
          opacity: opacity,
          transform: [{scale: scale}],
        }}>
        <Text style={styles.text}>Interpolated Opacity and Scale</Text>
        <Button onPress={makeAnimation} title="Move to Next Animation" />
      </Animated.View>
    </View>
  );
};
