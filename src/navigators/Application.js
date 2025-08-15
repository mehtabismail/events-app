import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useSelector } from 'react-redux';
import { navigationRef } from './utils';
import { TabNavigator, AuthNavigator } from '@/navigators';
import { NavigationContainer } from '@react-navigation/native';

const Application = () => {
  const { Layout, NavigationTheme, Gutters, Colors } = useTheme();

  const { token } = useSelector(state => state.auth);

  return (
    <View style={[Layout.fullSize, { backgroundColor: Colors.background }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <View style={[Layout.fill, { backgroundColor: Colors.white }]}>
          {token ? <TabNavigator /> : <AuthNavigator />}
        </View>
      </NavigationContainer>
    </View>
  );
};

export default Application;
