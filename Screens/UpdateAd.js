import React, { useEffect, useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Text,Alert,TextInput, Image,ScrollView} from 'react-native';

import {globalStyles} from '../SharedFunctions/global';
import { DellAllAds } from '../Navigation/FirebaseDB';
import database, { firebase } from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import FlatButton from '../SharedFunctions/button';

const UpdateAd = ({navigation,route}) => {

  const {Id,Make ,Price,Discription, Driven ,Year,Condition} =  route.params;
  
  const [ItmId,setId] = useState();
  const [ItmMake,setMake] = useState();
  const [ItmPrice,setPrice] = useState();
  const [ItmYear,setYear] = useState();
  const [ItmDriven,setDriven] = useState();
  const [ItmCondition,setCondition] = useState();
  const [ItmDiscription,setDiscrip] = useState();

  //Function for Edit or Delete Ads

  const [Ads,setAds] =useState([]);

  
  const EditAd =(Id) =>{
    
  
  }

  

  useEffect(()=>{

  const userRef= database().ref('users');
  const OnLoadingListener =userRef.on('value',snapshot=>{
  setAds([]);
  snapshot.forEach(function(childSnapshot){
    setAds(Ads=>[...Ads,childSnapshot.val()]);
  })

  });
  return()=>{

    userRef.off('value',OnLoadingListener); 

  };
  [] });
 

  return (

    <View style={{flex:1,alignItems:"center",backgroundColor:"lightgrey" }}>

    <HeaderButtonsTab icon="angle-left" coler="blue"  title1="MyAds" 
    onPress={()=>{
      navigation.goBack()
    }}/>

    <ScrollView>
    <TextInput placeholder="Make i.e Honda"  value={Make} onChangeText={(ItmMake)=>setMake(ItmMake)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Price "   value={Price} onChangeText={(ItmPrice)=>setPrice(ItmPrice)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year 2000"   value={Year} onChangeText={(ItmYear)=>setYear(ItmYear)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven / kilometers"   value={Driven} onChangeText={(ItmDriven)=>setDriven(ItmDriven)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Condition i.e Used or New "   value={Condition} onChangeText={(ItmCondition)=>setCondition(ItmCondition)} style={globalStyles.Formtxtinput}/>
   <TextInput multiline placeholder="Detail Discription" value={Discription} onChangeText={(ItmDiscription)=>setDiscrip(ItmDiscription)} style={globalStyles.Formtxtinput}/>
    </ScrollView>
    <View>
    <FlatButton title="Post Ad" 
     
     
     //Send file and ad data in database
     />
    </View>
    </View>
  );
};
export default UpdateAd;
