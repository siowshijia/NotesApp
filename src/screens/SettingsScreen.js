import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LinkButton from '../components/LinkButton';
import IconSupport from '../images/icon_support.svg';
import IconAgreement from '../images/icon_agreement.svg';
import IconPrivacy from '../images/icon_privacy.svg';
import IconAbout from '../images/icon_about.svg';
import {commonStyles} from '../styles/common';
import {settingsStyles} from '../styles/settings';
import {space} from '../styles/space';

const SettingsScreen = () => {
  const handleOpenLink = async url => {
    await Linking.openURL(url);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={commonStyles.container}>
      <View style={{padding: space.p4}}>
        <LinkButton
          onPress={() => handleOpenLink('https://www.google.com')}
          icon={
            <IconSupport
              width={24}
              height={24}
              style={{marginRight: space.m3}}
            />
          }
          text="Online Customer"
        />

        <LinkButton
          onPress={() => handleOpenLink('https://www.google.com')}
          icon={
            <IconAgreement
              width={24}
              height={24}
              style={{marginRight: space.m3}}
            />
          }
          text="User Agreement"
        />

        <LinkButton
          onPress={() => handleOpenLink('https://www.google.com')}
          icon={
            <IconPrivacy
              width={24}
              height={24}
              style={{marginRight: space.m3}}
            />
          }
          text="Privacy Policy"
        />

        <LinkButton
          onPress={() => handleOpenLink('https://www.google.com')}
          icon={
            <IconAbout 
              width={24} 
              height={24} 
              style={{marginRight: space.m3}} 
            />
          }
          text="About Us"
        />
      </View>
      <View style={commonStyles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            handleOpenLink('https://www.google.com');
          }}
          style={commonStyles.bottomContainerButton}>
          <Text style={commonStyles.bottomContainerButtonText}>
            Delete All Notes
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SettingsScreen;
