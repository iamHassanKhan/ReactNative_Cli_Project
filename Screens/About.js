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

import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';


const About = ({navigation}) => {



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
     
      <Text style={globalStyles.text}>About CarFinder</Text>
    
      <Text style={globalStyles.text2}>This is the First Version of Our App We will Bring
       More Exciting Features in Near Future Best Whishes From
      </Text>
      <Text style={globalStyles.text2}>Team CarFinder </Text>
     </View>
  );
};

export default About;
