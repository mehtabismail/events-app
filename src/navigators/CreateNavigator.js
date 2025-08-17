import { CreateEventContainer } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function CreateNavigator({ navigation, route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CreateEventContainer"
        component={CreateEventContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default CreateNavigator;
