import React, {useContext, useState,useEffect} from 'react';
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
import {Card,Title,Paragraph,} from 'react-native-paper';
import FlatButton from '../SharedFunctions/button';
import LinkButton from '../SharedFunctions/linkButton';

import Feed from './Feed';

import database, { firebase } from '@react-native-firebase/database';


const Home = ({navigation}) => {
  

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
       
      {/* caling Feed class in Home */}

           <View>

           {/* <Feed/> */}

           </View>

  
     </View>
       );
};

export default Home;
