import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import IconArrow from '../images/arrow.svg';
import {settingsStyles} from '../styles/settings';
import {commonStyles} from '../styles/common';
import {space} from '../styles/space';

const LinkButton = ({onPress, icon, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={settingsStyles.linkButton}>
      {icon}
      <Text style={commonStyles.titleTextMd}>{text}</Text>
      <IconArrow width={18} height={18} style={{marginLeft: space.m4}} />
    </TouchableOpacity>
  );
};

export default LinkButton;
