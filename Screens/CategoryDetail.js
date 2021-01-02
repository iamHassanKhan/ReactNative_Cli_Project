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



const CategoryDetail = ({navigation,route}) => {

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



  return (
    <View >
     <HeaderButtonsTab icon="angle-left" coler="blue"  title1="Home" 
    onPress={()=>{
      navigation.goBack()
    }}/>
     <Text style={globalStyles.text2}>
       Car Categories will shown here
     </Text>
     <View>

        <CardItem style={globalStyles.cardStyles}>
        
        <Image source={require('../assets/car.jpg')} style={globalStyles.Cardimage}/>
        
      

        <Right >
        
        <View  style={globalStyles.CardIcon}>
        
        <Icon active name="share" size={25} color="grey" onPress={this.ShareAd}  />
        
        <Icon active name="heart" size={25} color={this.state.Like} onPress={this.LikeAd} />
       
        </View>
           
        
        <Text style={globalStyles.Cardtext}>Text</Text>
              
        <Text style={globalStyles.Cardtext}>Text</Text>
                 
        <Text >Text</Text>

         
         <Text >Text</Text>

         <Text >Text</Text>

         <Text ><Icon name="location-arrow" size={15}/>Text</Text>

         <Text style={{color:"black",fontSize:11}}>Hassan</Text>
         
         <TouchableOpacity onPress={()=>{}}>
         <Text>Report Ad  <Icon name="edit" size={15}/></Text>
         </TouchableOpacity>
        
        </Right>     
        
      </CardItem>

      </View>

    

  

  </View>
  );
 
};

export default CategoryDetail;