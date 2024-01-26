import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconClock from '../images/icon_clock.svg';
import IconPen from '../images/icon_pen.svg';
import IconArrow from '../images/arrow.svg';
import {commonStyles} from '../styles/common';
import {space} from '../styles/space';
import {homeStyles} from '../styles/home';

const HomeScreen = () => {
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
              style={{
                ...commonStyles.rowHorzCenter,
                marginBottom: space.m6,
              }}>
              <IconClock width={20} height={20} />
              <Text style={homeStyles.mainTitle}>Recently created notes</Text>
            </View>

            <View style={{marginBottom: space.m6}}>
              <View
                style={{
                  ...commonStyles.rowHorzCenter,
                  marginBottom: space.m2,
                }}>
                <IconPen width={20} height={20} />
                <Text style={homeStyles.mainTitle}>Work and Study</Text>
              </View>
              <View style={homeStyles.noteItem}>
                <Text style={homeStyles.noteItemText}>
                  Overview of basic computer networking knowledge
                </Text>
                <IconArrow
                  width={20}
                  height={20}
                  style={{marginLeft: space.m4}}
                />
              </View>
              <View style={homeStyles.noteItem}>
                <Text style={homeStyles.noteItemText}>
                  How to calculate float multiplication and division in
                  JavaScript
                </Text>
                <IconArrow
                  width={20}
                  height={20}
                  style={{marginLeft: space.m4}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
