import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { CustomIconBox } from '.';

const CustomRow = ({
  gap,
  icon,
  title,
  subtitle,
  onPress,
  customBoxStyle,
  customTitleStyle,
}) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        Layout.row,
        Layout.alignItemsCenter,
        !!gap ? gap : Gutters.xTinyVPadding,
      ]}
    >
      <CustomIconBox customStyle={customBoxStyle}>{icon}</CustomIconBox>
      <View style={[Layout.fill, Gutters.xTinyLMargin]}>
        <Text style={[Fonts.PLUSJAKARTASANS_MEDIUM_16, customTitleStyle]}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>{subtitle}</Text>
        ) : null}
      </View>
      <Images.svg.ArrowRight.default />
    </TouchableOpacity>
  );
};

export default CustomRow;
