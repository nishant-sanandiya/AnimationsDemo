import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Platform} from 'react-native';

export const Item = () => {
  const isNativeDriver = useRef(Platform.OS === 'android').current;
  const scale = useRef(
    new Animated.Value(0.6, {useNativeDriver: isNativeDriver}),
  ).current;

  useEffect(() => {
    Animated.timing(scale, {
      useNativeDriver: isNativeDriver,
      toValue: 1,
      duration: 1000,
      isInteraction: true,
      easing: Easing.bounce,
    }).start();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 50,
          borderRadius: 10,
          marginHorizontal: 20,
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'blue',
          marginVertical: 10,
          transform: [{scale: scale}],
        },
      ]}
    />
  );
};
