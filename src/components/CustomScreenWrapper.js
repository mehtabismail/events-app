import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';

const CustomScreenWrapper = ({ children, customStyle }) => {
  const { Layout, Colors } = useTheme();

  return (
    <View style={[Layout.screen, customStyle]}>
      {children ? children : <Text>Page Content not Exist</Text>}
    </View>
  );
};

export default CustomScreenWrapper;
