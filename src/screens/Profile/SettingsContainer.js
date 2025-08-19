import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import { CustomHeader, ScreenWrapper } from '@/components';
import { mS } from '@/utils/functions';

const SettingsContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme();
  const dispatch = useDispatch();

  const SectionTitle = ({ title }) => (
    <Text style={[Fonts.PLUSJAKARTASANS_BOLD_18, Gutters.smallTMargin, Gutters.tinyBMargin]}>
      {title}
    </Text>
  );

  const IconBox = ({ children }) => (
    <View
      style={[
        Layout.center,
        {
          width: mS(52),
          height: mS(52),
          borderRadius: mS(12),
          backgroundColor: Colors.secondary_background,
        },
      ]}
    >
      {children}
    </View>
  );

  const Row = ({ icon, title, subtitle, onPress }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[Layout.row, Layout.alignItemsCenter, Gutters.xTinyVPadding]}
    >
      <IconBox>{icon}</IconBox>
      <View style={[Layout.fill, Gutters.xTinyLMargin]}>
        <Text style={[Fonts.PLUSJAKARTASANS_MEDIUM_16]}>{title}</Text>
        {subtitle ? (
          <Text style={[Fonts.PLUSJAKARTASANS_REGULAR_14]}>{subtitle}</Text>
        ) : null}
      </View>
      <Images.svg.ArrowRight.default />
    </TouchableOpacity>
  );

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.background }]}>
      <View style={{ paddingHorizontal: mS(15) }}>
        <CustomHeader backButton centerText={'Settings'} />
      </View>
      <ScreenWrapper>
        <SectionTitle title="Account" />
        <Row
          title="Account Information"
          subtitle="Manage your profile information"
          icon={<Images.svg.SettingAccountInfo.default />}
          onPress={() => {}}
        />

        <SectionTitle title="Preferences" />
        <Row
          title="Notifications"
          subtitle="Customize your notification settings"
          icon={<Images.svg.SettingNotifications.default />}
          onPress={() => {}}
        />
        <Row
          title="Privacy Settings"
          subtitle="Control your profile visibility and interactions"
          icon={<Images.svg.SettingPrivacySetting.default />}
          onPress={() => {}}
        />
        <Row
          title="App Preferences"
          subtitle="Choose your preferred language and app theme"
          icon={<Images.svg.SettingAppPreferences.default />}
          onPress={() => {}}
        />

        <SectionTitle title="Support" />
        <Row
          title="Help & Support"
          icon={<Images.svg.SettingHelpSupport.default />}
          onPress={() => {}}
        />
        <Row title="About" icon={<Images.svg.SettingAbout.default />} onPress={() => {}} />
      </ScreenWrapper>
    </View>
  );
};

export default SettingsContainer;