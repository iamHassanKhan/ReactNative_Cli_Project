import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,TextInput,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatButton from '../SharedFunctions/button';





const ConfirmCode = ({navigation}) => {
  const [number, setNumber] = useState();
  

   
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      
      <Text style={globalStyles.text}>Enter Your Confirmation Code :</Text>
      <TextInput placeholder="Enter your Code" />
      
   
      <FlatButton title="Sign In" onPress={() => alert("Confirmed")} />
    
      
    </View>
  );
};

export default ConfirmCode;
