import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@/hooks';
import {
  ActivityNavigator,
  CreateNavigator,
  HomeNavigator,
  NotificationsNavigator,
  ProfileNavigator,
} from '.';
import { useSelector } from 'react-redux';
import { mS } from '@/utils/functions';
import { NotificationContainer } from '@/screens';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { Colors, Images, Fonts } = useTheme();
  const { role } = useSelector(state => state.auth);

  return (
    <Tab.Navigator
      initialRouteName={role === 'user' ? 'Home' : 'My Events'}
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: {
          height: mS(75),
          backgroundColor: Colors.background,
          borderTopWidth: 0.5,
          borderTopColor: Colors.border,
        },
        tabBarLabelStyle: ({ focused }) => ({
          marginBottom: mS(6),
          color: focused ? Colors.text : Colors.secondary,
          ...Fonts.PLUSJAKARTASANS_MEDIUM_12,
        }),
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: mS(8),
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name={role === 'user' ? 'Home' : 'My Events'}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            role === 'user' ? (
              <Images.svg.HomeTab.default
                width={mS(24)}
                height={mS(32)}
                fill={focused ? Colors.text : Colors.secondary}
              />
            ) : (
              <Images.svg.CalenderTab.default
                width={mS(24)}
                height={mS(32)}
                fill={focused ? Colors.text : Colors.secondary}
              />
            ),
          tabBarLabel: role === 'user' ? 'Home' : 'My Events',
        }}
      />
      <Tab.Screen
        name={role === 'user' ? 'Activity' : 'Create'}
        component={role === 'user' ? ActivityNavigator : CreateNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            role === 'user' ? (
              <Images.svg.ActivityTab.default
                width={mS(24)}
                height={mS(32)}
                fill={focused ? Colors.text : Colors.secondary}
              />
            ) : (
              <Images.svg.CreateTab.default
                width={mS(24)}
                height={mS(32)}
                fill={focused ? Colors.text : Colors.secondary}
              />
            ),
          tabBarLabel: role === 'user' ? 'Activity' : 'Create',
        }}
      />
      <Tab.Screen
        name={role === 'user' ? 'Events' : 'Payments'}
        component={role === 'user' ? ActivityNavigator : CreateNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            role === 'user' ? (
              <Images.svg.CalenderTab.default
                width={mS(24)}
                height={mS(32)}
                fill={focused ? Colors.text : Colors.secondary}
              />
            ) : (
              <Images.svg.PaymentTab.default
                width={mS(24)}
                height={mS(32)}
                fill={focused ? Colors.text : Colors.secondary}
              />
            ),
          tabBarLabel: role === 'user' ? 'Events' : 'Payments',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Images.svg.NotificationTab.default
              width={mS(24)}
              height={mS(32)}
              fill={focused ? Colors.text : Colors.secondary}
            />
          ),
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Images.svg.ProfileTab.default
              width={mS(24)}
              height={mS(32)}
              fill={focused ? Colors.text : Colors.secondary}
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
