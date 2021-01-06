import React, { useState ,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Card, CardItem,Text,Left,Right,Body} from 'native-base';
import FlatButton from '../SharedFunctions/button';
import {globalStyles} from '../SharedFunctions/global';
import FlatButton2 from '../SharedFunctions/button2';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import database, { firebase } from '@react-native-firebase/database';
import Share from 'react-native-share';


const Category = ({navigation}) => {

  const [Ads,setAds] = useState([]);


  useEffect(()=>{

    const Adsref = database().ref('Categories/');
  
    
  
    const OnLoadingAds = Adsref.on('value' ,snapshot =>{
     
        setAds([]);
      
      snapshot.forEach(function (childSnapshot){

        setAds(Ads=>[...Ads,childSnapshot.val()])
  
      })
  
    });
    return() =>{
      Adsref.off('value' ,OnLoadingAds);
    };
  
  },[]);
  



  return (

    <View >

     <HeaderButtonsTab icon="angle-left" coler="blue"  title1="Home" 
    onPress={()=>{
      navigation.goBack()
    }}/>
     <Text style={globalStyles.text2}>
       Categories Added  by Admin
     </Text>
     <View >
     
     </View>
 
     
    <ScrollView>
      
     {Ads.map((item,index) =>(

     
           

        <CardItem style={globalStyles.cardStyles} key={index} >
        
        <Image source={require('../assets/car.jpg')} style={globalStyles.Cardimage}/>
        
      

        <Right >
        
        <View  style={globalStyles.CardIcon}>
       
        </View>
           
        
        <Text style={globalStyles.Cardtext}>{item.Make}</Text>
              
                 
        <Text >{item.Price}</Text>
         
         <Text >{item.Discription}</Text>  

         <Text ><Icon name="location-arrow" size={15}/>{item.Location}</Text>

        
        </Right>     
        
      </CardItem>

      
     ))}
    </ScrollView> 


  </View>
  );
 
};

export default Category;