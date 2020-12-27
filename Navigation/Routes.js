import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import {AuthContext} from './AuthProviders';

import AuthStack from './AuthStack';

import AppStack from './AppStack';

const Routes = () => {

  const {user, setUser} = useContext(AuthContext);

// initializing is a state to check whether App is Established the connection with firebase or not 

  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);

    if (initializing) setInitializing(false);
  };

  useEffect(() => {

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (initializing) return null;
  
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
