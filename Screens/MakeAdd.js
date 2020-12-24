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

// Add your Post data in here  ....

 const  MakeAdd = ({navigation}) =>{
   
  const [Id,setId] = useState();
  const [Make,setMake] = useState('');
  const [Price,setPrice] = useState(null);
  const [Year,setYear] = useState(null);
  const [Driven,setDriven] = useState('');
  const [Condition,setCondition] = useState('');
  const [Discription,setDiscrip] = useState('');
  const [image,setImage] = useState(null);
  
  

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
        setImage({uri:source.uri});
      }
    });
  };

 //==========//


  //==/=======//

  const submitAd = () =>{

    if(Make==''||Price==''||Year==''||Condition==''||Driven==''||Discription=='')
    {
      Alert.alert(
        "Unable to Submit Ad",
        "Please Fill All required Fields !",
        [
          
          { text: "OK",  }

        ],
        
      );
    } else{
      PostAd(Id,Make,Price,Year,Condition,Driven,Discription)
      .then(result=>{
    
        setId(null);
        setMake('');
        setPrice();
        setYear(); 
        setDriven('');
        setCondition('');
        setDiscrip('');
        //setImage(null);
    
        Alert.alert(
          "Ad Posted",
          "Your Ad is Submmited !",
          [
            
            { text: "OK",  }
          ],
          
        );
    
      })
      .catch(error=>{

        //console.log(error)
        
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

return(

  <ScrollView>

  <View style={globalStyles.AdPostScreen}>
  <HeaderButtonsTab  icon="angle-left"
        coler="blue"  onPress={()=> navigation.goBack()}/>
  <Text style={globalStyles.text}>
   Make your Ad <Icon name="edit" size={30}/>
  </Text>

  <View  >
   
   <TextInput placeholder="Make i.e Honda"  value={Make} onChangeText={(text)=>setMake(text)} style={globalStyles.Formtxtinput} />
   <TextInput placeholder="Price "   value={Price} onChangeText={(text)=>setPrice(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Year i.e 2000"   value={Year} onChangeText={(text)=>setYear(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Used or New"   value={Driven} onChangeText={(text)=>setDriven(text)} style={globalStyles.Formtxtinput}/>
   <TextInput placeholder="Driven / km "   value={Condition} onChangeText={(text)=>setCondition(text)} style={globalStyles.Formtxtinput}/>
   <TextInput multiline placeholder="Detail Discription" value={Discription} onChangeText={(text)=>setDiscrip(text)} style={globalStyles.Formtxtinput}/>


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
     
     onPress={submitAd}
     //Send file and ad data in database
     />
    </View>  
  
   
  </View>
 </ScrollView>
)
}



export default MakeAdd;






