import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const App = () => {
   return (
      <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text}>
               Button
            </Text>
         </TouchableOpacity>
      </View>
   )
}
export default App

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red',
   }
})