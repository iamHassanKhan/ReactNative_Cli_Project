import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../SharedFunctions/global';
import SearchButton from '../SharedFunctions/SearchButton';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import SearchtxtInput from '../SharedFunctions/SearchtxtInput';
import FlatButton from '../SharedFunctions/button';


export default class SearchResult extends React.Component {

  render() {

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={globalStyles.text2}>Search Something</Text>

        <View >

          <SearchtxtInput iconType="search" placeholdertxt="Find Cars" onPress={() => {
            alert("Search Button Clicked")
          }} />
          <SearchtxtInput iconType="location" placeholdertxt="Lahore, Punjab, Pakistan" iconType2="location" 
          onPress={() => {
            alert("Add Location")
          }} />

        </View>

      </View>
    );
  };
}


