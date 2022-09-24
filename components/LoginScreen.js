import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'

const LoginScreen = ( {navigation} ) => {
    const login = () => {
        navigation.replace('Dashboard Screen');
        // alert('Username/Password not valid!')
    }
    const forgot = () => {
        navigation.replace('Forgot Screen');
        // alert('Password send to your email!')
    }
    const register = () => {
        navigation.replace('Register Screen');
        // alert('Account created successfully!')
    }
    return (
        <View style = {styles.container}>
          <View style={styles.content}>
               <Image style={styles.image} source={require("../assets/logo.png")} />
               <View style={styles.form}>
                  <TextInput
                     style={styles.TextInput}
                     placeholder="Email"
                     placeholderTextColor="#8e8e8e"
                  />
               </View>
               <View style={styles.form}>
                  <TextInput
                     style={styles.TextInput}
                     placeholder="Password"
                     placeholderTextColor="#8e8e8e"
                     secureTextEntry={true}
                  />
               </View>
               <TouchableOpacity 
                  onPress = {
                      () => login()
                  }
                  style={styles.loginBtn}>
                  <Text style={styles.loginText} 
                  >Login</Text>
               </TouchableOpacity>
          </View>
          <View style={styles.info} >
                <View>
                <TouchableOpacity>
                          <Text 
                          onPress = {
                            () => forgot()
                          } 
                          style={styles.forgotBtn} >Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                        <Text 
                        onPress = {
                            () => register()
                        }
                        style={styles.createBtn} >Dont have account?</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      backgroundColor: 'black'
  },
  content: {
      alignItems: "center",
      justifyContent: "center",
  },
  info: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 20,
      justifyContent: 'space-around',
      alignSelf: 'space-around',
      alignItems: 'space-around',
  },
  forgotBtn: {
        fontSize: 13,
        color: 'white',
  },
  createBtn: {
        fontSize: 13,
        color: 'white',
  },
  image: {
        marginBottom: 40,
        width: 250,
        height: 53,
  },
  form: {
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        width: 350,
        height: 45,
        marginBottom: 20,
  },
  TextInput: {
        height: 45,
        marginLeft: 15,
  },
  loginBtn: {
        width: 350,
        borderRadius: 5,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        backgroundColor: '#FED428',
  },
  loginText: {
        color: 'black'
  },
});

export default LoginScreen;