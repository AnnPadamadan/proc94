import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  CheckBox,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  sendText = async () => {
    if (this.state.email !== '') {
      let emailID = await this.state.email;
      this.props.navigation.navigate('Profile', { emailID: emailID });
    }

    if (this.state.password !== '') {
      let pass = await this.state.password;
      this.props.navigation.navigate('Profile', { pass: pass });
    }
  };
  goToHelp = () => {
    this.props.navigation.navigate('Help');
  };
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="information-circle-outline"
          type="ionicon"
          size={20}
          color="midnightblue"
          onPress={this.goToHelp}
          containerStyle={{ marginLeft: 300, marginTop: -185 }}
        />

        <View style={{ flexDirection: 'row', marginTop: 230 }}>
          <Text style={styles.logo}>Beauty</Text>
          <Icon
            name="md-water"
            type="ionicon"
            size={30}
            color="skyblue"
            containerStyle={styles.logoIcon}
          />{' '}
          <Text style={styles.logo}>fTheBlue</Text>
        </View>

        <TouchableOpacity onPress={this.sendText}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.emailInput}
          selectionColor="skyblue"
          keyboardType="email-address"
          textAlign="center"
          placeholder=" Username"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
          multiline={false}></TextInput>
        <TextInput
          style={styles.passwordInput}
          selectionColor="skyblue"
          keyboardType="email-address"
          textAlign="center"
          placeholder=" Password"
          multiline={false}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'skyblue',
    marginTop: -200,
    //marginBottom:40
  },
  logoIcon: {
    marginLeft: -4,
    marginRight: -7,

    marginTop: -200,
  },

  emailInput: {
    justifyContent: 'center',
    borderColor: 'skyblue',
    textAlign: 'center',
    color: 'skyblue',
    borderRadius: 0,
    borderWidth: 2,
    // marginTop:30,
    marginLeft: 15,
    height: 30,
    width: 250,
    fontSize: 'bold',

    //marginBottom:100
  },

  passwordInput: {
    justifyContent: 'center',
    borderColor: 'skyblue',
    textAlign: 'center',
    color: 'skyblue',
    borderRadius: 0,
    borderWidth: 2,
    // marginTop:30,
    marginLeft: 15,
    height: 30,
    width: 250,
    fontSize: 'bold',
    marginTop: 20,
    //marginBottom:100
  },
});
/*
export default class Login extends React.Component<Props>{
constructor(){
  super();
  this.state={
    text:"",
    points:0
    
  }
}


  displayData = async ()=>{  
     let name = this.state.text;  
    AsyncStorage.setItem('user',name);  
    try{  
      let user1 = await AsyncStorage.getItem('user');  
     let username = await this.state.text;
      this.props.navigation.navigate("Home", { username: username });
    }
     
      
    catch(error){  
      alert(error)  
    }  

    try{
      let points=this.state.points;
     AsyncStorage.setItem('user', points)
     let userpoint = await AsyncStorage.getItem('user')
      this.props.navigation.navigate("Home", { userpoint: userpoint });
    }catch(error){
      alert(error)
    }
  }  




sendText = async () => {
    if (this.state.text!=="") {
     
    }
    
  };
 goToHelp=()=> {
      this.props.navigation.navigate('Help')
    }

  render(){
      return(
<SafeAreaView>


<View style={{flexDirection:"column", marginTop:10}}>
<Text style={{textAlign:"center", fontSize:30}}>Login</Text>
  <TextInput
      style={styles.inputlast}
      selectionColor="blue"
      keyboardType="numeric"
      textAlign="center"
      placeholder="Username"
      multiline={false}

       onChangeText={text => {
              
              this.setState({
                text: text,
                
                
              });
            }}
            value={this.state.text}
      >
    
      </TextInput>
      

</View>


        <TouchableOpacity style= {styles.goButton} onPress ={this.displayData}>  
          <Text style={{fontSize:20, textAlign:"center", }}>Login</Text>  
        </TouchableOpacity>   </SafeAreaView>





      );

  }
      
    }
  



    
<TouchableOpacity style={styles.goButton} onPress={()=>this.sendText()}><Text style={{textAlign:"center", fontSize:20}}>Login</Text></TouchableOpacity>
const styles=StyleSheet.create({
  inputlast:{
  justifyContent:"center",
  alignSelf:"center",
  borderColor:"lightblue",
  textAlign:"center",
  borderRadius:0,
  borderWidth:2,
  marginTop:70,
  marginLeft:15,
  height:30,
  width:300,
  fontSize:"bold",

marginBottom:-50
},


   goButton:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 10,
    borderRadius : 5,
    marginTop:70,
    width : 200,
    height:50,
backgroundColor:"lightgray",
    borderColor:"lightgray",
  },
})




import React, {Component} from 'react';  
import {Platform, StyleSheet, Text,  
  View,TouchableOpacity, AsyncStorage,  
} from 'react-native';  
  
export default class App extends Component<Props> {  
  saveData(){  
    let name = "Ann (:";  
    AsyncStorage.setItem('user',name);  
  }  
  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }  
  render() {  
    return (  
      <View style={styles.container}>  
        <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>   
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
});  */
