import React from 'react';
import {View, Text} from 'react-native';
import IconArrow from '../images/arrow.svg';
import {homeStyles} from '../styles/home';
import {space} from '../styles/space';

const NoteItem = ({note}) => {
  // Commented out to show all content of notes
  // const truncatedContent =
  //   note.content.length > 20 ? note.content.slice(0, 20) + '...' : note.content;

  return (
    <View key={note.id} style={homeStyles.noteItem}>
      <Text style={homeStyles.noteItemText}>{note.content}</Text>
      {/* Commented out as there is no directory to navigate to */}
      {/* <IconArrow width={20} height={20} style={{marginLeft: space.m4}} /> */}
    </View>
  );
};

export default NoteItem;
