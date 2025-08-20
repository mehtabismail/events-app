import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import {
  CustomHeader,
  CustomIconBox,
  CustomRow,
  ScreenWrapper,
} from '@/components';
import { mS } from '@/utils/functions';
import { logout } from '@/store/auth/AuthSlice';
import { persistor } from '@/store/store';

const SettingsContainer = ({ navigation }) => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const dispatch = useDispatch();

  const SectionTitle = ({ title }) => (
    <Text
      style={[
        Fonts.PLUSJAKARTASANS_BOLD_18,
        Gutters.smallTMargin,
        Gutters.tinyBMargin,
      ]}
    >
      {title}
    </Text>
  );

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <CustomHeader backButton centerText={'Settings'} />
      </View>
      <ScreenWrapper>
        <SectionTitle title="Account" />
        <CustomRow
          title="Account Information"
          subtitle="Manage your profile information"
          icon={<Images.svg.SettingAccountInfo.default />}
          onPress={() => navigation.navigate('EditProfileContainer')}
        />

        <SectionTitle title="Preferences" />
        <CustomRow
          title="Notifications"
          subtitle="Customize your notification settings"
          icon={<Images.svg.SettingNotifications.default />}
          onPress={() => {}}
        />
        <CustomRow
          title="Privacy Settings"
          subtitle="Control your profile visibility and interactions"
          icon={<Images.svg.SettingPrivacySetting.default />}
          onPress={() => {}}
        />
        {/* <Row
          title="App Preferences"
          subtitle="Choose your preferred language and app theme"
          icon={<Images.svg.SettingAppPreferences.default />}
          onPress={() => {}}
        />

        <SectionTitle title="Support" />
        <CustomRow
          title="Help & Support"
          icon={<Images.svg.SettingHelpSupport.default />}
          onPress={() => {}}
        />
        <Row title="About" icon={<Images.svg.SettingAbout.default />} onPress={() => {}} /> */}

        {/* Logout Section */}
        <SectionTitle title="Account Actions" />
        <CustomRow
          title="Log Out"
          subtitle="Sign out of your account"
          icon={<Images.svg.LogoutBlack.default />}
          onPress={async () => {
            dispatch(logout());
            await persistor.purge();
            await persistor.flush();
          }}
        />
      </ScreenWrapper>
    </View>
  );
};

export default SettingsContainer;
