import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, Animated, Platform, Button} from 'react-native';

export const Five = () => {
  const navigation = useNavigation<any>();

  const scaleValue = new Animated.Value(0.5); // Initial scale value: 2
  const invertedScaleValue = Animated.multiply(2, scaleValue); // Inverted scale value

  useEffect(() => {
    // Animate the scale value
    Animated.spring(scaleValue, {
      toValue: 1, // Target scale value
      useNativeDriver: Platform.OS === 'ios',
      delay: 1000,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToSix = () => {
    navigation.navigate('Six');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          transform: [{scale: invertedScaleValue}], // Apply inverted scale transformation
        }}>
        <Text>Inverted Scale Example</Text>
      </Animated.View>
      <Animated.View
        style={{
          marginTop: 30,
          transform: [{scale: scaleValue}], // Apply inverted scale transformation
        }}>
        <Text>Scale Example</Text>
      </Animated.View>

      <Button onPress={navigateToSix} title="Move to Next Animation" />
    </View>
  );
};
