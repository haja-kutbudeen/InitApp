import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

  setTimeout(function () {
    navigation.replace('Login Screen');
  }, 2000);

  return (
    <View style={styles.splash}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
    </View>
  );
  
};

const styles = StyleSheet.create({
  splash: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    height: "100%",
    backgroundColor: 'black'
  },
  image: {
    width: '60%',
    height: 60,
  },
});

export default SplashScreen;