import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// If you want to use comp to another file we shoud export that
// Export comp syntax: export default ...
// Import comp syntax: Ex: import App  from './App';
export default class App extends React.Component {
  // render always expect return statement
  render(){ 
    return (
      <View style = { styles.container }>
        <Text> Hello World! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  }
})