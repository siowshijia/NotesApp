import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import IconDown from '../images/icon_down.svg';
import {commonStyles} from '../styles/common';
import {space} from '../styles/space';
import {useNotes} from '../context/NotesContext';

const NewNoteScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [noteError, setNoteError] = useState('');

  const {addNote} = useNotes();

  const maxCharacters = 200;

  const categories = [
    {label: 'Work and Study', value: 'Work and Study'},
    {label: 'Home Life', value: 'Home Life'},
    {label: 'Health and Wellness', value: 'Health and Wellness'},
  ];

  const handleSaveNote = () => {
    // Reset errors
    setCategoryError('');
    setNoteError('');

    if (!selectedCategory) {
      setCategoryError('Please choose a category.');
    }

    if (!noteText) {
      setNoteError('Please input note content.');
    }

    if (selectedCategory && noteText) {
      // Add note based on the selected category to the NoteData
      addNote({
        category: selectedCategory,
        content: noteText,
      });

      // After saving, navigate back to the home screen
      navigation.navigate('Home');

      // Reset the state after saving
      setSelectedCategory(null);
      setNoteText('');
    }
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={commonStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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

              {!!categoryError && (
                <Text style={commonStyles.errorText}>{categoryError}</Text>
              )}

              <TextInput
                style={commonStyles.textInput}
                multiline
                numberOfLines={5}
                maxLength={maxCharacters}
                value={noteText}
                onChangeText={text => setNoteText(text)}
                placeholder="Please input note content"
                placeholderTextColor={'#fff'}
              />

              <Text style={commonStyles.characterCounter}>
                {noteText.length}/{maxCharacters}
              </Text>

              {!!noteError && (
                <Text style={commonStyles.errorText}>{noteError}</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={commonStyles.bottomContainer}>
        <TouchableOpacity
          onPress={handleSaveNote}
          style={commonStyles.bottomContainerButton}>
          <Text style={commonStyles.bottomContainerButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default NewNoteScreen;
