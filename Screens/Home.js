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
import SearchButton from '../SharedFunctions/SearchButton';
import FlatButton from '../SharedFunctions/button';
import {Card, CardItem,Text,Left,Right,Body} from 'native-base';
import LinkButton from '../SharedFunctions/linkButton';
import firestore from '@react-native-firebase/firestore';
import Share from 'react-native-share';

const Home = ({navigation}) => {

  const [userAds,setUserAds] = useState([]); 
  const [like,setLike] = useState("grey");
// Share Ad

const ShareAd = async ()  => {


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

///////////////////
//Getting data from Firestore
/////////////////

const GetAds = async () => {

  try{

  const AdsList = [];

 await firestore()
  .collection('userAds')
  .orderBy('Time','desc')
  .get()
  .then((querySnapshot)=> {

    //How much ads are available in database in console

   // console.log("Total Post  => ",querySnapshot.size);

   querySnapshot.forEach( doc =>{
   
   const  {Make,Year,Price,Driven,Discription,Condition,Time,Location,ImageUrl }= doc.data();
   
   AdsList.push({

    id:doc.id,
    Time:Time,
    Make,
    Price,
    Year,
    Condition,
    Discription,
    Driven,
    Location,
    ImageUrl,


   }); 

  })

})


setUserAds(AdsList);

// console.log('AdsList    => ' , AdsList);
// console.log('userAds array =>' ,userAds );



  } catch(err){

    console.log(err)

  }

}

//Rendering Data from fireStore

useEffect( ()=>{
 
  GetAds();

},[GetAds]);


  //Getting data/Ads from fireStore code Above
  
  return (
    <View
        style={{
        flex: 1,
      }}>
      
      <Header
        title="Home"
        icon="home"
        coler="white"
        onPress={() => navigation.jumpTo('Setting')}
      />
     
        <View style={globalStyles.SearchViewHome}>
          
           <SearchButton
             title="Search Cars"
             onPress={() => navigation.navigate('Search')}
           />
        </View>
   
           {/* //Go For categories */}
      
           <View style={{flexDirection:"row" ,justifyContent:"space-around",}}>
        
            <Text style={globalStyles.text2}>
            Browse Categories
            </Text>

            <LinkButton title="See more" onPress={()=>navigation.push("Category")}/>

           </View>


<SafeAreaView >


<FlatList
  
 data={userAds}
 keyExtractor={(item, index) => index.toString()}
 showsVerticalScrollIndicator={false}
 
 renderItem={({ item, index }) => {


return(

<View>

<TouchableOpacity onPress={()=>{
  navigation.navigate("AdDetail",
  { item:item}
  );
}}>

<CardItem style={globalStyles.cardStyles} key={index} >

<Image source={{uri:item.ImageUrl}} style={globalStyles.Cardimage}/>

<Right >

<View  style={globalStyles.CardIcon}>

<Icon active name="share" size={25} color="grey" onPress={ShareAd} />

<Icon active name="heart" size={25}  color={like} onPress={
 ()=>{

    setLike("red");
 }
} />

</View>


<Text style={globalStyles.Cardtext}>{item.Make}</Text>

<Text style={globalStyles.Cardtext}>{item.Year}</Text>
  

<Text ><Icon name="location-arrow" size={15}/>{'  '}{item.Location}</Text>


<Text style={{color:"black",fontSize:10}}>{Date(item.Time)}</Text>

</Right>     

</CardItem>

</TouchableOpacity>

</View>


)
 
} }

  /> 

{/*  FlatList Closed above */}

</SafeAreaView>

</View>
);
};

export default Home;
