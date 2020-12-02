import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import ImagePicker from 'react-native-image-picker';

// Add your Post data in here  ....

 const  GetimagePicker = ({navigation}) =>{

const [filePath, setFilePath] = useState({});

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

  

return(
  <ScrollView>

  <View style={{flex:1,alignItems:"center",alignContent:"center"}}>


  {/* Picking Image from camera or Gallery */}

  <View style={globalStyles.Adimagecontainer}>
       
        <Image
          source={{uri: filePath.uri}}
          style={globalStyles.AdimageStyle}
        />
        
      </View>

      <FlatButton title="Add Image"  onPress={chooseFile}/>

     <View style={{flexDirection:"row" ,justifyContent:"center"}}>
      
    </View>  
  
   
  </View>
 </ScrollView>
)
}


export default GetimagePicker;






