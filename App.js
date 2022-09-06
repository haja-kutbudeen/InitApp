import React, { Component } from 'react'
import { Button } from 'react-native' // Widgets

const App = () => {
   const handlePress = () => false
   return (
      <Button
         onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
   )
}
export default App


// Button: Touchable opacity