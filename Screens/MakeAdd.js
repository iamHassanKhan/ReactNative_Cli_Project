import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,Alert,
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
import storage from '@react-native-firebase/storage';
import database, { firebase } from '@react-native-firebase/database';
// Add your Post data in here  ....

 const  MakeAdd = ({navigation}) =>{
   
  const [Id,setId] = useState();
  const [Make,setMake] = useState('');
  const [Price,setPrice] = useState(null);
  const [Year,setYear] = useState(null);
  const [Driven,setDriven] = useState('');
  const [Condition,setCondition] = useState('');
  const [Discription,setDiscrip] = useState('');
  const [Location,setLocation] = useState('');

  const [image,setImage] = useState(null);
  
  /////////////////////////////////////////////////

  //Image Picking from Library or camera Code Below

  const chooseFile = () => {


    let options = {
      title: 'Select Image',
      
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) =>
     {

      if (response.didCancel) {
        alert('Cancelled Image');
      } else if (response.error) {
        alert('Error : ', response.error)
      }
       else {
        const source ={uri: response.uri};
        console.log(source);
        setImage(source);
      }
    });
  };

////////////////////////////////////////////////////
// Ad data Sbmit to realTime database 


  const submitAd = () =>{

    if(Make==''||Price==''||Year==''||Condition==''||Driven==''||Discription==''||Location=='')
    {
      Alert.alert(
        "Unable to Submit Ad",
        "Please Fill All required Fields !",
        [
          
          { text: "OK",  }

        ],
        
      );
    } else{
      
      PostAd(Id,Make,Price,Year,Condition,Driven,Discription,Location)
      
      .then(result=>{

        setId(null);
        setMake('');
        setPrice();
        setYear(); 
        setDriven('');
        setCondition('');
        setDiscrip('');
        setLocation('');
        
        Alert.alert(
          "Ad Posted",
          "Your Ad is Submmited !",
          [
            
            { text: "OK",  }
          ],
          
        );
    
      })
      .catch(error=>{

        console.log(error)
        

        Alert.alert(
          "Permission Denied",
          "Please Login with Email To Submit Post !",
          [
            {
              text: "Cancel",
            },
            { text: "OK",  }
          ],
          
        );
        
      })
    }
  
};
////////////////////////////////////
// Image upload on firebase Storage Code below

const uploadImage = async () => {

  const { uri } = image;
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
 
  const task = storage()
    .ref(filename)
    .putFile(uploadUri);
  // set progress state
  task.on('state_changed', snapshot => {
       //console.log("Image uploaded")
  });
  try {
    await task;
  } catch (e) {
    console.error(e);
  }
 
  // 
  console.log("Image uploaded")
  setImage(null);
};
/////////////////////////////////////
const AddPost = () =>{

  submitAd();
  uploadImage();
}

// Function Above for Adding Ad data in Database
//===================================//



return(

  <ScrollView
  showsVerticalScrollIndicator={false}
  >

  <View style={globalStyles.AdPostScreen}>
  <HeaderButtonsTab  icon="angle-left"
        coler="blue"  title1="Back" onPress={()=> navigation.goBack()}/>
  <Text style={globalStyles.text}>
   Make your Ad <Icon name="edit" size={30}/>
  </Text>

  <View  >
  <TextInput placeholder="lahore,punjab,pakistan "  value={Location} onChangeText={(text)=>setLocation(text)} style={globalStyles.Formtxtinput} />
   <TextInput placeholder="Make i.e Honda"  value={Make} onChangeText={(text)=>setMake(text)} style={globalStyles.Formtxtinput} />
   <TextInput placeholder="Price "   value={Price} keyboardType="numeric" onChangeText={(text)=>setPrice(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year i.e 2000"   value={Year} keyboardType="numeric" onChangeText={(text)=>setYear(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Used or New"   value={Driven} onChangeText={(text)=>setDriven(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven / km "   value={Condition} keyboardType="numeric" onChangeText={(text)=>setCondition(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Detail Discription i.e (Contact Detail)" multiline value={Discription} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>


  </View>

  {/* Picking Image from camera or Gallery  */}
  
  {image===null ? <Text>

      No Image Selected

    </Text> :
       <View style={globalStyles.Adimagecontainer}>
       <Image
          source={{uri:image.uri}}
          style={globalStyles.AdimageStyle}
        >
        </Image>
       </View>}

    
      <FlatButton title="Add Image"  onPress={chooseFile}/>

     <View style={{flexDirection:"row" ,justifyContent:"center"}}>
      

    <FlatButton title="Post Ad" 
       //onPress={PostAd}
       onPress={AddPost}
     //Send file and ad data in database
     />
    </View>  
  
   
  </View>
 </ScrollView>
)
}


export default MakeAdd;


/////////////////////////////////////////

  //upload Image in Firebase Storage

  // const uploadImage = async (imageUri) => {

  //   const { uri } = image;
  //   const filename = uri.substring(uri.lastIndexOf('/') + 1);
  //   const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
   
  //   const task = storage()
  //     .ref(filename)
  //     .putFile(uploadUri);
    
  //   task.on('state_changed', snapshot => {
      
  //     //console.log("image Uploaded");

  //   })
    

  //   // try {
     
  //   //    await task;

  //   //   //console.log(imageUri);

  //   // } catch (e) {

  //   //   console.error("Error => ",e);

  //   // }
    
  //   setImage(null);
  
  // }
//////////////////////////////////////////////////////