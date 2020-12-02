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
        borderRadius: 0,
        borderColor: 'grey',
        borderWidth: 0.5,
      }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: 90,
            height: 50,
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignContent: 'center',
            marginLeft: 10,
            alignItems: 'center',
          }}>
          <Icon name={icon} color={coler} size={25} />
          <Text style={{color: 'blue', fontSize: 20}}>{title1}</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: 180,
          height: 50,
          marginHorizontal: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'blue', fontSize: 24}}>{title2} </Text>
      </View>
      <TouchableOpacity onPress={onPress2}>
        <View
          style={{
            width: 90,
            height: 50,
            flexDirection: 'row',
            justifyContent: "flex-end",
            alignContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <Icon name={icon2} color={coler2} size={25} />
          <Text style={{color: 'blue', fontSize: 20}}>{title3}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderButtonsTab;
