import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

import { GoogleSignin } from '@react-native-community/google-signin';
//Libararies above

//Screens Below

import firstScreen from '../Screens/firstScreen';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import ForgetPassword from '../Screens/ForgetPassword';



const Stack = createStackNavigator();


const AuthStack = () => {

  const [isfirstlaunch, setisfirstlaunch] = React.useState(null);
  
  let routeName;

  useEffect(() => {

    AsyncStorage.getItem('alreadyLaunched').then((value) => {

      if (value == null) {

        AsyncStorage.setItem('alreadyLaunched', 'true');

        setisfirstlaunch(true);
      } else {

        setisfirstlaunch(false);
      }
    });

    GoogleSignin.configure({

      webClientId: '294028485331-18o1o2a6m91eoashkl0c54tbm4ipujdq.apps.googleusercontent.com',

    });
  });
  if (isfirstlaunch == null) {

    return null;

  } else if (isfirstlaunch == true) {

    routeName = 'firstScreen';

  } else {

    routeName = 'Login';

  }

  return (
    
    <Stack.Navigator initialRouteName={routeName}>

      <Stack.Screen
        name="firstScreen"
        component={firstScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{header: () => null}}
     />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{header: () => null}}
     />

    </Stack.Navigator>
  );
};
export default AuthStack;
