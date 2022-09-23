import React from "react";
import { View, StyleSheet, TouchableOpacity, Button, Text, SafeAreaView } from 'react-native';
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard, Profile, Settings } from './components/Tabs'
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTabsComp = () => {
  return <Tab.Navigator>
    <Tab.Screen options={{ tabBarIcon: () => <Text>D</Text> }} name='dashboard' component={Dashboard} />
    <Tab.Screen options={{ tabBarIcon: () => <Text style={{ backgroundColor: 'blue', padding: 10, borderRadius: 25, color: 'white', overflow: 'hidden' }}>P</Text> }} name='profile' component={Profile} />
    <Tab.Screen options={{ tabBarIcon: ({
      focused,
      color,
      size
    }) => <Text style={{ color: focused? 'red' : 'white' }}>S</Text> }} name='settings' component={Settings} />
  </Tab.Navigator>
}

const HomeDrawerComp = (props) => {
  return <Drawer.Navigator screenOptions={{
    header: () => <View style={{ height: 45, flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} >
        <Text> ☰ </Text>
      </TouchableOpacity>
      <Text style={{ flex:1, textAlign: 'center', alignSelf: 'center' }}>{props.route.name}</Text>
    </View>
  }}>
    <Drawer.Screen name='dashboard' component={Dashboard} />
    <Drawer.Screen name='profile' component={Profile} />
    <Drawer.Screen name='settings' component={Settings} />
  </Drawer.Navigator>
}

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle} >
      <View style={styles.rootView} >
          <NavigationContainer>
            {/* <Navigator screenOptions={{ header: () => null }} > */}
            <Stack.Navigator screenOptions={{
              headerRight: () => <Button title='Click' />,
              headerTitle: () => <Text> Loading </Text>,
              header: (props) =>
              <View style={{ height: 60, backgroundColor: 'lightgrey'}} >
                {props.options.headerRight()}
                {props.options.headerTitle()}
              </View>
            }} >
              <Stack.Screen name='splashScreen' component={SplashScreen} options={{
                // headerRight: () => <Button title='Click' />,
                // headerTitle: () => <Text> Splash Screen</Text>
                }} />
              <Stack.Screen name='loginScreen' component={LoginScreen} />
              <Stack.Screen name='homeTabs' component={HomeTabsComp} options = {{
                header: () => null
              }} />
              <Stack.Screen name='homeDrawer' component={HomeDrawerComp} options = {{
                header: () => null
              }} />
            </Stack.Navigator>
          </NavigationContainer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: 'skyblue',
    flex:1
  },
  rootView: {
    backgroundColor: 'white',
    flex:1
  }
})

export default App;

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import { AuthContext } from "./Context";
// import {
//   SignIn,
//   CreateAccount,
//   Search,
//   Home,
//   Details,
//   Search2,
//   Profile,
//   Splash
// } from "./Screens";

// const AuthStack = createStackNavigator();
// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen
//       name="SignIn"
//       component={SignIn}
//       options={{ title: "Sign In" }}
//     />
//     <AuthStack.Screen
//       name="CreateAccount"
//       component={CreateAccount}
//       options={{ title: "Create Account" }}
//     />
//   </AuthStack.Navigator>
// );

// const Tabs = createBottomTabNavigator();
// const HomeStack = createStackNavigator();
// const SearchStack = createStackNavigator();

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={Home} />
//     <HomeStack.Screen
//       name="Details"
//       component={Details}
//       options={({ route }) => ({
//         title: route.params.name
//       })}
//     />
//   </HomeStack.Navigator>
// );

// const SearchStackScreen = () => (
//   <SearchStack.Navigator>
//     <SearchStack.Screen name="Search" component={Search} />
//     <SearchStack.Screen name="Search2" component={Search2} />
//   </SearchStack.Navigator>
// );

// const ProfileStack = createStackNavigator();
// const ProfileStackScreen = () => (
//   <ProfileStack.Navigator>
//     <ProfileStack.Screen name="Profile" component={Profile} />
//   </ProfileStack.Navigator>
// );

// const TabsScreen = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen name="Home" component={HomeStackScreen} />
//     <Tabs.Screen name="Search" component={SearchStackScreen} />
//   </Tabs.Navigator>
// );

// const Drawer = createDrawerNavigator();
// const DrawerScreen = () => (
//   <Drawer.Navigator initialRouteName="Profile">
//     <Drawer.Screen name="Home" component={TabsScreen} />
//     <Drawer.Screen name="Profile" component={ProfileStackScreen} />
//   </Drawer.Navigator>
// );

// const RootStack = createStackNavigator();
// const RootStackScreen = ({ userToken }) => (
//   <RootStack.Navigator headerShown='false'>
//     {userToken ? (
//       <RootStack.Screen
//         name="App"
//         component={DrawerScreen}
//         options={{
//           animationEnabled: false
//         }}
//       />
//     ) : (
//       <RootStack.Screen
//         name="Auth"
//         component={AuthStackScreen}
//         options={{
//           animationEnabled: false
//         }}
//       />
//     )}
//   </RootStack.Navigator>
// );

// export default () => {
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [userToken, setUserToken] = React.useState(null);

//   const authContext = React.useMemo(() => {
//     return {
//       signIn: () => {
//         setIsLoading(false);
//         setUserToken("asdf");
//       },
//       signUp: () => {
//         setIsLoading(false);
//         setUserToken("asdf");
//       },
//       signOut: () => {
//         setIsLoading(false);
//         setUserToken(null);
//       }
//     };
//   }, []);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   if (isLoading) {
//     return <Splash />;
//   }

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <RootStackScreen userToken={userToken} />
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };