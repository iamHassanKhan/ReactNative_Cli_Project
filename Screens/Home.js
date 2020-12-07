import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,FlatList,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../SharedFunctions/Header';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SearchButton from '../SharedFunctions/SearchButton';
import {Card,Title,Paragraph} from 'react-native-paper';
import FlatButton from '../SharedFunctions/button';
import LinkButton from '../SharedFunctions/linkButton';

import Feed from './Feed';

import database, { firebase } from '@react-native-firebase/database';



const posts = [ 
  {
    id: '1',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it ',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'Used',
    year: '2012',
    avatar: require('../assets/car2.png'),
    addimage: require('../assets/car4.jpg'),
    loction: 'Lahore',
  },
  {
    id: '2',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'Used',
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '3',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used',
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '4',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '5',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '6',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '7',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '8',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '9',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
];







//Dummy Post data  Above

const Home = ({navigation,item}) => {
 

  
    

  const [like , setLike] = useState("white");

 const Liked = () => {

   
   // setLike("red");
    alert("liked",setLike("red"));

   }

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
     
      <View style={globalStyles.SearcView}>
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
      
      

      {/* //feed  */}

      <View style={globalStyles.feed}>
        
       

       {/* Feed data showing Below */}
       <View style={globalStyles.feedItemView}>
       
       <FlatList
       scrollEnabled
       data={posts}
       keyExtractor={item => item.id}
      renderItem={({item})=>(
       
   <TouchableOpacity 
   onPress={()=>{navigation.navigate("FeedItems",
   {itemId: item.id, itemPrice:item.price ,itemDescrip:item.description, itemDriven:item.driven, itemLocation:item.loction, itemMake:item.make ,itemTime:item.timestamp, itemYear:item.year, itemImage:item.addimage, itemUser:item.avatar, itemCondition:item.condition, itemImage:item.addimage} )}} >

    <View style={globalStyles.feedPosts}>
    
   <Card style={globalStyles.cardStyles}>

      <View style={globalStyles.PostLike}>

      <Card.Actions>

        <Icon name="heart" size={20} color={like} onPress={Liked} />
        
      </Card.Actions>
    </View>
    
      {/* <Card.Cover  source={item.addimage} style={globalStyles.Postimage} /> */}
      <Card.Content>
      <Title>{item.price}</Title>
      <Paragraph style={globalStyles.postdetail}>{item.make}</Paragraph>
      <Paragraph>{item.loction}</Paragraph>
      </Card.Content>
   

   </Card> 
    
  </View>
        
  </TouchableOpacity>

  )}

  
       />
       
      </View>
      </View>
     
     
    </View>
  );
};

export default Home;
