import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import MyAds from './MyAds';
import Login from './Login';
import {AuthContext} from '../Navigation/AuthProviders';
//Auth Context imported for checking Authentice  User

const Ads = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text style={globalStyles.text}>My Ads </Text>
      <MyAds />
      <View
        style={{
          flex: 1,
        }}>
          
        </View>
    </View>
  );
};

export default Ads;
