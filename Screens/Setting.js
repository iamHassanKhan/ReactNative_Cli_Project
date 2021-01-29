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

  const [userdata,setUserdata] = useState([user.providerData]);

 //console.log(userdata);

  const Signout= ()=>{

    Alert.alert(
      "Signout",
      "Signout Sucessfully!!",
      [    
        logout()
      ],
      
    );
   
  }



  return (

    <View
      style={{
        flex: 1,
        
      }}>
     
      <Text style={globalStyles.text}>Account Details</Text>

     {/* <TouchableOpacity onPress={() => navigation.navigate('UserSetting')}> */}

       <TouchableOpacity>
        <View style={globalStyles.userView}>

          <Image
            style={globalStyles.userImglogo}

            //We can show User imag here 

            source={require('../assets/defaultImg.png')}
          />
          {
          user.email ?<Text style={globalStyles.usertext}>Login as  {user.email} </Text>
          :<Text style={globalStyles.usertext}> Login as Guest user</Text>
          }
          
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity >
      <View style={globalStyles.userView}>
        <Text style={globalStyles.text2}>More Detail</Text>
      </View>
      </TouchableOpacity>
     

      <View style={globalStyles.userView}>
        <FlatButton title="Sign out" onPress={() => Signout()} />
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("About")}>
      <View style={globalStyles.userView}>
        <Text style={globalStyles.text2}>CarFinder</Text>
      </View>
      </TouchableOpacity>



    </View>
  );
};

export default Setting;
