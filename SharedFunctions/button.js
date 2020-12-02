import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {globalStyles} from './global';
export default function FlatButton({title, onPress}) {
  return (
    <View style={globalStyles.buttonview}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            flexDirection: 'row',
            textAlign: 'justify',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
