import React, { useContext, useState,Component } from 'react';
import {
  SafeAreaView,
  FlatList,Alert,
  View,Image,
  ActivityIndicator,
  TextInput,TouchableOpacity,Button,
} from 'react-native';
import { globalStyles } from '../SharedFunctions/global';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Card, CardItem,Text,Left,Right,Body} from 'native-base';

import database, { firebase } from '@react-native-firebase/database';

import Share from 'react-native-share';


 

 


export default class Feed extends Component {

  
   constructor(props){
     super(props);
   }

   state ={
     
     Like:"white",
     MyAdsList:[]
    
   }

   //////////////////////////

// Share Ad

   ShareAd = async ()  => {

    const shareOptions = {

      message:"Your Title",
      
    }
    try{

      const shareResponse = await Share.open(shareOptions);
      
    }catch(err){

      Alert.alert(
        "Share Canceled",
        "Didn't want to Share",
        [ 
          { text: "OK",  }
          
        ],
        
      );
    }
   }
  
    
// like Ad

  LikeAd =() => {

    this.setState({Like: "red"});   
  }


  /////////
  ReportAd =() => {

    alert("Ad Reported")   
  }
  
   componentDidMount(){
   
   

    const myAds = firebase.database().ref("Ads");

   

      myAds.on("value",dataSnap=>
      {
        // console.log(Object.values(dataSnap.val()))
  
          this.setState(
          {  
            MyAdsList:Object.values(
               ( dataSnap.val() ) ) 
          })  
      } )

  


    
  }

 

    
  
  render() {


  

  /////      Condition Below if There is a ( UserAds ) data in Database or Else


     return this.state.MyAdsList.length > 0 ?

     <SafeAreaView >

               <FlatList
                data={this.state.MyAdsList}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {

     
       return(

       <View>

        <CardItem style={globalStyles.cardStyles}>
        
        <Image source={require('../assets/car.jpg')} style={globalStyles.Cardimage}/>
        
      

        <Right >
        
        <View  style={globalStyles.CardIcon}>
        
        <Icon active name="share" size={25} color="grey" onPress={this.ShareAd}  />
        
        <Icon active name="heart" size={25} color={this.state.Like} onPress={this.LikeAd} />
       
        </View>
           
        
        <Text style={globalStyles.Cardtext}>{item.Make}</Text>
              
        <Text style={globalStyles.Cardtext}>{item.Price}</Text>
                 
        <Text >{item.Condition}</Text>

         
         <Text >{item.Driven}</Text>

         <Text >{item.Discription}</Text>

         <Text ><Icon name="location-arrow" size={15}/>{'  '}{item.Location}</Text>

         <Text style={{color:"black",fontSize:11}}>{new Date(item.Time).toDateString()}</Text>
         
         <TouchableOpacity onPress={()=>{
           this.ReportAd()
         }}>
         <Text>Report Ad  <Icon name="edit" size={15}/></Text>
         </TouchableOpacity>
        
        </Right>     
        
      </CardItem>

      </View>
              
           
  )
  
    }

  }
  />
  
    {/* ); FlatList Closed above */}
  
    </SafeAreaView>  :

    <View  style={{backgroundColor:"lightblue",alignItems:"center"}}>
     
     <Text style={globalStyles.text}>No Ads Found in database</Text>
   
     </View>

  }}

  ////////////// ///////////

