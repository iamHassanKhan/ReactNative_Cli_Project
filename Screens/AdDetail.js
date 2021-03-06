import React, {useContext, useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  StatusBar,
  Button,
  Image,Alert,
  TouchableOpacity,
} from 'react-native';
import Header from '../SharedFunctions/Header';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Card, CardItem,Text,Left,Right,Body} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';

const AdDetail =({navigation,route}) => {

    const { item } = route.params;

//Reprt Ad





const ReportAd =() => {

   Alert.alert(
  "Want to Report Ad ?",
  "This Can't be Undone!",
    [
   {
     text: "Cancel",
     onPress: () => console.log("Ad Deletion cancel !"),
     style: "cancel"
   },
   { text: "OK", 
      onPress: () => firestore()
      .collection('ReportedAds')
      .add({
       AdId : item.AdId,
       Report:'reported'
      })
     .then(()=>{
    //console.log("Ads Added in databse =>")
      Alert.alert(
              "Ad Report",
              "Ad Reported Successfully!",
              [                      
                 { text: "OK",  }
              ],
                   );
               })
              .catch((err) =>{
                            
              Alert.alert(
                 "You Can't Report",
                 "Please Login with Email and Password to Submit Post!",
                      [             
                       { text: "OK",  }
                      ],
                              
                    );
                          
                 })}
                ],
              { cancelable: false }

               )
 
}
//Report Ads Function Above

    return(

        <View style={{flex:1,alignItems:"center"
        ,backgroundColor:"lightgrey"
        }}>

        <HeaderButtonsTab  icon="angle-left"
        coler="blue"  title1="Back" onPress={()=> navigation.goBack()}/>

        <Text style={globalStyles.text}>This is Ad detail Page</Text>
        
        <ScrollView>
        <View>

        <Image source={{uri:item.ImageUrl}} 
        style={{width:350,height:250,marginBottom:5}}
        />
        <Text style={globalStyles.AdDetail}>{item.Make}</Text>
        <Text style={globalStyles.AdDetail}>{item.Price}</Text>
        <Text style={globalStyles.AdDetail}>{item.Location}</Text>
        <Text style={globalStyles.AdDetail}>{item.Year}</Text>
        <Text style={globalStyles.AdDetail}>{item.Condition}</Text>
        <Text style={globalStyles.AdDetail}>{item.Driven}</Text>
        <Text style={globalStyles.AdDetail}>{item.Discription}</Text>
         
         <TouchableOpacity style={globalStyles.userView}
         onPress={ReportAd}
         >
         <Text>Report Ad  <Icon name="edit" size={15}/></Text>
         </TouchableOpacity>

        </View>
        </ScrollView>
        </View>
    )
}


export default AdDetail;
