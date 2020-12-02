import React, {Component, useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import FlatButton2 from '../SharedFunctions/button2';
import LinkButton from '../SharedFunctions/linkButton';
import Forminput from '../SharedFunctions/Forminput';
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
    }
  }
   
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
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
  );
};

export default Signup;
