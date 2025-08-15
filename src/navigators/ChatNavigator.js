import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { ChatContainer, ChatScreen } from '../screens';

const Stack = createNativeStackNavigator();

function ChatNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ChatContainer"
        component={ChatContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ChatNavigator;
