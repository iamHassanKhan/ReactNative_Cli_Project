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
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const HeaderButtonsTab = ({
  title1,
  title2,
  title3,
  icon,
  icon2,
  coler,
  coler2,
  onPress,
  onPress2,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems:"center",
        
        width:"100%"
      }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: 100,
            height: 50,
            flexDirection: 'row',
            justifyContent:"space-evenly",
            alignItems: "center",
          
            
          }}>
          <Icon name={icon} color={coler} size={20} />
          <Text style={{color: 'blue', fontSize: 20}}>{title1}</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: 200,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent:"center",
          
        }}>
        <Text style={{color: 'blue', fontSize: 24}}>{title2} </Text>
      </View>
      <TouchableOpacity onPress={onPress2}>
        <View
          style={{
            width: 100,
            height: 50,
            flexDirection: 'row',
            justifyContent:"space-evenly",
            alignItems: "center",
            
          }}>
          <Icon name={icon2} color={coler2} size={20} />
          <Text style={{color: 'blue', fontSize: 20}}>{title3}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderButtonsTab;
