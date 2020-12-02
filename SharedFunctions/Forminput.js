import React from 'react';
import {TextInput, View} from 'react-native';
import {globalStyles} from './global';
import Icon from 'react-native-vector-icons/AntDesign';
export default function FlatButton({
  valuetxt,
  placeholdertxt,
  iconType,
  keyboard,
  autoCap,
  autoCorr,
  ontextChnage,
  secureTxtEntry,
}) {
  return (
    <View style={globalStyles.formtxtinputView}>
      <View style={globalStyles.formiconstyle}>
        <Icon name={iconType} size={25} color="grey" />
      </View>
      <TextInput
    
        value={valuetxt}
        onChangeText={ontextChnage}
        placeholder={placeholdertxt}
        placeholderTextColor="lightgrey"
        numberOfLines={1}
        style={globalStyles.formtxtinput}
        keyboardType={keyboard}
        autoCapitalize={autoCap}
        autoCorrect={autoCorr}
        secureTextEntry={secureTxtEntry}
      />
    </View>
  );
}
