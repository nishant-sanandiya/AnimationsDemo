import React, {useRef} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Easing,
  Platform,
  View,
} from 'react-native';
import {styles} from './styles';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';

export const Nine = () => {
  const navigation = useNavigation<any>();

  const ballPosition = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const batPosition = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const rotation = useRef(new Animated.Value(0.2)).current;

  // Apply rotation transformation to image
  const interpolatedRotateAnimation = rotation.interpolate({
    inputRange: [0, 1, 2], // Animation values
    outputRange: ['-45deg', '0deg', '-120deg'], // Output rotation degrees
  });

  const throwBall = () => {
    Animated.parallel([
      Animated.timing(batPosition, {
        toValue: {
          x: 20,
          y: 0,
        },
        useNativeDriver: Platform.OS === 'android',
        duration: 1000,
        easing: Easing.ease,
      }),
      Animated.timing(rotation, {
        toValue: 2, // Rotate to 1 full rotation (360 degrees)
        duration: 2000, // Animation duration in milliseconds
        delay: 300,
        useNativeDriver: Platform.OS === 'android',
      }),
      Animated.timing(ballPosition, {
        toValue: {
          x: -(Dimensions.get('screen').width - 100),
          y: 10,
        },
        useNativeDriver: Platform.OS === 'android',
        duration: 1200,
        delay: 1000,
        easing: Easing.ease,
      }),
    ]).start(() => {
      Animated.timing(ballPosition, {
        toValue: {
          x: -10,
          y: -150,
        },
        useNativeDriver: Platform.OS === 'android',
        duration: 800,
        easing: Easing.ease,
      }).start();
    });
  };

  const makeAnimation = () => {
    navigation.navigate('Ten');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Animated.Image
          source={Images.Bat}
          resizeMode="contain"
          style={[
            styles.batStyle,
            batPosition.getLayout(),
            {transform: [{rotate: interpolatedRotateAnimation}]},
          ]}
        />
        <Animated.Image
          source={Images.Ball}
          resizeMode="contain"
          style={[styles.ballStyle, ballPosition.getLayout()]}
        />
      </View>
      <Button title="Throw Ball" onPress={throwBall} />
      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
