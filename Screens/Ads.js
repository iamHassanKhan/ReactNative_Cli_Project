import React, {useContext, useState ,useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Alert,
  StatusBar,
  Image,FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProviders';
//Auth Context imported for checking Authentice  User

const Ads = ({navigation}) => {

  const [myAds,setMyAds] = useState([]); 
  const {register} = useContext(AuthContext);
  /////////////////

useEffect( ()=>{
 
  const GetAds = async () => {

    try{

    const MyAdsList = [];

   await firestore()
    .collection('userAds')
    .get()
    .then((querySnapshot)=> {

      // console.log("Total Post  => ",querySnapshot.size);

     querySnapshot.forEach( doc =>{
     
     const  {Make,Year,Price,Driven,Discription,Condition,Time,Location,ImageUrl }= doc.data();
     
     MyAdsList.push({

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


  setMyAds(MyAdsList);




    } catch(err){

      console.log(err)

    }

  }

  GetAds();

},[]);

  //Getting data/Ads from fireStore code Above
  


  return (
    <View
      style={{
        flex: 1,
        marginHorizontal:10,
      }}>
      <Text style={globalStyles.text}> My Ads </Text>

      <SafeAreaView >


<FlatList
  
 data={myAds}
 keyExtractor={(item, index) => index.toString()}
 showsVerticalScrollIndicator={false}
 
 renderItem={({ item, index }) => {


return(

<View>
<Card style={globalStyles.MyAdsCardStyle} key={index}>

<Card.Cover source={{uri:item.ImageUrl}} style={globalStyles.MyAdsCardImageStyle}/>

<Card.Content>
  <Title>{item.Make}</Title>
  <Paragraph>{item.Discription}</Paragraph>
  <Paragraph>{item.Location}</Paragraph>
</Card.Content>

 <View style={{justifyContent:"space-around",flexDirection:"row",marginBottom:5}}>

<TouchableOpacity>
<Text><Icon name="edit" size={25} />Edit</Text>
</TouchableOpacity>
 
<TouchableOpacity>
 <Text><Icon name="trash" size={25} />Delete</Text>
 </TouchableOpacity>
 
 </View>
 
</Card> 

</View>


)
 
} }

  /> 

{/*  FlatList Closed above */}

</SafeAreaView>

    </View>
)};

export default Ads;

