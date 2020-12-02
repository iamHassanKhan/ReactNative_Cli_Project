import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';

// importing from AuthProvider firebase functions using Context to handle logout

import {AuthContext} from '../Navigation/AuthProviders';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import ImagePicker from 'react-native-image-picker';

const UserSetting = ({navigation}) => {
  //calling function and user values from Auth context

  const {user, logout} = useContext(AuthContext);
  
  const [filePath, setFilePath] = useState({});
  const [image,setImage] = useState('../assets/car1.jpg');

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;

        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };



  return (

    <View
      style={{
        flex: 1,
      }}>
      <HeaderButtonsTab
        icon="angle-left"
        coler="blue"
        title1="Settings"
        onPress={() => navigation.goBack()}
        title3="Save"
        onPress2={() => navigation.goBack()}
      />
      <Text style={globalStyles.text}> Profile Setting</Text>
      <View
        style={{flexDirection: 'row', borderWidth: 0.5, borderColor: 'black'}}>
        <View
          style={{
            width: 100,
            height: 100,

            alignItems: 'center',
          }}>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={chooseFile}
            >
            <Image
              style={globalStyles.userlogo}
              
              source={{uri: filePath.uri}}

            />
            <Text style={{color: 'blue'}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 300,
            height: 100,

            justifyContent: 'center',
          }}>
          <Text style={globalStyles.usertext}>{user.uid} </Text>
        </View>
      </View>
    </View>
  );
};

export default UserSetting;
