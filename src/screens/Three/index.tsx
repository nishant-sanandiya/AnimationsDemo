import React from 'react';
import {Button, FlatList, View} from 'react-native';
import {styles} from './styles';
import {Item} from './components/Item';
import {useNavigation} from '@react-navigation/native';

export const Three = () => {
  const navigation = useNavigation<any>();
  const renderItem = () => {
    return <Item />;
  };

  const navigateToFour = () => {
    navigation.navigate('Four');
  };

  return (
    <View style={styles.container}>
      <Button onPress={navigateToFour} title="Move to Next Animation" />
      <FlatList
        style={{flex: 1}}
        initialNumToRender={10}
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40,
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
