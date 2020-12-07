import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Alert,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import Header from '../SharedFunctions/Header';
// importing from AuthProvider firebase functions using Context to handle logout

import {AuthContext} from '../Navigation/AuthProviders';

const Setting = ({navigation}) => {
  //calling function and user values from Auth context

  const {user, logout} = useContext(AuthContext);

  const Signout= ()=>{

    Alert.alert(
      "Signout",
      "Signout Sucessfully!!",
      [
        
        logout()
      ],
      //{ cancelable: false }
    );
    //alert("Signout Sucessfully" , logout())
  }



  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignContent: 'center',
      }}>
      <Header
        title="Setting"
        icon="home"
        coler="white"
        onPress={() => navigation.jumpTo('Home')}
      />
      <Text style={globalStyles.text}>Settings</Text>

     {/* <TouchableOpacity onPress={() => navigation.navigate('UserSetting')}> */}
       <TouchableOpacity>
        <View style={globalStyles.userView}>
          <Image
            style={globalStyles.userlogo}
            source={require('../assets/defaultImg.png')}
          />
          <Text style={globalStyles.usertext}>Login as  {user.email} </Text>
          
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity >
      <View style={globalStyles.userView}>
        <Text style={globalStyles.text2}>More Settings</Text>
      </View>
      </TouchableOpacity>
     

      <View style={globalStyles.userView}>
        <FlatButton title="Sign out" onPress={() => Signout()} />
      </View>

      <TouchableOpacity >
      <View style={globalStyles.userView}>
        <Text style={globalStyles.text2}>CarFinder</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
