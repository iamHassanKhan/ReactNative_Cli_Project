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
import { PostAd } from '../Navigation/FirebaseDB';

// Add your Post data in here  ....

 const  MakeAdd = ({navigation}) =>{
   
  const [Id,setId] = useState();
  const [Make,setMake] = useState('');
  const [Price,setPrice] = useState();
  const [Year,setYear] = useState();
  const [Driven,setDriven] = useState('');
  const [Condition,setCondition] = useState('');
  const [Discrip,setDiscrip] = useState('');
  const [image,setImage] = useState({});
  
  

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('Cancelled Image');
      } else if (response.error) {
        alert('Error : ', response.error)
      }
       else {
        let source = response;
        setImage(source);
      }
    });
  };

  const submitAd = () =>{

  PostAd(Id,Make,Price,Year,Condition,Driven,Discrip)
  .then(result=>{

    setId(null);
    setMake('');
    setPrice(null);
    setYear(null);
    setCondition('');
    setDriven('');
    setDiscrip('');
    

     alert("Your Ad is Submmited !")
  })
  .catch(error=>{
    alert("Error");
  })

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
   
   <TextInput placeholder="Make i.e Honda"  value={Make} onChangeText={(text)=>setMake(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Price "   value={Price} onChangeText={(text)=>setPrice(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year 2000"   value={Year} onChangeText={(text)=>setYear(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven / kilometers"   value={Driven} onChangeText={(text)=>setDriven(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Condition i.e Used or New "   value={Condition} onChangeText={(text)=>setCondition(text)} style={globalStyles.Formtxtinput}/>
   <TextInput multiline placeholder="Detail Discription" value={Discrip} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>


  </View>

  {/* Picking Image from camera or Gallery */}

  <View style={globalStyles.Adimagecontainer}>
       
        <Image
          source={{uri:image.uri}}
          style={globalStyles.AdimageStyle}
        />
       
       
        
      </View>
      <FlatButton title="Add Image"  onPress={chooseFile}/>
     <View style={{flexDirection:"row" ,justifyContent:"center"}}>
      

    <FlatButton title="Post Ad" 
     
     onPress={submitAd}
     
     //this.submitAd
     //Send file and ad data in database
     />
    </View>  
  
   
  </View>
 </ScrollView>
)
}



export default MakeAdd;






