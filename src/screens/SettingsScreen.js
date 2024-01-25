import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconSupport from '../images/icon_support.svg';
import IconAgreement from '../images/icon_agreement.svg';
import IconPrivacy from '../images/icon_privacy.svg';
import IconAbout from '../images/icon_about.svg';
import IconArrow from '../images/arrow.svg';

const SettingsScreen = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={{flex: 1}}>
      <ScrollView>
        <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
          <TouchableOpacity
            onPress={{}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 15,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.12)',
            }}>
            <IconSupport width={24} height={24} style={{marginRight: 15}} />
            <Text style={{color: '#fff', fontSize: 16, flex: 1}}>
              Online Customer
            </Text>
            <IconArrow width={18} height={18} style={{marginLeft: 20}} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={{}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 15,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.12)',
            }}>
            <IconAgreement width={24} height={24} style={{marginRight: 15}} />
            <Text style={{color: '#fff', fontSize: 16, flex: 1}}>
              User Agreement
            </Text>
            <IconArrow width={18} height={18} style={{marginLeft: 20}} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={{}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 15,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.12)',
            }}>
            <IconPrivacy width={24} height={24} style={{marginRight: 15}} />
            <Text style={{color: '#fff', fontSize: 16, flex: 1}}>
              Privacy Policy
            </Text>
            <IconArrow width={18} height={18} style={{marginLeft: 20}} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={{}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 15,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.12)',
            }}>
            <IconAbout width={24} height={24} style={{marginRight: 15}} />
            <Text style={{color: '#fff', fontSize: 16, flex: 1}}>About Us</Text>
            <IconArrow width={18} height={18} style={{marginLeft: 20}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SettingsScreen;
