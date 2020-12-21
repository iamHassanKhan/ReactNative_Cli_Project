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

import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import LinkButton from '../SharedFunctions/linkButton';

import database, { firebase } from '@react-native-firebase/database'

const ReportAds = ({navigation,item}) => {
  
//==================================//


 

  return (
    <View style={globalStyles.ContainerStyle}>
      
      <Text style={globalStyles.text}>
          Wellcome to Report Ad Page
      </Text>
     </View>
       );
};

export default ReportAds;
