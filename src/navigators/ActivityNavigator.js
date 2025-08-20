import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { ActivityContainer, CommentsContainer } from '../screens';

const Stack = createNativeStackNavigator();

function ActivityNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ActivityContainer"
        component={ActivityContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CommentsContainer"
        component={CommentsContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ActivityNavigator;
