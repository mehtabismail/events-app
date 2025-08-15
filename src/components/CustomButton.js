import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@/hooks';

const CustomButton = ({onPress, btnText, customStyle}) => {
  const {Layout, Colors, Gutters, Fonts} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress()}
      style={[
        Layout.fullWidth,
        Layout.center,
        Gutters.darkShadow,
        {height: 48, backgroundColor: Colors.primary, borderRadius: 48 / 2},
      ]}>
      <Text
        style={[
          Fonts.nunito16,
          Fonts.mediumWeight,
          {color: Colors.white},
          customStyle,
        ]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
