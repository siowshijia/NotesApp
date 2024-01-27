import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconPlus from '../images/icon_plus.svg';
import {useNavigation} from '@react-navigation/native';

const NewNoteButton = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 32,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 36,
        // height: 36
      }}>
      <TouchableOpacity
        style={{}}
        onPress={() => navigation.navigate('NewNote')}>
        <IconPlus width={36} height={36} />
      </TouchableOpacity>
    </View>
  );
};

export default NewNoteButton;
