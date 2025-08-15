import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Platform, StyleSheet, Text } from 'react-native';
import { useTheme } from '@/hooks';
import {
  ChatNavigator,
  GoLiveNavigator,
  HomeNavigator,
  ProfileNavigator,
  VideoNavigator,
} from '.';
import { Colors } from '@/theme/Variables';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { Colors, Layout, Gutters, Images, Fonts } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route, focused }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        unmountOnBlur: true,
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';

          return {
            display: ['EditProfileContainer'].includes(routeName)
              ? 'none'
              : 'flex',
            height: 80,
            paddingHorizontal: 10,
            paddingTop: 0,
            backgroundColor: Colors.background,
            borderTopWidth: 0,
            ...Gutters.darkShadow,
          };
        })(route),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ route, focused }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={[styles.tabBarStyle]}>
                <View
                  style={[
                    Layout.center,
                    Gutters.xTinyHPadding,
                    Gutters.tinyVPadding,
                    Gutters.xTinyRadius,
                    {
                      backgroundColor: focused
                        ? Colors.primary
                        : Colors.transparent,
                    },
                  ]}
                >
                  {focused ? (
                    <Images.svg.HomeTabFilled.default />
                  ) : (
                    <Images.svg.HomeTab.default />
                  )}
                  {!!focused && (
                    <Text
                      style={[
                        Fonts.nunito14,
                        {
                          color: focused ? Colors.white : Colors.text_5A6F82,
                          fontWeight: focused ? '600' : '400',
                        },
                      ]}
                    >
                      Live
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={[styles.tabBarStyle]}>
                <View
                  style={[
                    Layout.center,
                    Gutters.xTinyHPadding,
                    Gutters.tinyVPadding,
                    Gutters.xTinyRadius,
                    {
                      backgroundColor: focused
                        ? Colors.primary
                        : Colors.transparent,
                    },
                  ]}
                >
                  {focused ? (
                    <Images.svg.ChatTabFilled.default />
                  ) : (
                    <Images.svg.ChatTab.default />
                  )}
                  {focused && (
                    <Text
                      style={[
                        Fonts.nunito14,
                        {
                          color: focused ? Colors.white : Colors.text_5A6F82,
                          fontWeight: focused ? '600' : '400',
                        },
                      ]}
                    >
                      Chat
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={({ route, focused }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={[styles.tabBarStyle]}>
                <View
                  style={[
                    Layout.center,
                    Gutters.xTinyHPadding,
                    Gutters.tinyVPadding,
                    Gutters.xTinyRadius,
                    {
                      backgroundColor: focused
                        ? Colors.primary
                        : Colors.transparent,
                    },
                  ]}
                >
                  {focused ? (
                    <Images.svg.ProfileTabFilled.default />
                  ) : (
                    <Images.svg.ProfileTab.default />
                  )}
                  {focused && (
                    <Text
                      style={[
                        Fonts.nunito14,
                        {
                          color: focused ? Colors.white : Colors.text_5A6F82,
                          fontWeight: focused ? '600' : '400',
                        },
                      ]}
                    >
                      Profile
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.background,
  },
});
