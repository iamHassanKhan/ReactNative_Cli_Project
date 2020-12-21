import React, { Component } from 'react';
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


class FeedItems extends Component  {
  render(){
  return (
    <View style={globalStyles.ContainerStyle}>
     <Text>
      Hlo view Detail Screen
    </Text>
    </View>
  );
};
}

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