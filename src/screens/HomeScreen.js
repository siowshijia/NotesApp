import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconClock from '../images/icon_clock.svg';
import IconPen from '../images/icon_pen.svg';
import IconArrow from '../images/arrow.svg';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={{flex: 1}}>
      <ScrollView>
        <View style={{paddingTop: 20, paddingBottom: 120}}>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <IconClock width={20} height={20} />
              <Text
                style={{
                  marginLeft: 10,
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 16,
                }}>
                Recently created notes
              </Text>
            </View>

            <View style={{marginBottom: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <IconPen width={20} height={20} />
                <Text style={{marginLeft: 10, color: '#fff', fontSize: 16}}>
                  Work and Study
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255, 0.12)',
                  borderWidth: 1,
                  borderRadius: 16,
                  marginBottom: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 14}}>
                  Overview of basic computer networking knowledge
                </Text>
                <IconArrow width={20} height={20} style={{marginLeft: 20}} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255, 0.12)',
                  borderWidth: 1,
                  borderRadius: 16,
                }}>
                <Text style={{color: '#fff', fontSize: 14}}>
                  How to calculate float multiplication and division in JavaScript
                </Text>
                <IconArrow width={20} height={20} style={{marginLeft: 20}} />
              </View>
            </View>
            
            <View style={{marginBottom: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <IconPen width={20} height={20} />
                <Text style={{marginLeft: 10, color: '#fff', fontSize: 16}}>
                  Work and Study
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255, 0.12)',
                  borderWidth: 1,
                  borderRadius: 16,
                }}>
                <Text style={{color: '#fff', fontSize: 14}}>
                  Overview of basic computer networking knowledge
                </Text>
                <IconArrow width={18} height={18} style={{marginLeft: 20}} />
              </View>
            </View>
            
            <View style={{marginBottom: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <IconPen width={20} height={20} />
                <Text style={{marginLeft: 10, color: '#fff', fontSize: 16}}>
                  Work and Study
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255, 0.12)',
                  borderWidth: 1,
                  borderRadius: 16,
                }}>
                <Text style={{color: '#fff', fontSize: 14}}>
                  Overview of basic computer networking knowledge
                </Text>
                <IconArrow width={18} height={18} style={{marginLeft: 20}} />
              </View>
            </View>
            
            <View style={{marginBottom: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <IconPen width={20} height={20} />
                <Text style={{marginLeft: 10, color: '#fff', fontSize: 16}}>
                  Work and Study
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255, 0.12)',
                  borderWidth: 1,
                  borderRadius: 16,
                }}>
                <Text style={{color: '#fff', fontSize: 14}}>
                  Overview of basic computer networking knowledge
                </Text>
                <IconArrow width={18} height={18} style={{marginLeft: 20}} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
