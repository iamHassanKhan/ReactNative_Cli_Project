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
  Text,
  Modal,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Share from 'react-native-share';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import {globalStyles} from '../SharedFunctions/global';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import LinkButton from '../SharedFunctions/linkButton';

//Dummy data 

// const posts = [ 
//   {
//     id: '1',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
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
//     condition: 'used',
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '4',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'used', 
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '5',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'used', 
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '6',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'used', 
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '7',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'used', 
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '8',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'used', 
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
//   {
//     id: '9',
//     name: 'Hassan Khan',
//     description: 'My Car ,iam Looking forward to sell it',
//     price: '20,00000',
//     timestamp: 1122020,
//     make: 'Farari',
//     driven: '2000km',
//     condition: 'used', 
//     year: '2012',
//     avatar: require('../assets/car.jpg'),
//     addimage: require('../assets/car.jpg'),
//     loction: 'Lahore',
//   },
// ];

const FeedItems = ({navigation,route}) => {
  const {itemId ,itemPrice,itemMake ,itemImage ,itemDescrip,itemTime , itemDriven ,itemYear,itemUser,itemLocation,itemCondition} =  route.params;
  return (
    <ScrollView>
     <View
      style={{
        flex: 1,
        alignContent:"center",
        backgroundColor:"lightblue"
        
      }}>
        <View style={{flexDirection:"row" }} >
        <HeaderButtonsTab
        icon="angle-left"
        coler="blue"

        onPress={() => navigation.goBack()} 
        />
        </View>
    
    <View >
     
    <Card >

       <View  style={{alignItems:"flex-end"}}>
       <Card.Actions>
       <Icon name="share" size={20}  color="red" onPress={()=>{alert("share Ad")}}/>
       </Card.Actions>
     </View>
     <TouchableOpacity>
     <Card.Cover style={globalStyles.FeeditemImage} source={itemImage} />
     </TouchableOpacity>
      
       <Card.Content >
       <Paragraph  style={Styles.addDetail}>{itemMake}</Paragraph>
       <Paragraph style={Styles.addDetail}>{itemYear}</Paragraph>
       <Paragraph style={Styles.addDetail}>{itemDriven}</Paragraph>
       <Paragraph style={Styles.addDetail}>{itemPrice}</Paragraph>
       <Paragraph style={Styles.addDetail}>{itemLocation}</Paragraph> 
       <Paragraph style={Styles.addDetail} >{itemTime}</Paragraph>
       <Paragraph style={Styles.addDetail} >{itemCondition}</Paragraph>
       <Paragraph style={Styles.addDetail}>{itemDescrip}</Paragraph>

       <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",alignContent:"center"}}>

         <Paragraph style={Styles.addDetail}>{itemId}</Paragraph>

         <LinkButton title="Report This Ad" onPress={()=>alert("Report This Ad")}/>
  
       </View>
       
       </Card.Content> 
 
    </Card> 
     
    </View>

    </View>
    </ScrollView>
  );
};

   
   
export default FeedItems;

const Styles = StyleSheet.create({
 addDetail:{
   borderBottomColor:"grey",
   borderBottomWidth:0.5,
   fontSize:20,
   marginTop:5,
   marginBottom:5

 }

})