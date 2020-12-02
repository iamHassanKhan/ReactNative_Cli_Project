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


  
const LoginPhoneNo = ({navigation}) => {

    const [number, setNumber] = useState();
//     function PhoneSignIn() {
       
      
    
//         async function signInWithPhoneNumber(phoneNumber) {
//           const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//           setConfirm(confirmation);
//         }
 
  
 
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      
      <Text style={globalStyles.text}>Login with Phone Number :</Text>
      <TextInput placeholder="Enter your Number" keyboardType="number-pad" valuetxt={number} ontextChnage={(num) => setNumber(num)} />
      
   
      <FlatButton title="Send Code"  onPress={() => alert('Phone')} />
    
      
    </View>
  );
};

export default LoginPhoneNo;
