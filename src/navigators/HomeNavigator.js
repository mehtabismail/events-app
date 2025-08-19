import {
  EventDetailContainer,
  HomeContainer,
  NotificationContainer,
} from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeNavigator({ navigation, route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventDetailContainer"
        component={EventDetailContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationContainer"
        component={NotificationContainer}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
