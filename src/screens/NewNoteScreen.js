import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import IconDown from '../images/icon_down.svg';
import {commonStyles} from '../styles/common';
import {space} from '../styles/space';

const NewNoteScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [noteText, setNoteText] = useState('');

  const categories = [
    {label: 'Work and Study', value: 'workandstudy'},
    {label: 'Home Life', value: 'homelife'},
    {label: 'Health and Wellness', value: 'healthandwellness'},
  ];

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={commonStyles.container}>
      <ScrollView>
        <View style={{paddingTop: space.p4, paddingBottom: space.pNavSpace}}>
          <View style={commonStyles.containerSpacingX}>
            <RNPickerSelect
              items={categories}
              onValueChange={value => setSelectedCategory(value)}
              value={selectedCategory}
              placeholder={{
                label: 'Choose a category',
                value: null,
              }}
              style={commonStyles.pickerContainer}
              Icon={() => {
                return <IconDown width={24} height={24} />;
              }}
            />

            <TextInput
              style={commonStyles.textInput}
              multiline
              numberOfLines={5}
              value={noteText}
              onChangeText={text => setNoteText(text)}
              placeholder="Please input note content"
              placeholderTextColor={'#fff'}
            />
          </View>
        </View>
      </ScrollView>
      <View style={commonStyles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={commonStyles.bottomContainerButton}>
          <Text style={commonStyles.bottomContainerButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default NewNoteScreen;
