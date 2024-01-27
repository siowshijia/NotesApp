import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import IconClock from '../images/icon_clock.svg';
import IconPen from '../images/icon_pen.svg';
import IconBell from '../images/icon_bell.svg';
import IconHealth from '../images/icon_health.svg';
import IconArrow from '../images/arrow.svg';
import {commonStyles} from '../styles/common';
import {space} from '../styles/space';
import {homeStyles} from '../styles/home';
import {useNotes} from '../context/NotesContext';
import NoteItem from '../components/NoteItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {notes} = useNotes();

  // Function to get the latest notes based on date
  const getLatestNotes = notes => {
    return notes
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  };

  // Group notes by category
  const groupedNotes = notes.reduce((acc, note) => {
    acc[note.category] = acc[note.category] || [];
    acc[note.category].push(note);
    return acc;
  }, {});

  // Map category names to corresponding icons
  const categoryIconMap = {
    'Work and Study': <IconPen width={20} height={20} />,
    'Home Life': <IconBell width={20} height={20} />,
    'Health and Wellness': <IconHealth width={20} height={20} />,
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={commonStyles.container}>
      <ScrollView>
        <View style={{paddingTop: space.p4, paddingBottom: space.pNavSpace}}>
          <View style={commonStyles.containerSpacingX}>
            <TouchableOpacity
              style={{...commonStyles.primaryButton, marginBottom: space.m4}}
              onPress={() => navigation.navigate('NewNote')}>
              <Text style={commonStyles.textWhite}>+ Add New Note</Text>
            </TouchableOpacity>
            <View style={{marginBottom: space.m6}}>
              {/* Display message if no notes are available */}
              {Object.keys(groupedNotes).length === 0 ? (
                <Text style={homeStyles.mainTitle}>
                  There are no notes available to be shown.
                </Text>
              ) : (
                <View style={commonStyles.rowHorzCenter}>
                  <IconClock width={20} height={20} />
                  <Text style={homeStyles.mainTitle}>
                    Recently created notes
                  </Text>
                </View>
              )}
            </View>

            {/* Render notes by category */}
            {Object.keys(groupedNotes).map(category => (
              <View key={category} style={{marginBottom: space.m4}}>
                <View
                  style={{
                    ...commonStyles.rowHorzCenter,
                    marginBottom: space.m2,
                  }}>
                  {/* Use the mapped icon based on the category */}
                  {categoryIconMap[category]}
                  <Text style={homeStyles.noteTitle}>{category}</Text>
                </View>
                {/* Display the latest 3 notes for each category in descending order */}
                {getLatestNotes(groupedNotes[category]).map((note, index) => (
                  <NoteItem key={index} note={note} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
