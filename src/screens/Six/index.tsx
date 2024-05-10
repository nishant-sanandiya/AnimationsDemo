import React from 'react';
import {Button, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

//interpolation example

export type Animation =
  | 'bounce'
  | 'flash'
  | 'jello'
  | 'pulse'
  | 'rotate'
  | 'rubberBand'
  | 'shake'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInUp'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutUp'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'
  | 'lightSpeedIn'
  | 'lightSpeedOut'
  | 'slideInDown'
  | 'slideInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideOutDown'
  | 'slideOutUp'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInUp'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutUp'
  | 'zoomOutLeft'
  | 'zoomOutRight';

export const Six = () => {
  const navigation = useNavigation<any>();

  const animationType: Animation = 'bounce';
  const animationType2: Animation = 'flipInX';

  const makeAnimation = () => {
    navigation.navigate('Seven');
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={animationType}
        duration={3000}
        style={{height: 50, width: 50, backgroundColor: 'red'}}
      />

      <Animatable.View
        animation={animationType2}
        duration={3000}
        style={{height: 50, width: 50, backgroundColor: 'red'}}
      />

      <Button onPress={makeAnimation} title="Move to Next Animation" />
    </View>
  );
};
