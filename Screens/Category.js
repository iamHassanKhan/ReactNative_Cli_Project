import React from 'react';
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


 // console.log(Object.values(dataSnap.val()))

  return (
    <View >
     <HeaderButtonsTab icon="angle-left" coler="blue"  title1="Home" 
    onPress={()=>{
      navigation.goBack()
    }}/>
     <Text style={globalStyles.text2}>
       Car Categories will shown here
     </Text>
     <View >
     <ActivityIndicator size="large" color="blue"/>
     </View>
     <View>

        <CardItem style={globalStyles.cardStyles}>
        
        <Image source={require('../assets/car.jpg')} style={globalStyles.Cardimage}/>
        
      

        <Right >
        
        <View  style={globalStyles.CardIcon}>
       
        </View>
           
        
        <Text style={globalStyles.Cardtext}>text</Text>
              
        <Text style={globalStyles.Cardtext}>text</Text>
                 
        <Text >text</Text>

         
         <Text >text</Text>

         <Text >text</Text>

         <Text ><Icon name="location-arrow" size={15}/>text</Text>

         <Text style={{color:"black",fontSize:11}}>text</Text>
         
         <TouchableOpacity onPress={()=>{
         }}>
         <Text>Report Ad  <Icon name="edit" size={15}/></Text>
         </TouchableOpacity>
        
        </Right>     
        
      </CardItem>

      </View>
    

  

  </View>
  );
 
};

export default Category;