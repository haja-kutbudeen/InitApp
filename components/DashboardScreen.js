import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Settings } from './TabsScreen'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const BottomTabComponent = () => {
  return(
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0 },
      headerStyle: { height: 85, backgroundColor: 'black' }
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}


const DrawerComponent = () => {
  return(
      <Drawer.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0 },
        headerStyle: { height: 85, backgroundColor: 'black' }
      }}>
        <Drawer.Screen name='dashboard' component={Home} />
        <Drawer.Screen name='profile' component={Profile} />
        <Drawer.Screen name='settings' component={Settings} />
      </Drawer.Navigator>
  )
}


const DashboardScreen = ({ navigation }) => {
  return (
      <View style = {styles.container}>

          <Stack.Navigator>
              <Stack.Screen name='Drawer' component={DrawerComponent} options = {{
                header: () => null
              }} />
              <Stack.Screen name='Tabs' component={BottomTabComponent} options = {{
                header: () => null
              }} />
          </Stack.Navigator>

      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: "100%",
  },
  tabs: {
    backgroundColor: 'black'
  },
  title: {
    color: 'white'
  }
});

export default DashboardScreen;