import React, {useState} from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LinkButton from '../components/LinkButton';
import IconSupport from '../images/icon_support.svg';
import IconAgreement from '../images/icon_agreement.svg';
import IconPrivacy from '../images/icon_privacy.svg';
import IconAbout from '../images/icon_about.svg';
import {commonStyles} from '../styles/common';
import {settingsStyles} from '../styles/settings';
import {space} from '../styles/space';
import {useNotes} from '../context/NotesContext';

const SettingsScreen = () => {
  const handleOpenLink = async url => {
    await Linking.openURL(url);
  };

  const {deleteAllNotes} = useNotes();
  const [showPopout, setShowPopout] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1)); // Set initial value to 1

  const fadeIn = () => {
    setShowPopout(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShowPopout(false); // Hide the popout after fade-out
    });
  };

  const handleDeleteAllNotes = () => {
    Alert.alert(
      'Delete All Notes',
      'Are you sure you want to delete all notes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Call the deleteAllNotes function
            deleteAllNotes();
            fadeIn();

            // Hide the popout after 3 seconds
            setTimeout(() => {
              fadeOut();
            }, 3000);
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      style={commonStyles.container}>
      <View style={{padding: space.p4}}>
        {/* Link buttons with icons to open external links */}
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
          onPress={() => handleOpenLink('https://www.yahoo.sg')}
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
          onPress={() => handleOpenLink('https://www.facebook.com')}
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
          onPress={() => handleOpenLink('https://www.instagram.com')}
          icon={
            <IconAbout width={24} height={24} style={{marginRight: space.m3}} />
          }
          text="About Us"
        />
      </View>
      <View style={commonStyles.bottomContainer}>
        {/* Button to delete all notes */}
        <TouchableOpacity
          onPress={handleDeleteAllNotes}
          style={commonStyles.bottomContainerButton}>
          <Text style={commonStyles.textWhite}>Delete All Notes</Text>
        </TouchableOpacity>
      </View>

      {/* Popout message */}
      {showPopout && (
        <Animated.View
          style={{...settingsStyles.popupPosition, opacity: fadeAnim}}>
          <LinearGradient
            colors={['#C724E1', '#4E22CC']}
            style={settingsStyles.popupContainer}>
            <Text style={settingsStyles.popupText}>
              All notes have been cleared!
            </Text>
          </LinearGradient>
        </Animated.View>
      )}
    </LinearGradient>
  );
};

export default SettingsScreen;
