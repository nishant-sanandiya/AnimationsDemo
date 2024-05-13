import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Animated, Button, Platform, View} from 'react-native';
import {styles} from './styles';

export const Eight = () => {
  const navigation = useNavigation<any>();

  const slideAnim = useRef(new Animated.Value(-1000)).current;

  const makeAnimation = () => {
    navigation.navigate('Nine');
  };

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: Platform.OS === 'ios',
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{translateX: slideAnim}]}]}
      />
      <Button title="Slide In" onPress={slideIn} />
      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
