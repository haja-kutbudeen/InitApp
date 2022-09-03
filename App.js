import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// var number = 0;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
    }
  }

  incrementCount(){
    this.setState({
      count: this.state.count + 1, // state not required page reload to update value
    })
    // number = number + 1; // variable required page reload to update value
  }

  decrementCount(){
    this.setState({
      count: this.state.count - 1,
    })
    // number = number - 1; 
  }

  render(){ 
    return (
      <View style = { styles.container }>
        <Button title="+" onPress={() => { this.incrementCount() }} />
         <Text> {this.state.count} </Text>
         <Button title="-" onPress={() => { this.decrementCount() }} />
         {/* <Button title="View" onPress={() => alert(number)} />
         <Text> {number} </Text> */}
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