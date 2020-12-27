import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import SearchResult from '../Screens/SearchResult';

const Search = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        
      }}>
      <HeaderButtonsTab
        icon="angle-left"
        coler="blue"
        title1="Home"
        onPress={() => navigation.goBack()}
      />
      
      {/* Search for car Class */}

      <SearchResult/>
 
    </View>
  );
};

export default Search;
