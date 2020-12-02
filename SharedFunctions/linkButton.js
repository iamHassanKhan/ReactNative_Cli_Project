import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {globalStyles} from './global';
export default function LinkButton({title, onPress}) {
  return (
    <View style={globalStyles.linkbtn}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,

            color: 'blue',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
