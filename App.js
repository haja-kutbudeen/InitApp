import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import ForgotScreen from './components/ForgotScreen';
import RegisterScreen from './components/RegisterScreen';
import DashboardScreen from './components/DashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{   // <Stack.Navigator initialRouteName="Splash Screen">
            header: () => null
        }} >
        <Stack.Screen name="Splash Screen" component={SplashScreen} 
        // options = {{
        //     header: () => null
        // }} 
        />
        <Stack.Screen name="Login Screen" component={LoginScreen}  />
        <Stack.Screen name="Forgot Screen" component={ForgotScreen} />
        <Stack.Screen name="Register Screen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard Screen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;