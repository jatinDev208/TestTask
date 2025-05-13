import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '../screens/SignIn';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
);

const AuthNavigator = ({ onLogin }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn">
      {(props) => <SignIn {...props} Login={onLogin} />}
    </Stack.Screen>
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={TabNavigator} />
  </Stack.Navigator>
);

// Main App
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {loggedIn ? (
        <MainNavigator />
      ) : (
        <AuthNavigator onLogin={() => setLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
};

export default App;
