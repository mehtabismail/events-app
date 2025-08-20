import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { EditProfileContainer, SettingsContainer } from '@/screens';

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SettingsContainer"
        component={SettingsContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileContainer"
        component={EditProfileContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
