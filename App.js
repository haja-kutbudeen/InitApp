import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
    }
  }

  incrementCount(){
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrementCount(){
    this.setState({
      count: this.state.count - 1,
    })
  }
  render(){ 
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome To React Native</Text>
        </View>
        {/* Image */}
        <View style={styles.row}>
          <Image 
          style={styles.img} 
          source={{ uri : 'https://blog.instabug.com/wp-content/uploads/2020/11/b_Top-React-Native-Mobile-Apps--1024x480.png'}} 
          />
        </View>
        {/* About */}
        <View style={styles.row}>
            <Text style={styles.titleText}>About</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.contentText}>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities</Text>
        </View>
        {/* Features */}
        <View style={styles.row}>
            <Text style={styles.titleText}>Features</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text  style={styles.infoText}>Open Source</Text>
          </View>
          <View style={styles.col}>
            <Text  style={styles.infoText}>Backed by Facebook</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text  style={styles.infoText}>Modular and Intuitive</Text>
          </View>
          <View style={styles.col}>
            <Text  style={styles.infoText}>Speed Up Development</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text  style={styles.infoText}>Community Driven</Text>
          </View>
          <View style={styles.col}>
            <Text  style={styles.infoText}>Live Reload</Text>
          </View>
        </View>
        {/* State */}
        <View style={styles.row}>
            <Text style={styles.titleText}>State/Props</Text>
        </View>
        <View style={styles.row}>
          <Button title="+" onPress={() => { this.incrementCount() }} />
            <Text> {this.state.count} </Text>
          <Button title="-" onPress={() => { this.decrementCount() }} />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Powered by React Native @ 2022</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,

  },
  headerText: {
   fontWeight: 'bold',
   fontSize: 20,
   color: '#333',
   letterSpacing: 1,
  },
  footer: {
    width: '100%',
    height: 30,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -60,
    paddingBottom: 5,
    paddingTop: 5
  },
  footerText: {
   fontSize: 10,
   color: '#333',
   letterSpacing: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    paddingTop:10,
    paddingBottom: 10
  },
  contentText:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  infoText:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#eee',
    margin: 4,
    width: 190
  },
  img:{
    width: '100%', 
    height: 200
  },
  container: {
    // flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
