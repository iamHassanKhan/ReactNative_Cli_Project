import React, {useContext, useState ,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import database, { firebase } from '@react-native-firebase/database';

//Auth Context imported for checking Authentice  User

const Ads = ({navigation}) => {

  const [Ads,setAds] = useState([]);

const deleteAd = (item) =>{

  database().ref('Ads/' +item.key)
  .remove()
  .then(()=>{

  }).catch((err)=>{
    console.log(err);
  })
}
const UpdateAd = (item) =>{
  alert(item);
}

useEffect(()=>{
  const Adsref = database().ref('/Ads');
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
    <ScrollView
      style={{
        flex: 1,
        
      }}>
      <Text style={globalStyles.text}>My Ads </Text>
      <View>
        {Ads.map((item,index) =>(


<Card>
<Card.Cover source={require('../assets/car.jpg')} />
<Card.Content>
  <Title>{item.Make}</Title>
  <Paragraph>{item.Discription}</Paragraph>
</Card.Content>
<Card.Actions>
  <Button
  style={{backgroundColor:"lightgrey",width:100 ,marginRight:20}}
  onPress={()=>{
    navigation.navigate("UpdateAd",{Id: item.Id,Price:item.Price ,Discription:item.Discription,Driven:item.Driven,Make:item.Make,Year:item.Year,Condition:item.Condition} );
  }}
  >
  Edit
  </Button>
  <Button style={{backgroundColor:"lightgrey",width:100}}
  onPress={()=> deleteAd(item)
  }>
   Delete
  </Button>
</Card.Actions>
</Card>
        ))}
     
      </View>
      
    </ScrollView>
  );
};

export default Ads;
