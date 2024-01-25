import React from 'react';
import {View, Text, Button} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Categories</Text>
      <Button
        title="Go to New Note"
        onPress={() => navigation.navigate('NewNote')}
      />
    </View>
  );
};

export default SettingsScreen;
