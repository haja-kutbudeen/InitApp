import React, { Component } from 'react';
import { TextInput, View } from 'react-native'; 
 
export default class myApp extends Component { 
  render() { 
    return ( 
      <View>
        <TextInput placeholder="Default" style={{ borderBottomWidth: 1 }} keyboardType={"default"} /> 
        <TextInput placeholder="numeric" style={{ borderBottomWidth: 1 }} keyboardType={"numeric"} /> 
        <TextInput placeholder="email-address" style={{ borderBottomWidth: 1 }} keyboardType={"email-address"} /> 
        <TextInput placeholder="phone-pad" style={{ borderBottomWidth: 1 }} keyboardType={"phone-pad"} /> 
        <TextInput placeholder="number-pad" style={{ borderBottomWidth: 1 }} keyboardType={"number-pad"} /> 
        <TextInput placeholder="decimal-pad" style={{ borderBottomWidth: 1 }} keyboardType={"decimal-pad"} /> 
      </View> 
    ); 
  } 
}