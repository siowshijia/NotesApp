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
            <View
              style={
                {
                  // position: 'absolute',
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  // bottom: 0,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // // width: 36,
                  // // height: 36
                }
              }>
              <TouchableOpacity
                style={{
                  zIndex: 10,
                }}
                onPress={() => navigation.navigate('NewNote')}>
                <IconArrow width={36} height={36} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...commonStyles.rowHorzCenter,
                marginBottom: space.m6,
              }}>
              <IconClock width={20} height={20} />
              <Text style={homeStyles.mainTitle}>Recently created notes</Text>
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
                {groupedNotes[category].map(note => (
                  <NoteItem key={note.id} note={note} />
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
