import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, Platform, Button} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Fourteen = () => {
  const navigation = useNavigation<any>();

  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: Platform.OS === 'android',
    }).start();
  }, [animationValue]);

  const translateX = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  const makeAnimation = () => {
    navigation.navigate('Fifteen');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.animatedView,
          transform: [{translateX: translateX}],
        }}>
        <Text style={styles.text}>Interpolated Position</Text>
        <Button onPress={makeAnimation} title="Move to Next Animation" />
      </Animated.View>
    </View>
  );
};
