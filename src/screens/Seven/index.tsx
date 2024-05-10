import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Seven = () => {
  const navigation = useNavigation<any>();

  const zoomOut = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.3: {
      opacity: 0.3,
      scale: 0.3,
    },
    0.6: {
      opacity: 0.6,
      scale: 0.6,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  const makeAnimation = () => {
    navigation.navigate('Eight');
  };

  return (
    <View>
      <Animatable.Text
        iterationDelay={1000}
        direction="alternate"
        iterationCount={'infinite'}
        animation={zoomOut}>
        Zoom me out
      </Animatable.Text>

      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
