import {useEffect, useRef} from 'react';
import {Animated, Button, Platform} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Fifteen = () => {
  const navigation = useNavigation<any>();

  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: Platform.OS === 'android',
    }).start();
  }, [animationValue]);

  const rotate = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const makeAnimation = () => {
    navigation.navigate('Sixteen');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.animatedView,
          transform: [{rotate: rotate}],
        }}>
        <Text style={styles.text}>Interpolated Rotation</Text>
        <Button onPress={makeAnimation} title="Move to Next Animation" />
      </Animated.View>
    </View>
  );
};
