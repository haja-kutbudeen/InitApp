import React, { Component } from "react"
import { View, Text, ScrollView, TouchableHighlight, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'react-native';

class Init extends Component {
   constructor() {
      super();
      this.state = {
         splash: true,
         login: false,
         home: false,
      };
    }
   componentDidMount() {
      this.load()
   }
   load = () => {
      setTimeout(function () {
         this.setState({ splash: false })
         this.setState({ login: true })
       }.bind(this), 1000);
   }
   update = () => {
      this.setState({ login: false })
      this.setState({ home: true })
   }
   render() {
      return (
         <View style = {styles.container}>
            <View style = {{flex: 1, display: this.state.splash ? 'flex' : 'none' }}>
               <Splash />
            </View>
            <View style = {{flex: 1, display: this.state.login ? 'flex' : 'none' }}>
               <Login update={this.update} />
            </View>
            <View style = {{flex: 1, display: this.state.home ? 'flex' : 'none' }}>
               <Home />
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
      },
});

export default Init


// -------------- Splash ----------------- //

class Splash extends Component {
   render() {
      return (
         <View style = {splashstyles.container}>
            <StatusBar hidden />
            <Image style={splashstyles.image} source={require("./assets/logo.png")} />
         </View>
      );
   }
}

const splashstyles = StyleSheet.create({
      container: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
         backgroundColor: '#ff5a00',
      },
      image: {
         width: 250,
         height: 53,
         tintColor: '#ffffff'
      },
});


// -------------- Login ----------------- //

class Login extends Component {
   state = {
      email: '',
      password: ''
   }
   setEmail = (text) => {
      this.setState({ email: text })
   }
   setPassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, password) => {
      if(email == 'hajakutbudeen@gmail.com' && password == '1234'){
         this.props.update();
      } else {
         alert('Username/Password not valid!')
      }
   }
   forgot = () => {
      alert('Password send to your email!')
   }
   create = () => {
      alert('Account created successfully!')
   }
   render() {
      return (
         <View style = {loginstyles.container}>
             <StatusBar hidden />
             <View style={loginstyles.header}>
               <Image style={loginstyles.image} source={require("./assets/logo.png")} />
               <View style={loginstyles.form}>
                  <TextInput
                     style={loginstyles.TextInput}
                     placeholder="Email"
                     placeholderTextColor="#8e8e8e"
                     onChangeText = {this.setEmail}
                  />
               </View>
               <View style={loginstyles.form}>
                  <TextInput
                     style={loginstyles.TextInput}
                     placeholder="Password"
                     placeholderTextColor="#8e8e8e"
                     secureTextEntry={true}
                     onChangeText = {this.setPassword}
                  />
               </View>
               <TouchableOpacity 
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }
               style={loginstyles.loginBtn}>
                  <Text style={loginstyles.loginText} 
                  >Login</Text>
               </TouchableOpacity>
            </View>
            <View style={loginstyles.content}>
               <View style={loginstyles.sub}>
                     <TouchableOpacity>
                        <Text 
                        onPress = {
                           () => this.forgot()
                        }
                        style={loginstyles.forgotBtn}>Forgot Password?</Text>
                     </TouchableOpacity>
               </View>
               <View style={loginstyles.sub}>
                  <TouchableOpacity>
                     <Text 
                     onPress = {
                        () => this.create()
                     }
                     style={loginstyles.createBtn}>Dont have account?</Text>
                  </TouchableOpacity>
            </View>
            </View>
            <View style={loginstyles.footer}>
               <Text style={loginstyles.poweredBy}>Powered by Haja Kutbudeen</Text>
            </View>
         </View>
      );
   }
}

const loginstyles = StyleSheet.create({
      container: {
         flex: 1,
         backgroundColor: '#ffe9dd'
      },
      header: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
      footer: {
         alignItems: "center",
         justifyContent: "center",
      },
      image: {
         marginBottom: 50,
         width: 250,
         height: 53,
      },
      sub: {
         flex: 1,
         marginTop: -440
      },
      form: {
         backgroundColor: '#f9f9f9',
         borderRadius: 5,
         width: 350,
         height: 45,
         marginBottom: 20,
      },
      content: {
         flex: .25,
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',
      },
      TextInput: {
         height: 45,
         marginLeft: 15,
      },
      forgotBtn: {
         alignItems: 'flex-start',
         justifyContent: 'flex-start',
         position: 'absolute',
         left: 25,
         top: 0,
         fontSize: 13
      },
      createBtn: {
         alignItems: 'flex-end',
         justifyContent: 'flex-end',
         position: 'absolute',
         right: 25,
         top: 0,
         fontSize: 13
      },
      loginBtn: {
         width: 350,
         borderRadius: 5,
         height: 40,
         alignItems: "center",
         justifyContent: "center",
         marginTop: 10,
         backgroundColor: '#ff5a00',
      },
      loginText: {
         color: '#ffffff'
      },
      poweredBy: {
         position: 'absolute',
         bottom: 0,
         paddingBottom: 10,
         fontSize: 12
      }
});

// -------------- Home ----------------- //

class Home extends Component {
   render() {
      return (
         <View style = {homestyles.container}>
            <View style = {homestyles.headerBar}>
               <View style = {homestyles.sectionDelivery}>
                  <Text style = {{ fontSize: 12}}> Delivering to </Text>
                  <Text style = {{ fontWeight: 'bold'}}> Home (Manama) &nbsp;
                  <Image style = {{width:15, height:15, tintColor: '#ff5a00'}}
                     source={{uri: 'https://freepngimg.com/thumb/web_design/24697-8-down-arrow-image.png'}}
                  />
                  </Text>
               </View>
               <View style = {homestyles.sectionWrap}>
                  <View style = {homestyles.sectionContent}>
                     <Image style = {{width: 160, height: 160, resizeMode: 'contain', marginTop: -50, marginBottom: -50}}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Talabat_logo.svg/1200px-Talabat_logo.svg.png'}}
                     />
                     <Text style = {{ fontSize: 19, fontWeight: 'bold' }}> Find restaurants </Text>
                     <Text style = {{ fontSize: 18, fontWeight: 'bold' }}> near to you, Anytime. </Text>
                     <Text style = {{ fontSize: 12, paddingTop: 5}}> Everything you need a tap away </Text>
                     <TouchableHighlight style = {homestyles.orderNowButton}>
                        <Text style = {homestyles.orderNowTxt}>Order Now!</Text>
                     </TouchableHighlight>
                  </View>
                  <View style = {homestyles.sectionImage}>
                     <Image style = {{width: 300, height: 300, resizeMode: 'contain', marginTop: -50, marginBottom: -50, marginRight: -90}}
                        source={{uri: 'https://www.linkpicture.com/q/talabat-removebg-preview.png'}}
                     />
                  </View>
               </View>
            </View>
            <View style = {homestyles.infoBar}>
               <ScrollView >
                  <View>
                     <Text style = {{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 5, paddingLeft:10}}>Hey, good evening!</Text>
                  </View>
                  <View style = {homestyles.infoCategory}>
                     <View style = {homestyles.infoCategorySection} >
                        <View style = {homestyles.infoCategoryImgSection}  >
                           <Image style = {homestyles.infoCategoryImg}
                              source={{uri: 'https://snipstock.com/assets/cdn/png/75260dc9e483d059095add14ef2ccc1b.png'}}
                           />
                        </View>
                        <Text style = {{ fontSize: 13, padding:10}}>Food</Text>
                     </View>
                  <View style = {homestyles.infoCategorySection} >
                        <View style = {homestyles.infoCategoryImgSection}>
                           <Image style = {homestyles.infoCategoryImg}
                              source={{uri: 'https://freepngimg.com/thumb/grocery/54018-9-grocery-free-hq-image.png'}}
                           />
                        </View>
                        <Text style = {{ fontSize: 13, padding:10}}>Groceries</Text>
                     </View>
                  <View style = {homestyles.infoCategorySection} >
                        <View style = {homestyles.infoCategoryImgSection}>
                           <Image style = {homestyles.infoCategoryImg}
                              source={{uri: 'https://www.pngkey.com/png/full/392-3927587_medicine-drug.png'}}
                           />
                        </View>
                        <Text style = {{ fontSize: 13, padding:10}}>Pharmacy</Text>
                     </View>
                  </View>
                  <View style = {homestyles.infoCategory}>
                     <View style = {homestyles.infoCategorySection} >
                        <View style = {homestyles.infoCategoryImgSection}  >
                           <Image style = {homestyles.infoCategoryImg}
                              source={{uri: 'https://jashopeasy.com/wp-content/uploads/2022/04/1-electronic-gadgets-png-clipart-background-png-play.png'}}
                           />
                        </View>
                        <Text style = {{ fontSize: 13, padding:10}}>Electronics</Text>
                     </View>
                  <View style = {homestyles.infoCategorySection} >
                        <View style = {homestyles.infoCategoryImgSection}>
                           <Image style = {homestyles.infoCategoryImg}
                              source={{uri: 'https://freepngimg.com/thumb/categories/606.png'}}
                           />
                        </View>
                        <Text style = {{ fontSize: 13, padding:10}}>Consmetics</Text>
                     </View>
                  <View style = {homestyles.infoCategorySection} >
                        <View style = {homestyles.infoCategoryImgSection}>
                           <Image style = {homestyles.infoCategoryImg}
                              source={{uri: 'https://www.nicepng.com/png/full/244-2445393_flower-box-box-of-flowers-png.png'}}
                           />
                        </View>
                        <Text style = {{ fontSize: 13, padding:10}}>Flowers</Text>
                     </View>
                  </View>
                  <View>
                     <Text style = {{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10, paddingLeft:10}}>Top picks</Text>
                  </View>
                  <View style = {homestyles.infoCategoryTop}>
                     <ScrollView horizontal={true}>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>KFC</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Pizza Hut</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://i.pinimg.com/originals/65/4a/e8/654ae8b4f1613a329e3656b3a70f81a6.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Starbucks</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/2048px-Baskin-Robbins_logo.svg.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Baskin Robbins</Text>
                        </View>
                     </ScrollView>
                  </View>
                  <View>
                     <Text style = {{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 10, paddingLeft:10}}>Popular restaurants nearby</Text>
                  </View>
                  <View style = {homestyles.infoCategoryPop}>
                     <ScrollView horizontal={true}>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Burger King</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://seeklogo.com/images/T/texas-chicken-logo-E52D04187C-seeklogo.com.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Texas Chicken</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Dominos Pizza</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/800px-McDonald%27s_SVG_logo.svg.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>McDonald</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://thewalkbh.files.wordpress.com/2015/03/logo.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>New York Cafe</Text>
                        </View>
                        <View style = {homestyles.infoCategorySection} >
                           <View style = {homestyles.infoCategoryImgSection}  >
                              <Image style = {homestyles.infoCategoryImg}
                                 source={{uri: 'https://www.sgc.consulting/wp-content/uploads/2018/02/urbanSliceLogo.png'}}
                              />
                           </View>
                           <Text style = {{ fontSize: 13, padding:10}}>Urban Slice</Text>
                        </View>
                     </ScrollView>
                  </View>
               </ScrollView>
            </View>
            <View style = {homestyles.menuBar}>
               <View style = {homestyles.tab}>
                  <Image
                     style={homestyles.menuIconActive}
                     source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Home_free_icon.svg/2048px-Home_free_icon.svg.png'}}
                  />
                  <Text style={homestyles.menuTxtActive } >Home</Text>
               </View>
               <View style = {homestyles.tab}>
                  <Image
                     style={homestyles.menuIcon}
                     source={{uri: 'https://aux2.iconspalace.com/uploads/search-icon-256-915059353.png'}}
                  />
                  <Text style={homestyles.menuTxt } >Search</Text>
               </View>
               <View style = {homestyles.tab}>
                  <Image
                     style={homestyles.menuIcon}
                     source={{uri: 'https://iconape.com/wp-content/png_logo_vector/shopping-basket.png'}}
                  />
                   <Text style={homestyles.menuTxt } >Cart</Text>
               </View>
               <View style = {homestyles.tab}>
                  <Image
                     style={homestyles.menuIcon}
                     source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png'}}
                  />
                   <Text style={homestyles.menuTxt } >Profile</Text>
               </View>
            </View>
         </View>
      );
   }
}

const homestyles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fffff'
   },
   menuBar: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
   },
   headerBar: {
      flex: 1,
      backgroundColor: '#ffe9dd',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
   },
   infoBar: {
      flex: 1,
      zIndex: -1,
      marginTop: 268,
      padding: 10
   },
   infoCategory: {
      flex: 1,
      flexDirection: 'row',
   },
   infoCategoryTop: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 5,
   },

   infoCategoryPop: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 50,
   },
   infoCategorySection: {
      padding: 10,
      alignItems: 'center' 
   },
   infoCategoryImgSection: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#f0f0f0',
      borderRadius:10
   },
   infoCategoryImg: {
      width:65,
      height:65,
   },
   tab: {
      flex: .25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10
   },
   menuIcon: {
      width:25,
      height:25,
      tintColor: '#8a8a8a'
   },
   menuTxt: {
      color: '#8a8a8a',
      fontSize: 10,
   },
   menuIconActive: {
      width:25,
      height:25,
      tintColor: '#ff5a00'
   },
   menuTxtActive: {
      color: '#ff5a00',
      fontSize: 10,
      fontWeight: 'bold'
   },
   orderNowButton: {
      backgroundColor: '#ffff',
      marginTop: 10,
      padding:5,
      borderColor: '#ff5a00',
      borderWidth: .75,
      borderRadius: 5,
      marginBottom: 5
   },
   orderNowTxt: {
      color: '#ff5a00',
      fontSize: 10,
      paddingLeft: 5,
      paddingRight: 5,
   },
   sectionDelivery:{
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 33,
      paddingLeft: 10,
      paddingBottom: 10,
   },
   sectionWrap:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 10
   },
   sectionContent:{
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
   },
   sectionImage:{
      flex: 1,
      position: 'absolute',
      right: 0,
      bottom: 0,
   },
});












// import React, { Component } from 'react'; 
// import { View, Picker } from 'react-native'; 

// export default class myApp extends Component { 
 
//   render() { 
//     return ( 
//       <View> 
//         <Picker prompt={"This is heading"}> 
//           <Picker.Item label="HTML Code Play" value="1" /> 
//           <Picker.Item label="Android Code Play" value="2" /> 
//           <Picker.Item label="3Dthreejs Code Play" value="3" /> 
//         </Picker> 
 
//         <Picker> 
//           <Picker.Item label="HTML Code Play" value="1" /> 
//           <Picker.Item label="Android Code Play" value="2" /> 
//           <Picker.Item label="3Dthreejs Code Play" value="3" /> 
//         </Picker> 
//       </View> 
//     ); 
//   } 
// }


// import React, { Component } from 'react';
// import { View, Text, Picker, StyleSheet } from 'react-native'

// class PickerExample extends Component {
//    state = {user: ''}
//    updateUser = (user) => {
//       this.setState({ user: user })
//    }
//    render() {
//       return (
//          <View>
//             <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
//                <Picker.Item label = "Steve" value = "steve" />
//                <Picker.Item label = "Ellen" value = "ellen" />
//                <Picker.Item label = "Maria" value = "maria" />
//             </Picker>
//             <Text style = {styles.text}>{this.state.user}</Text>
//          </View>
//       )
//    }
// }
// export default PickerExample

// const styles = StyleSheet.create({
//    text: {
//       fontSize: 30,
//       alignSelf: 'center',
//       color: 'red'
//    }
// })


// import React, { Component } from 'react';
// import { View, Text, Picker, StyleSheet } from 'react-native'

// class PickerExample extends Component {
//    state = {user: ''}
//    updateUser = (user) => {
//       this.setState({ user: user })
//    }
//    render() {
//       return (
//          <View>
//             <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
//                <Picker.Item label = "Steve" value = "steve" />
//                <Picker.Item label = "Ellen" value = "ellen" />
//                <Picker.Item label = "Maria" value = "maria" />
//             </Picker>
//             <Text style = {styles.text}>{this.state.user}</Text>
//          </View>
//       )
//    }
// }
// export default PickerExample

// const styles = StyleSheet.create({
//    text: {
//       fontSize: 30,
//       alignSelf: 'center',
//       color: 'red'
//    }
// })