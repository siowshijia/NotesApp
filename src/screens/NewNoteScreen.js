import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import IconDown from '../images/icon_down.svg';

const NewNoteScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [noteText, setNoteText] = useState('');
  
  const categories = [
    { label: 'Work and Study', value: 'workandstudy' },
    { label: 'Home Life', value: 'homelife' },
    { label: 'Health and Wellness', value: 'healthandwellness' },
  ];
  
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={{flex: 1}}>
      <ScrollView>
        <View style={{paddingTop: 20, paddingBottom: 120}}>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
          <RNPickerSelect
            items={categories}
            onValueChange={(value) => setSelectedCategory(value)}
            value={selectedCategory}
            placeholder={{
              label: 'Choose a category',
              value: null,
            }}
            style={{
              inputIOS: {
                fontSize: 14,
                paddingVertical: 20,
                paddingHorizontal: 15,
                color: '#fff',
                paddingRight: 30, // to ensure the text is never behind the icon
                backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)',
                marginBottom: 15
              },
              inputAndroid: {
                fontSize: 14,
                paddingVertical: 20,
                paddingHorizontal: 15,
                color: '#fff',
                paddingRight: 30, // to ensure the text is never behind the icon
                backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)',
                marginBottom: 15
              },
              placeholder: {
                color: '#fff',
                fontSize: 14,
              },
              iconContainer: {
                top: 20,
                right: 12,
              },
            }}
            Icon={() => {
              return <IconDown width={24} height={24} />;
            }}
          />
    
          <TextInput
            style={{backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 16, padding: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 15, height: 260, color: '#fff'}}
            multiline
            numberOfLines={5}
            value={noteText}
            onChangeText={(text) => setNoteText(text)}
            placeholder='Please input note content'
            placeholderTextColor={'#fff'}
          />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#1C0B37',
          position: 'absolute',
          height: 100,
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            backgroundColor: '#F94695',
            borderRadius: 30,
            padding: 10,
          }}>
          <Text style={{color: '#fff'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default NewNoteScreen;
