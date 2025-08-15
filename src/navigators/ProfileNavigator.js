import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import {
  AboutUsContainer,
  ActivitiesContainer,
  BlockedListContainer,
  ChatContainer,
  CheckVersionContainer,
  DeviceManagerContainer,
  EarnMoneyContainer,
  EditProfileContainer,
  FamilyContainer,
  FansGroupContainer,
  FansGroupSettingContainer,
  FansListContainer,
  FeedbackContainer,
  FollowingsListContainer,
  FriendsListContainer,
  FunBiggoContainer,
  GeneralSettingContainer,
  HistoryContainer,
  ItemBagContainer,
  LevelContainer,
  MyProfileContainer,
  MyVipContainer,
  OtpContainer,
  PrivacyContainer,
  PrivacyPolicyContainer,
  ProfileContainer,
  RankingContainer,
  ResetPasswordContainer,
  SensitiveContentContainer,
  SettingsContainer,
  TaskCenterContainer,
  WalletContainer,
  WalletDetailContainer,
} from '@/screens';

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ProfileContainer"
        component={ProfileContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsContainer"
        component={SettingsContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GeneralSettingContainer"
        component={GeneralSettingContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfileContainer"
        component={MyProfileContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileContainer"
        component={EditProfileContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatContainer"
        component={ChatContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordContainer"
        component={ResetPasswordContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendsListContainer"
        component={FriendsListContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FollowingsListContainer"
        component={FollowingsListContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FansListContainer"
        component={FansListContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WalletContainer"
        component={WalletContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ItemBagContainer"
        component={ItemBagContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskCenterContainer"
        component={TaskCenterContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivitiesContainer"
        component={ActivitiesContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PrivacyContainer" component={PrivacyContainer} />
      <Stack.Screen
        name="BlockedListContainer"
        component={BlockedListContainer}
      />
      <Stack.Screen
        name="DeviceManagerContainer"
        component={DeviceManagerContainer}
      />
      <Stack.Screen name="AboutUsContainer" component={AboutUsContainer} />
      <Stack.Screen
        name="CheckVersionContainer"
        component={CheckVersionContainer}
      />
      <Stack.Screen
        name="SensitiveContentContainer"
        component={SensitiveContentContainer}
      />
      <Stack.Screen name="FunBiggoContainer" component={FunBiggoContainer} />
      <Stack.Screen name="HistoryContainer" component={HistoryContainer} />
      <Stack.Screen
        name="WalletDetailContainer"
        component={WalletDetailContainer}
      />
      <Stack.Screen name="MyVipContainer" component={MyVipContainer} />
      <Stack.Screen name="FamilyContainer" component={FamilyContainer} />
      <Stack.Screen name="EarnMoneyContainer" component={EarnMoneyContainer} />
      <Stack.Screen name="FeedbackContainer" component={FeedbackContainer} />
      <Stack.Screen name="FansGroupContainer" component={FansGroupContainer} />
      <Stack.Screen
        name="FansGroupSettingContainer"
        component={FansGroupSettingContainer}
      />
      <Stack.Screen name="RankingContainer" component={RankingContainer} />
      <Stack.Screen name="LevelContainer" component={LevelContainer} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
