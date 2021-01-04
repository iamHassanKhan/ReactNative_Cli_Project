import React, {useContext, useState} from 'react';
import {
  View,Alert,
  Text,
  StatusBar,
  Button,TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';

const Require = () => {

    return(

        <TouchableOpacity >
        <View style={globalStyles.userView}>
          <Text style={globalStyles.text2}>Require Detail</Text>
        </View>
        </TouchableOpacity>
    )

}