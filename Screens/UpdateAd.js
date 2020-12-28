import React, { useEffect, useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Text,Alert,TextInput, Image,ScrollView} from 'react-native';

import {globalStyles} from '../SharedFunctions/global';
// import {  } from '../Navigation/FirebaseDB';
import database, { firebase } from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import FlatButton from '../SharedFunctions/button';

import { PostAd } from '../Navigation/FirebaseDB';
const UpdateAd = ({navigation,route}) => {

  const {item} =  route.params;
  

   //console.log(item.Id);


  const [Id,setId] = useState();
  const [Location,setLocation] = useState(item.Location);
  const [Make,setMake] = useState(item.Make);
  const [Price,setPrice] = useState(item.Price);
  const [Year,setYear] = useState(item.Year);
  const [Driven,setDriven] = useState(item.Driven);
  const [Condition,setCondition] = useState(item.Condition);
  const [Discription,setDiscrip] = useState(item.Discription);
  

  //Function for Edit Ad



  return (

    <ScrollView >

    <HeaderButtonsTab icon="angle-left" coler="blue"  title1="MyAds" 
    onPress={()=>{
      navigation.goBack()
    }}/>
    
  <View style={{flex:1,alignItems:"center" }}>
    
  <Text style={globalStyles.text2}>
            Update Your Ad
            </Text>


  <TextInput placeholder="Location"  value={Location} onChangeText={(text)=>setLocation(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Make" value={Make} onChangeText={(text)=>setMake(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Price"   value={Price} onChangeText={(text)=>setPrice(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year"  value={Year} onChangeText={(text)=>setYear(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven"   value={Driven} onChangeText={(text)=>setDriven(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Condition"   value={Condition} onChangeText={(text)=>setCondition(text)} style={globalStyles.Formtxtinput}/>
   <TextInput multiline placeholder="Discription" value={Discription} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>

    </View>

    <View style={{alignItems:"center" }}>
    <FlatButton title="Update Ad" 
     
     onPress={()=>{

     alert("updated")
     setMake('');
     setPrice();
     setYear(); 
     setDriven('');
     setCondition('');
     setDiscrip('');
     setLocation('');



     }}
     //Send file and ad data in database

     />
    </View>
    </ScrollView>
  );
};
export default UpdateAd;
