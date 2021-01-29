import React, {useContext, useState, useEffect} from 'react';
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
  PermissionsAndroid,

} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProviders';
import Geolocation from 'react-native-geolocation-service'
import auth, { firebase } from '@react-native-firebase/auth';
import Geocoder from 'react-native-geocoder';


 const  MakeAdd = (props) => {

   
  const [Make,setMake] = useState(null);
  const [Price,setPrice] = useState(null);
  const [Year,setYear] = useState(null);
  const [Driven,setDriven] = useState(null);
  const [Condition,setCondition] = useState(null);
  const [Discription,setDiscrip] = useState(null);
  const [Location,setLocation] = useState(null);
  const [city, setCity] = useState('Mauritius')
  const [editData, setEditData] = useState(props.route.params.item)
  
  const [image,setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(false)
  const {user} = useContext(AuthContext);
  

  //Image Picking from Library or camera Code Below

  useEffect(() => {
    // alert(JSON.stringify(editData))
    // alert(editData.id)
    // if(editData == ''){

    //   setImage(null)
    // }
    // else{
    //   setImage(editData.ImageUrl)

    // }
    intializingValue();
    getLocation();
    console.log(props.route.params.item)
  
  }, []);

  const getLocation = async () => {
    try {
      
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message:
          "grand a permission to access the locaiton ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the Location");
          Geolocation.getCurrentPosition(async (position) => {
              console.log(position)
              var lat = parseFloat(position.coords.latitude)
              var long = parseFloat(position.coords.longitude)
              var lng = parseFloat(position.coords.longitude)

              var initialRegion = {
                  latitude: lat,
                  longitude: long,
                  latitudeDelta: 0.0690,
                  longitudeDelta: 0.0150,
              }

              var positionLatLong = {
                  lat : position.coords.latitude,
                  long : position.coords.longitude
              }
              console.log(position)
              // try {
                  console.log(lat + "      " + long)
                  try {
                      Geocoder.geocodePosition({ lat: lat, lng: long}).then(res =>
                        // alert("Location"),
                          // console.log(res[0].locality)
                        setCity(res[0].locality),
                        
                        )
                   } catch(err) {
                     alert(err, 'Catch');
                   }

          },
              (error) => alert(JSON.stringify(error)),
              { enableHighAccuracy: true, timeout: 20000 });
      } else {
          console.log("Location permission denied");
        alert("kjjkjkjjnk")

      }
  } catch (err) {
      alert(err, "catch 2");
  }
  }

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
        setSelectedImage(true);
        setImage(response);
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

    return new Promise((resolve, reject) => {
      var imageRef = storage().ref('gs://carfinder-2a672.appspot.com').child(image.fileName);
      console.log(image.fileName)
      imageRef.putFile(image.uri)
        .then((data) => {
          console.log(data)
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
      })

/////
  // const { uri } = image;
  // const filename = uri.substring(uri.lastIndexOf('/') + 1);

  // const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

  // const storageRef = storage().ref(`photos/${filename}`);
  // const task =  storageRef.putFile(uploadUri);

  //  task.on('state_changed', snapshot => {

  //   });

  //  try {

  //  await task;
    
  //  const Imageurl = await storageRef.getDownloadURL();
  //  console.log("Image uploaded")

  //  setImage(null);

  //  return Imageurl;

  //  }
  //   catch (e) {
    
  //     Alert.alert(
  //       "You Can't Post",
  //       "Please Login with Email and Password to Submit Post!",
  //       [
          
  //         { text: "OK",  }
  //       ],
        
  //     );
      
   

  //   return null;
  //  }

  }

  
 };
 // intializing the value send from my Ads
 const intializingValue = () =>{
  if(editData == ''){
    setMake(null)
    setPrice(null)
    setYear(null)
    setDriven(null)
    setCondition(null)
    setDiscrip(null)
    setLocation(null)
    setImage(null)
  }
  else{
    setMake(editData.Make)
    setPrice(editData.Price)
    setYear(editData.Year)
    setDriven(editData.Driven)
    setCondition(editData.Condition)
    setDiscrip(editData.Discription)
    setLocation(editData.Location)
    setImage(editData.ImageUrl)
  }
 }
// update code below

const update = async () => {
  const Getimageurl = image == null || selectedImage  ? await uploadImage() : image;
  
firestore()
.collection('userAds')
.doc(editData.id)
.update({
  AdId:user.uid,
  Make:Make,
  Price:Price,
  Year:Year,
  Condition:Condition,
  Driven:Driven,
  Discription:Discription,
  Location:city,
  status: '',
  ImageUrl: Getimageurl,
  Time:firestore.Timestamp.fromDate(new Date()),
  likes:editData.likes,
})
.then(() => {
  alert('Ads updated!');
});
}
      
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
  Location:city,
  status: '',
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
        setImage(null);

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
        coler="blue"  title1="Back" onPress={()=>props.navigation.goBack()}/>
  <Text style={globalStyles.text}>
   Make your Ad <Icon name="edit" size={30}/>
  </Text>

  <View  >
    
  <TextInput editable = {false} value={city} onChangeText={(text)=>setLocation(text)} style={globalStyles.Formtxtinput} />
   <TextInput placeholder="Make i.e Honda"  value={Make} onChangeText={(text)=>setMake(text)} style={globalStyles.Formtxtinput} />
   <TextInput placeholder="Price "   value={Price} keyboardType="numeric" onChangeText={(text)=>setPrice(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year i.e 2000"   value={Year} keyboardType="numeric" onChangeText={(text)=>setYear(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Used or New"   value={Driven} onChangeText={(text)=>setDriven(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven / km "   value={Condition} keyboardType="numeric" onChangeText={(text)=>setCondition(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Detail Discription i.e (Contact Detail)" multiline numberOfLines={3} value={Discription} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>


  </View>
 
 {/* showing Image if Picked from library or camera */}
  
  {image ===null ? <Text>

      No Image Selected
      
    </Text> :
       <View style={globalStyles.Adimagecontainer}>
         {
           selectedImage == false ?
       <Image
          source={{ uri: editData.ImageUrl}}
          style={globalStyles.AdimageStyle}
        >
        </Image>
        :
        <Image
          source={{ uri: image.uri}}
          style={globalStyles.AdimageStyle}
        >
        </Image>
         }
       </View>}

    
      <FlatButton title="Add Image"  onPress={chooseFile}/>

     <View style={{flexDirection:"row" ,justifyContent:"center"}}>
      

    <FlatButton title= {editData ? ("Update Ad"): ("Post Ad")} 
      
       onPress={editData ? (update):(AddPost)}
    
     />
    </View>  
  
   
  </View>
 </ScrollView>
 
 
);
 
};

export default MakeAdd;
