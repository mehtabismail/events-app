import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@/hooks';
import { ActivityContainer, MyEventsContainer } from '../screens';

const Stack = createNativeStackNavigator();

function MyEventsNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MyEventsContainer"
        component={MyEventsContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyEventsNavigator;
