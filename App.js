import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';

// Main App component wrapping StackNavigator with NavigationContainer
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
