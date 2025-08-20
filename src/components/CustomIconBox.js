import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { mS } from '@/utils/functions';

const CustomIconBox = ({ children, customStyle, circle, count }) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  return (
    <View style={[Layout.center, { width: mS(!circle ? 52 : 40) }]}>
      <View
        style={[
          Layout.center,
          {
            width: mS(!circle ? 52 : 40),
            height: mS(!circle ? 52 : 40),
            borderRadius: mS(!circle ? 12 : 20),
            backgroundColor: Colors.secondary_background,
          },
          customStyle,
        ]}
      >
        {children}
      </View>
      {!!count && (
        <Text style={[Fonts.PLUSJAKARTASANS_MEDIUM_14]}>{count}</Text>
      )}
    </View>
  );
};

export default CustomIconBox;
