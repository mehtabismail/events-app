import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { ActivityContainer } from '../screens';

const Stack = createNativeStackNavigator();

function ChatNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ActivityContainer"
        component={ActivityContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ChatNavigator;
