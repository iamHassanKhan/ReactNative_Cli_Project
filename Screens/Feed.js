import React, { useContext, useState,Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,Image,
  ActivityIndicator,
  TextInput,TouchableOpacity,Button,
} from 'react-native';
import { globalStyles } from '../SharedFunctions/global';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import FlatButton from '../SharedFunctions/button';
import {Paragraph} from 'react-native-paper';
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
     
     Like:"grey",
     MyAdsList:[]
    
   }
   
   //Shared Function 
   
  ShareAd =() => {
    alert("Shared");
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


   
   //////////////////////////////////////

   // console.log(this.state)
    
      
     // const databaseAds = this.state.MyAdsList.map(item =>{

  ////////////////////////////////////////

     return this.state.MyAdsList.length > 0 ?

     <SafeAreaView style={{backgroundColor:"ightgrey"}}>
               <FlatList
                data={this.state.MyAdsList}
               
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {

     
       
        
       return(

        <CardItem style={globalStyles.cardStyles}>
        
        <Image source={require('../assets/car.jpg')} style={globalStyles.Postimage}/>
        

        <Right style={globalStyles.postdetailStyles}>

        
        <Icon active name="heart" size={30} color={this.state.Like} onPress={this.ShareAd} />
        
      
        
        <Text style={globalStyles.posttext}>{item.Make}</Text>
              
        <Text style={globalStyles.posttext}>{item.Price}</Text>
                 
        <Text >{item.Condition}</Text>

         <Text >{item.Discription}</Text>

         <Text >{item.Driven}</Text>

         </Right>      
       
      </CardItem>
                 
           
  )
  
    }

  }
  />
  

    {/* ); */}
  
    </SafeAreaView>  :

    <View  style={{backgroundColor:"lightblue",alignItems:"center"}}>
     
     <Text style={globalStyles.text}>No Ads Found in database</Text>
   
     </View>

  }}

  
  /////////////////////////////////////////////
   

    //return(

        {/* <View style={{flex:1}}>
  
         <Text style={globalStyles.text2}>
          Explore Feeds
         </Text> 

  
       <Card>

       {databaseAds}

       </Card>     
    
        
        </View>
      )
   
};
}
     */}
/////////////////////////////////////////////////////

