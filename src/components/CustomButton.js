import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';

const CustomButton = ({ onPress, btnText, customStyle }) => {
  const { Layout, Colors, Gutters, Fonts } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress()}
      style={[
        Layout.fullWidth,
        Layout.center,
        Gutters.gapVMargin,
        // Gutters.darkShadow,
        {
          height: mS(48),
          borderRadius: mS(24),
          backgroundColor: Colors.primary,
        },
      ]}
    >
      <Text
        style={[
          Fonts.PLUSJAKARTASANS_BOLD_16,
          { color: Colors.white },
          customStyle,
        ]}
      >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
