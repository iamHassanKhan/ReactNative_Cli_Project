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
import { Paragraph } from 'react-native-paper';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';


const About = ({navigation}) => {



  return (

    <View
      style={{
        flex: 1,
        alignContent:"center",
        backgroundColor:"white"
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
    
      <Text style={globalStyles.AboutText}>Wellcome Dear User</Text>

      <Paragraph style={{fontSize:17,color:"grey",marginHorizontal:18}}>Want to buy or Sell your Car? Look no further,
       as CarFinder Salling and Buying App has got you covered,
       let us help you find the used & new Car that suits you best.
       All Cars Ads are available in the App,So that you can Find
       affordable prices and are pre-certified to ensure you 
       make the right decision. We help you to Search Cars near your Area ,So that you can
       Save Your Precious Time.
       This is the First Version of Our App We will Bring
       More Exciting Features in Near Future. Best Wishes From.
      </Paragraph>

       
      <View style={{flexDirection:"row",justifyContent:"center"   
       }} 
      >

       <Text style={globalStyles.text}>CarFinder</Text>
       <TouchableOpacity>
       <Image style={globalStyles.logo} source={require('../assets/carlogo.png')} />
       </TouchableOpacity>
       
 
       </View>
      
     </View>
  );
};

export default About;
