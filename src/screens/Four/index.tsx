import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  Platform,
  Easing,
  Button,
} from 'react-native';

export const Four = () => {
  const navigation = useNavigation<any>();

  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    console.log('Press Event');
  };

  const onPressIn = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0.7,
        duration: 300,
        useNativeDriver: Platform.OS === 'ios',
        easing: Easing.bounce,
      }),
      Animated.timing(opacity, {
        toValue: 0.7,
        duration: 300,
        useNativeDriver: Platform.OS === 'ios',
        easing: Easing.bounce,
      }),
    ]).start();
  };

  const onPressOut = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: Platform.OS === 'ios',
        easing: Easing.bounce,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: Platform.OS === 'ios',
        easing: Easing.bounce,
      }),
    ]).start();
  };

  const navigateToFive = () => {
    navigation.navigate('Five');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 60,
          borderRadius: 15,
          backgroundColor: 'blue',
          transform: [{scale: scale}],
          opacity: opacity,
        }}
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={handlePress}>
        <Text>Press me to rotate</Text>
      </TouchableOpacity>
      <Button onPress={navigateToFive} title="Move to Next Animation" />
    </View>
  );
};
