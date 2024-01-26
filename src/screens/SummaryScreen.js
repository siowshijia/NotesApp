import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyles} from '../styles/common';
import {summaryStyles} from '../styles/summary';
import {useNotes} from '../context/NotesContext';
import {useNavigation} from '@react-navigation/native';

const getCategoryIconSource = category => {
  switch (category.toLowerCase()) {
    case 'work and study':
      return require('../images/icon_cat_work.png');
    case 'home life':
      return require('../images/icon_cat_home.png');
    case 'health and wellness':
      return require('../images/icon_cat_health.png');
    default:
      return require('../images/icon_cat_work.png');
  }
};

const SummaryScreen = () => {
  const navigation = useNavigation();
  const {notes} = useNotes();
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    // Calculate the number of notes for each category
    const counts = notes.reduce((acc, note) => {
      acc[note.category] = (acc[note.category] || 0) + 1;
      return acc;
    }, {});

    setCategoryCounts(counts);
  }, [notes]);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={commonStyles.container}>
      <Image
        source={require('../images/bg_robot.png')}
        style={summaryStyles.backgroundImage}
      />
      <ScrollView>
        <View style={summaryStyles.scrollView}>
          <View style={summaryStyles.contentContainer}>
            {Object.keys(categoryCounts).map(category => (
              <View key={category} style={summaryStyles.categoryContainer}>
                <View style={commonStyles.rowHorzCenter}>
                  <Image
                    source={getCategoryIconSource(category)}
                    style={summaryStyles.categoryIcon}
                  />
                  <Text style={commonStyles.titleTextMd}>{category}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={summaryStyles.detailButton}>
                    <Text style={summaryStyles.detailButtonText}>Detail</Text>
                  </TouchableOpacity>
                </View>
                <View style={summaryStyles.categoryDetails}>
                  <Text style={summaryStyles.categoryDetailsText}>
                    {`This topic has a total of ${categoryCounts[category]} ${
                      categoryCounts[category] === 1 ||
                      categoryCounts[category] === 0
                        ? 'record'
                        : 'records'
                    }.`}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SummaryScreen;
