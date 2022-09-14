import React, { Component } from 'react';
import {View, Image, Text } from 'react-native';
export default class App extends Component { constructor() {
super(); this.state = {
animating: false, align: 'center', alignsecond: false,
};
setTimeout( () =>
this.setState({ align: 'flex-start' }, function() { this.setState({
alignsecond: true,
});
}), 3000
);
}
render() { return (
<View
style={{ flex: 1,
alignItems: 'center', flexDirection: 'row', justifyContent: this.state.align, marginHorizontal: 40,
}}>
{/* <Image
source={{ uri:
'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_l ogo.png',
}}
style={{ width: 100, height: 100 }}
/> */}
<Image
        source={require('./image/iphone.jpeg')}
        style={{ width: 100, height: 100 }}
      />
{!this.state.alignsecond ? null : (
<View style={{ margin: 10 }}>
<Text
style={{ color: '#092c96', fontSize: 25, fontWeight: 'bold'
}}>
Welcome to React Native Mobile Application
</Text>
</View>
)}
</View>
);
}
}