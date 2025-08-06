import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import GetStartedScreen from './screens/(auth)/GetStartedScreen';




// Create navigator
const AuthStack = createStackNavigator();



function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="GetStarted" component={GetStartedScreen} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <AuthNavigator />
    </>
  );
}