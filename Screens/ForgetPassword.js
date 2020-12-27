import React, {useContext, useState} from 'react';
import {
  View,Alert,
  Text,
  StatusBar,
  Button,TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';

// importing from AuthProvider firebase functions using Context to handle logout

import {AuthContext} from '../Navigation/AuthProviders';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';

import auth, { firebase } from '@react-native-firebase/auth';

const ForgetPassword = ({navigation}) => {

  //calling function and user values from Auth context

  const {user, logout} = useContext(AuthContext);

  const [email,setEmail] =useState('');

  const inputdata =() => {

      if(email=='')
      {
        Alert.alert(
            "Email is Required",
            "Please Enter Required Email Feild!",
            [
              
              { text: "OK",  }
            ],
            
          );

      } else
      {
    
      auth().sendPasswordResetEmail(email)
      .then(function()
      {
        Alert.alert(
          "Sent",
          "Email has sent Successfully ",
          [ 

            { text: "OK",  }

          ],
          
        );
         setEmail('');

      }).catch(function(error){

        console.log(error)
      })
    
      
          
  }}

  //Function Above for Sending password Link to Email

  return (

    <View
      style={{
        flex: 1,
        alignContent:"center"
      }}>

     <View>
         <HeaderButtonsTab 
         icon="chevron-left" title1="Back" coler="blue"
         onPress={
             ()=>{
             navigation.goBack()
         }}
         />

     </View>

      <Text style={globalStyles.text}>Forget Password</Text>

     <View style={{alignItems:"center"}}>

    
     <Text style={globalStyles.text2}> Please Enter your authentic Email (Gmail ,Yahoo) etc </Text>

     <TextInput style={globalStyles.Formtxtinput}
     placeholder="Enter  i.e   example@gmail.com"
     value={email}
     onChangeText={(text)=>setEmail(text)}
     />
     
     <FlatButton title="Send Email"

      onPress={ () => inputdata()}
    />
       </View>
     </View>
  );
};

export default ForgetPassword;
