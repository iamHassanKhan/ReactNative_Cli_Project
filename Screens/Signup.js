import React, {Component, useContext, useState} from 'react';
import {
  SafeAreaView,
  View,Alert,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import FlatButton2 from '../SharedFunctions/button2';
import LinkButton from '../SharedFunctions/linkButton';
import Forminput from '../SharedFunctions/Forminput';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';

import {AuthContext} from '../Navigation/AuthProviders';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);
  const [username, setUername] = useState('');

  const inputdata =() => {

    if(email==''||password=='' ||username=='')
    {
     alert("Please Enter Username , Email and Password Correctly !!")
    }else
    {
      register(email, password)
      Alert.alert(
        "Login Successfully",
        " Well come to CarFinder",
        [ 

          { text: "OK",  }

        ],
        
      );
    }
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        
        
      }}>

         <View>
         <HeaderButtonsTab 
         icon="chevron-left" title1="Login" coler="blue"
         onPress={
             ()=>{
             navigation.push("Login")
         }}
         />

         </View> 


         <View style={{flexDirection:"row",
              alignContent:"space-around", 
        }}>

       <Text style={globalStyles.text}>CarFinder</Text>
       <TouchableOpacity>
       <Image style={globalStyles.logo} source={require('../assets/carlogo.png')} />
       </TouchableOpacity>
       
 
       </View>

      <View style={{alignItems:"center" }}>

      <Text style={globalStyles.text}>Create an Account</Text>

      <Forminput
        valuetxt={username}
        ontextChnage={(userName) => setUername(userName)}
        placeholdertxt="Uername"
        iconType="user"
        autoCap="none"
        autoCorr={false}
      />
      <Forminput
        valuetxt={email}
        ontextChnage={(userEmail) => setEmail(userEmail)}
        placeholdertxt="Email i.e example1@email.com"
        iconType="user"
        keyboard="email-address"
        autoCap="none"
        autoCorr={false}
      />
      <Forminput
        valuetxt={password}
        ontextChnage={(userPassword) => setPassword(userPassword)}
        placeholdertxt="Password"
        iconType="lock"
        secureTxtEntry={true}
      />

      <FlatButton title="Sign Up" onPress={() => 
         inputdata()
        //register(email, password)
      } />


      <LinkButton
        title="Have an Account ? Sign In"
        onPress={() => navigation.navigate('Login')}
      />
    
      {/* 
      Term and Condition  */}

      {/* <View
        style={{
          width: 410,
          height: 20,
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'red',
          }}>
          By Signing Up your are Accepting our Term and Conditions
        </Text>
      </View> */}
      </View>
    </View>
  );
};

export default Signup;
