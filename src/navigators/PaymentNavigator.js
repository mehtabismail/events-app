import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentContainer } from '../screens';

const Stack = createNativeStackNavigator();

function PaymentNavigator({ navigation, route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PaymentsContainer"
        component={PaymentContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default PaymentNavigator;
