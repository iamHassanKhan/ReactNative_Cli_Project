import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {globalStyles} from './global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function FlatButton2({title, onPress, btnType}) {
  return (
    <TouchableOpacity style={globalStyles.button2view} onPress={onPress}>
      <View
        style={{
          borderRadius: 80,
          width: 220,
          height: 20,
        }}>
        <Text
          style={{
            flexDirection: 'row',
            textAlign: 'center',
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            justifyContent: 'center',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          borderRadius: 80,
          width: 20,
          height: 20,
        }}>
        <Icon name={btnType} size={22} color="white" />
      </View>
    </TouchableOpacity>
  );
}
