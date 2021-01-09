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
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProviders';


 const  MakeAdd = ({navigation}) => {

   
  const [Make,setMake] = useState(null);
  const [Price,setPrice] = useState(null);
  const [Year,setYear] = useState(null);
  const [Driven,setDriven] = useState(null);
  const [Condition,setCondition] = useState(null);
  const [Discription,setDiscrip] = useState(null);
  const [Location,setLocation] = useState(null);

  const [image,setImage] = useState(null);
  
  const {user} = useContext(AuthContext);
  

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

        //console.log(source);

        setImage(source);
      }
    });
  };


// Image upload on firebase Storage Code below

const uploadImage = async () => {

  if(image==null){

    Alert.alert(
      "Unable to Submit Ad",
      "Please Fill All required Fields !",
      [
        
        { text: "OK",  }

      ],
      
    );


  }else{

  const { uri } = image;
  const filename = uri.substring(uri.lastIndexOf('/') + 1);

  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

  const storageRef = storage().ref(`photos/${filename}`);
  const task =  storageRef.putFile(uploadUri);

   task.on('state_changed', snapshot => {

    });

   try {

   await task;
    
   const Imageurl = await storageRef.getDownloadURL();
   console.log("Image uploaded")

   setImage(null);

   return Imageurl;

   }
    catch (e) {
    
      Alert.alert(
        "You Can't Post",
        "Please Login with Email and Password to Submit Post!",
        [
          
          { text: "OK",  }
        ],
        
      );
      
   

    return null;
   }

  }

  
 };
 

      
//Final Ads Post Code with Ads detail here below

const AddPost = async () => {


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

 const Getimageurl =  await uploadImage();

//  console.log('Image url=>' ,Getimageurl);

firestore()
.collection('userAds')
.add({

  AdId:user.uid,
  Make:Make,
  Price:Price,
  Year:Year,
  Condition:Condition,
  Driven:Driven,
  Discription:Discription,
  Location:Location,
  ImageUrl:Getimageurl,
  Time:firestore.Timestamp.fromDate(new Date()),
  likes:null,

})
.then(()=>{
  console.log("Ads Added in databse =>")
        
        setMake(null);
        setPrice(null);
        setYear(null); 
        setDriven(null);
        setCondition(null);
        setDiscrip(null);
        setLocation(null);

        Alert.alert(
          "Ads Submitted",
          "Ads Posted Successfully!",
          [
            
            { text: "OK",  }
          ],
          
        );
})
.catch((err) =>{
  
  Alert.alert(
    "You Can't Post",
    "Please Login with Email and Password to Submit Post!",
    [
      
      { text: "OK",  }
    ],
    
  );

});
 }

}

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
   <TextInput placeholder="Detail Discription i.e (Contact Detail)" multiline numberOfLines={3} value={Discription} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>


  </View>
 
 {/* showing Image if Picked from library or camera */}
  
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
      
       onPress={AddPost}
    
     />
    </View>  
  
   
  </View>
 </ScrollView>
 
 
);
 
};

export default MakeAdd;
