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
    <View style={globalStyles.SearchtxtinputView}>
        
      <TextInput
    
        value={valuetxt}
        onChangeText={ontextChnage}
        placeholder={placeholdertxt}
        placeholderTextColor="lightgrey"
        numberOfLines={1}
        style={globalStyles.Searchtxtinput}
       
      />
      <View style={globalStyles.searchiconstyle}>
        <Icon name={iconType} size={25} color="black" onPress={onPress} />
      </View>
    </View>
  );
}
