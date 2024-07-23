
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TAbNavigator';
import ReceiptScreen from '../screens/UserReceiptScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
        options={{
          headerStyle: { backgroundColor: '#007BFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
}
