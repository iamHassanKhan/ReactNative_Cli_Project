import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
  Button,
  Image,Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../SharedFunctions/global';
import SearchtxtInput from '../SharedFunctions/SearchtxtInput';
import FlatButton from '../SharedFunctions/button';
import {Card, CardItem,Text,Left,Right,Body} from 'native-base';
import database, { firebase } from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Share from 'react-native-share';


export default class SearchResult extends Component{

  constructor(props){
    super(props);
  }

  state ={
     
    Like:"white",
    MySearchList:[],
    Like:"white",
    searchAds:"",
    adlocation:"",
   
  }
//liked function
  LikeAd =() => {

    this.setState({Like: "red"});   
  }
  //shared Function
  ShareAd = async ()  => {

    const shareOptions = {

      message:"Your Title",
      
    }
    try{

      const shareResponse = await Share.open(shareOptions);
      
    }catch(err){

      Alert.alert(
        "Share Cancel",
        "Don't want to Share",
        [ 
          { text: "OK",  }
          
        ],
        
      );
    }
   }
    
  componentDidMount(){

  const myAds = firebase.database().ref("Ads");

   

  myAds.on("value",dataSnap=>{

    this.setState({MySearchList:Object.values((dataSnap.val()))})

  }

  )
  


}

  SearchCar =() =>{
   
  
  }

  Adlocation =() =>{
    
  }


  render() {

    return this.state.MySearchList.length > 0 ?

    <SafeAreaView >

      <View style={{marginHorizontal:15}} >
      <Text style={globalStyles.text2}>Search Ads</Text>
      <SearchtxtInput iconType="search"  placeholdertxt="Find Cars" onPress={() => {
      alert("Search Button Clicked")
       }} />

      <SearchtxtInput iconType="location" placeholdertxt="Lahore, Punjab, Pakistan" iconType2="location" 
      onPress={() => {
       alert("Add Location")
       }} />

      </View>
       
              <FlatList
               data={this.state.MySearchList}
               keyExtractor={(item, index) => index.toString()}
               renderItem={({ item, index }) => {

    
      return(

      
       <View style={{flex:1,alignContent:"center"}}>
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

         <Text >{item.Discription}</Text>
         
         <Text >{item.Driven}</Text>
         
         <Text ><Icon name="location-arrow" size={15}/>{'  '}{item.Location}</Text>

         <Text style={{color:"black",fontSize:11}}>{new Date(item.Time).toDateString()}</Text>

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

//===================================//
