import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {globalStyles} from './global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function SearchButton({title, onPress}) {

  return (
    
    <View style={globalStyles.Searchbuttonview}>

      <TouchableOpacity onPress={onPress}>
        
        <Text
          style={{
            flexDirection: 'row',
            textAlign: 'justify',
            fontSize: 15,
            color: 'grey',
            justifyContent:"center",
            alignContent:"center"
          }}>

         <Icon name="search" size={15} color="grey"/> {title}

        </Text>

      </TouchableOpacity>
    </View>
  );
}
