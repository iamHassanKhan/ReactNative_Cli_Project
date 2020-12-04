import React, { useEffect, useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { DellAllAds } from '../Navigation/FirebaseDB';
import database, { firebase } from '@react-native-firebase/database';



const MyAds = ({navigation}) => {

  //Function for Edit or Delete Ads
  const [Ads,setAds] =useState([]);

  const DelteAd =(Id) =>{
    
    
  
  }
  const EditAd =(Id) =>{
    
  
  }
  const DelteAllAds =() =>{
    
    DellAllAds();
  
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
    <View style={globalStyles.addsettingview}>
      <Card>
        <Card.Cover source={require('../assets/car.jpg')} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
          
            onPress={() => {
              
             alert("edit cliked")
            }}
            >
            Edit
          </Button>
          <Button
            onPress={DelteAllAds}>
            Delete All Ads
          </Button>
        </Card.Actions>
      </Card>
      <View>
        
      </View>
    </View>
  );
};
export default MyAds;
