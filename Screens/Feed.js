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

// const posts = [ 
//   {
//     id: '1',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it ',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'Used',
//     year: '2012',
//     avatar: require('../assets/car2.png'),
//     addimage: require('../assets/car4.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '2',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'Used',
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '3',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'Used',
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
 
// ];


export default class Feed extends Component {

  
   constructor(props){
     super(props);
   }

   state ={
     
     Like:"white",
     MyAdsList:[]
    
   }
   //////////////////////////

  
    

   
   //Shared Function 

   
  ShareAd =() => {

    alert("Shared");
  }
  LikeAd =() => {

    this.setState({Like: "red"});   
  }
  
   componentDidMount(){
   
   

    const myAds = firebase.database().ref("Ads");

   

      myAds.on("value",dataSnap=>{

        // console.log(Object.values(dataSnap.val()))
  
        this.setState({MyAdsList:Object.values((dataSnap.val()))})
      }
      )
      
  
    
  }

  
  render() {


  

  /////      Condition Below if There is a ( UserAds ) data in Database or Else


     return this.state.MyAdsList.length > 0 ?

     <SafeAreaView style={{backgroundColor:"ightgrey"}}>

               <FlatList
                data={this.state.MyAdsList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {

     
       return(

        <TouchableOpacity onPress={()=>{
          
        }}
      >

        <CardItem style={globalStyles.cardStyles}>
        
       <Image source={require('../assets/car.jpg')} style={globalStyles.Cardimage}/>
        
      

        <Right >
        
        <View  style={globalStyles.CardIcon}>

        <Icon active name="share" size={25} color="grey"  />

        <Icon active name="heart" size={25} color={this.state.Like} onPress={this.LikeAd} />
       
        </View>
        
        
      
        
        <Text style={globalStyles.Cardtext}>{item.Make}</Text>
              
        <Text style={globalStyles.Cardtext}>{item.Price}</Text>
                 
        <Text >{item.Condition}</Text>

         <Text >{item.Discription}</Text>
         
         <Text >{item.Driven}</Text>
         
         <Text ><Icon name="location-arrow" size={15}/>{'  '}{item.Location}</Text>

         <Text style={{color:"black",fontSize:11}}>{new Date(item.Time).toDateString()}</Text>

        </Right>     
        
      </CardItem>

      </TouchableOpacity>          
           
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

