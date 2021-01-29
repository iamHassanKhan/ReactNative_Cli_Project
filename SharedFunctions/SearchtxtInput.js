import React from 'react';
import {TextInput, View} from 'react-native';
import {globalStyles} from './global';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function SearchtxtInput({

  valuetxt,
  placeholdertxt,
  iconType,
  ontextChnage,
  onPress
  
}) {
  return (

    <View style={{

      marginTop: 5,
      marginBottom: 10,
      height: 50,
      flexDirection: 'row',
      backgroundColor: 'white',
      elevation:30,
      alignItems:"center",
      justifyContent:"space-around",
      borderRadius:40,
    }}>
        
      <TextInput
        onChangeText={ontextChnage}
        placeholder={placeholdertxt}
        placeholderTextColor="grey"
        numberOfLines={1}
       
      />
        <Icon name={iconType} size={25} color="black" onPress={onPress} />
    </View>
  );
}
