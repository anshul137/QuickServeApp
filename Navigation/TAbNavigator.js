
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/UserOrderScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name == "My Home Page") {
          return <Entypo name="home" size={24} color="black" />;
        }
        if (route.name === "Account Settings") {
          return <FontAwesome name="th-list" size={24} color="black" />;
        }
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
      <Tab.Screen name="Order Here" component={OrderScreen} />
      <Tab.Screen name="Order History" component={OrderHistoryScreen} />
    </Tab.Navigator>
  );
}
