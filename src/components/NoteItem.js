import React from 'react';
import { View, Text } from 'react-native';
import IconArrow from '../images/arrow.svg';
import { homeStyles } from '../styles/home';
import { space } from '../styles/space';

const NoteItem = ({ note }) => (
  <View key={note.id} style={homeStyles.noteItem}>
    <Text style={homeStyles.noteItemText}>{note.content}</Text>
    <IconArrow width={20} height={20} style={{ marginLeft: space.m4 }} />
  </View>
);

export default NoteItem;
