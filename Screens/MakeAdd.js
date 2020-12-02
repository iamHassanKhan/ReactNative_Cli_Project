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

 const  MakeAdd = ({navigation}) =>{

  const [make,setMake] = useState('');
  const [price,setPrice] = useState(null);
  const [year,setYear] = useState(null);
  const [driven,setDriven] = useState(null);
  const [condition,setCondition] = useState('');
  const [discrip,setDiscrip] = useState('');

  const [filePath, setFilePath] = useState({});
  const [image,setImage] = useState();

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

  const submitAd = () =>{

  };

return(
  <ScrollView>
  <View style={globalStyles.AdPostScreen}>
  <HeaderButtonsTab  icon="angle-left"
        coler="blue"  onPress={()=> navigation.goBack()}/>
  <Text style={globalStyles.text}>
   Make your Ad <Icon name="edit" size={30}/>
  </Text>

  <View  >
   
   <TextInput placeholder="Make i.e Honda"  value={make} onChangeText={(text)=>setMake(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Price "   value={price} onChangeText={(text)=>setPrice(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year 2000"   value={year} onChangeText={(text)=>setYear(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven / kilometers"   value={driven} onChangeText={(text)=>setDriven(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Condition i.e Used or New "   value={condition} onChangeText={(text)=>setCondition(text)} style={globalStyles.Formtxtinput}/>
   <TextInput multiline placeholder="Detail Discription" value={discrip} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>


  </View>

  {/* Picking Image from camera or Gallery */}

  <View style={globalStyles.Adimagecontainer}>
       
        <Image
          source={{uri: filePath.uri}}
          style={globalStyles.AdimageStyle}
        />


        {/* for Showing File Path this is not compalsory */}

        {/* <Text style={globalStyles.AdtextStyle}>
          {filePath.uri}
        </Text> */}
       
        
      </View>
      <FlatButton title="Add Image"  onPress={chooseFile}/>
     <View style={{flexDirection:"row" ,justifyContent:"center"}}>
      

    <FlatButton title="Post Ad" 
     
     onPress={()=>alert("Post Added in database")}
     
     //this.submitAd
     //Send file and ad data in database
     />
    </View>  
  
   
  </View>
 </ScrollView>
)
}



export default MakeAdd;






