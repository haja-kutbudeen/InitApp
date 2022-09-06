import React from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native'

const Home = (props) => {
   return (
      <View style = {styles.container}>
         <TouchableNativeFeedback>
            <Text style = {styles.text}>
               Submit
            </Text>
         </TouchableNativeFeedback>
      </View>
   )
}
export default Home

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'green',
      backgroundColor: 'red'
   }
})