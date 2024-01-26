import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyles} from '../styles/common';
import {summaryStyles} from '../styles/summary';

const SummaryScreen = () => {
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
            <View style={summaryStyles.categoryContainer}>
              <View style={commonStyles.rowHorzCenter}>
                <Image
                  source={require('../images/icon_cat_work.png')}
                  style={summaryStyles.categoryIcon}
                />
                <Text style={commonStyles.titleTextMd}>Work and study</Text>
                <TouchableOpacity style={summaryStyles.detailButton}>
                  <Text style={summaryStyles.detailButtonText}>Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={summaryStyles.categoryDetails}>
                <Text style={summaryStyles.categoryDetailsText}>
                  This topic has a total of 50 records.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SummaryScreen;
