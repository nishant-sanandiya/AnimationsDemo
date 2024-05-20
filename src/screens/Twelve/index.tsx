import React, {useState} from 'react';
import {Button, LayoutAnimation, Platform, UIManager} from 'react-native';
import {View} from 'react-native-animatable';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const Twelve = () => {
  const navigation = useNavigation<any>();

  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setShowBox(!showBox);
  };

  const makeAnimation = () => {
    navigation.navigate('Thirteen');
  };

  return (
    <View style={styles.container}>
      <Button onPress={makeAnimation} title="Move to Next Animation" />
      {showBox && <View style={styles.box} />}
      <Button title={showBox ? 'Hide Box' : 'Show Box'} onPress={toggleBox} />
    </View>
  );
};
