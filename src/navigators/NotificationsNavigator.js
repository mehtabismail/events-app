import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { ChatContainer, ChatScreen, NotificationContainer } from '../screens';

const Stack = createNativeStackNavigator();

function NotificationsNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="NotificationsContainer"
        component={NotificationContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default NotificationsNavigator;
