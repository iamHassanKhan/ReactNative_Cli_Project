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
import FlatButton from '../SharedFunctions/button';
import Login from '../Screens/Login';


const Sell = ({navigation}) => {

  



  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <Text style={globalStyles.text}>Sell Something</Text>
      <FlatButton
        title="Make Add"
        
         onPress={() => navigation.navigate('MakeAdd', {item: ''})}
      />
    </View>
  );
};

export default Sell;
