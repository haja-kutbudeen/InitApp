import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// if you want to use comp to another file we shoud export that
// export comp syntax: export default ...
// import comp syntax: Ex: import App  from './App';
export default class App extends React.Component {
  // component lifecycle always exe from constructor
  constructor(props) { // Lifecycle 1
    // super keyword using to inherit parent class objects
    super(props); // to access props we need to pass props into super key
    // initialize state | its should intialize inside consturctor only | it should initialize only once 
    this.state = { // object
      count: 0 // key: value
    }
  }

  static getDerivedStateFromProps(nextProps, previousState){ // Lifecycle 2
    // this method always expect return
    return null;
  }

  // render always expect return statement
  render(){ // Lifecycle 3
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

componentDidMount() { // Lifecycle 4
  // API Invoke only in this method
  // here we can modify state object
  this.setState({
    count: 1,
  })
  // if state value changes getDerivedStateFromProps() will be call again
}


shouldComponentUpdate(nextProps, nextState) { // Lifecycle 5
  // this method always expect return true/false
  return false;
  // if its true render() will call again
}


getSnapshotBeforeUpdate(prevProps, previousState) { // Lifecycle 6
  // this method always expect return
  return null;
}

componentDidUpdate(prevProps, previousState, snapshort) { // Lifecycle 7
  // arg snapshot = getSnapshotBeforeUpdate() return value
  // we able to invoke API call in this method
}

componentWillunknown() { // Lifecycle 8
  // in this method we can perform action before component destroy
}