import React, { Component } from 'react'; 
import { Text } from 'react-native'; 
 
export default class myApp extends Component { 
  render() { 
    { 
      function sum() { 
        var a = 30,b=75; 
        var c=a+b; 
        alert(c) 
      } 
      function min(){
        var x = 10;
        var y = 20;
        var z = x - y ;
        alert (z);
      }
     sum(); 
    } 
 
    return ( 
      <Text>Sample Javascript Code</Text> 
    ); 
  } 
}