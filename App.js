import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecentScreen from './screens/RecentScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6d' },
          headerTintColor: 'white',
        }}
      >
        <BottomTab.Screen name="Recent" component={RecentScreen} options={{}} />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpensesScreen}
          options={{}}
        />
        {/* <View style={styles.container}>
          <RecentScreen />
          <StatusBar style="auto" />
        </View> */}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
