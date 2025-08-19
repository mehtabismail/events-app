import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { ActivityContainer, FriendsContainer } from '../screens';

const Stack = createNativeStackNavigator();

function FriendsNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FriendsContainer"
        component={FriendsContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default FriendsNavigator;
