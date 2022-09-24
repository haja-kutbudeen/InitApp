import React, {useEffect} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'

const ForgotScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
        header: () =>
        <View style={{ backgroundColor: 'black', height: 0}} >
          <TouchableOpacity 
              onPress = {
                  () => navigation.replace('Login Screen')
              }
              style={{ paddingTop: 60, paddingLeft: 20 }}
              >
              <Image style={styles.backIco} source={require("../assets/arrow.png")} />
            </TouchableOpacity>
        </View>
    })
  }, [])

  return (
    <View style = {styles.container}>
          <View style={styles.content}>
              <Image style={styles.image} source={require("../assets/forgot.png")} />
              <Text style={styles.header}>Please Enter Your Email Address To Receive a Verification Code</Text>
               <View style={styles.form}>
                  <TextInput
                     style={styles.TextInput}
                     placeholder="Email"
                     placeholderTextColor="#8e8e8e"
                  />
               </View>
               <TouchableOpacity 
                  onPress = {
                      () => forgot()
                  }
                  style={styles.loginBtn}>
                  <Text style={styles.loginText} 
                  >Submit</Text>
               </TouchableOpacity>
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
    marginTop: -100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 175,
    height: 175,
  },
  form: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    width: 350,
    height: 45,
    marginBottom: 20,
  },
  header: {
    color: 'white',
    fontSize: 19,
    lineHeight: 29,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold'
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
  backIco: {
    width: 20,
    height: 20,
    tintColor: '#FED428' 
  },
  backBtn: {
    alignItems: 'baseline',
    alignSelf: 'baseline',
    justifyContent: 'flex-end'
  }
});

export default ForgotScreen;