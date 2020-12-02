import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Alert,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
//Libararies above

//Screens Below
import firstScreen from '../Screens/firstScreen';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';


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
    </Stack.Navigator>
  );
};
export default AuthStack;
