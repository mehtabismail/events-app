import { View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CustomScreenWrapper = ({ children, customStyle }) => {
  const { Layout, Colors } = useTheme();

  return (
    // <View style={[Layout.screen]}>
    <KeyboardAwareScrollView
      style={[Layout.screen, customStyle]}
      showsVerticalScrollIndicator={false}
    >
      {children ? children : <Text>Page Content not Exist</Text>}
    </KeyboardAwareScrollView>
    // </View>
  );
};

export default CustomScreenWrapper;
