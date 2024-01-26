import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconSupport from '../images/icon_support.svg';
import IconAgreement from '../images/icon_agreement.svg';
import IconPrivacy from '../images/icon_privacy.svg';
import IconAbout from '../images/icon_about.svg';
import IconArrow from '../images/arrow.svg';

const SettingsScreen = ({navigation}) => {
  const handleOpenLink = async url => {
    await Linking.openURL(url);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={{flex: 1}}>
      <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
        <TouchableOpacity
          onPress={() => {
            handleOpenLink('https://www.google.com');
          }}
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
          onPress={() => {
            handleOpenLink('https://www.google.com');
          }}
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
          onPress={() => {
            handleOpenLink('https://www.google.com');
          }}
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
          onPress={() => {
            handleOpenLink('https://www.google.com');
          }}
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
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#1C0B37',
          position: 'absolute',
          height: 100,
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            handleOpenLink('https://www.google.com');
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            backgroundColor: '#F94695',
            borderRadius: 30,
            padding: 10,
          }}>
          <Text style={{color: '#fff'}}>Delete All Notes</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SettingsScreen;
