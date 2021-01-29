import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, Alert,
  StatusBar,
  Image, FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../SharedFunctions/global';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { AuthContext } from '../Navigation/AuthProviders';
import auth, { firebase } from '@react-native-firebase/auth';

//Auth Context imported for checking Authentice  User

const Ads = ({ navigation }) => {

  const [myAds, setMyAds] = useState([]); 
  const [AdsUpdated, setAdUpadated] = useState(true);
  const { user } = useContext(AuthContext);


  // Function for getting data from fireStore Below

  const GetAds = async () => {

    try {

      const MyAdsList = [];

      await firestore()
        .collection('userAds')
        // .orderBy('Time','desc')
        .where("AdId", "==", auth().currentUser.uid )
        .get()
        .then((querySnapshot) => {

          querySnapshot.forEach(doc => {

            const { Make, Year, Price, Driven, Discription, Condition, Time, Location, ImageUrl,AdId,likes } = doc.data();

            MyAdsList.push({

              id: doc.id,
              Time: Time,
              AdId,
              Make,
              Price,
              Year,
              Condition,
              Discription,
              Driven,
              Location,
              ImageUrl,
              likes

            });

          })

        })


      setMyAds(MyAdsList);


    } catch (err) {

      console.log(err)

    }

  }

   //Refresh and Rerender the Getting Ads Function  in App

  useEffect(() => {   

    GetAds();

  }, []);

  //Again rendered Ads after any Edit or Delete function Runs

  useEffect(()=>{
    GetAds();
    setAdUpadated(false);

  },[AdsUpdated])



//Delete Ad Function is Here Below

// const deleteAd = () => {

// }

// const deleteAd = (AdId) =>{

// console.log(AdId);

// firestore()
// .collection('userAds')
// .doc(AdId)
// .get()
// .then(documentSnapshot =>{
//   if(documentSnapshot.exists){

//     const {ImageUrl} = documentSnapshot.data();
//     if(ImageUrl!==null){
//       const storageRef = storage().refFromURL(ImageUrl);
//       const imageRef = storage().ref(storageRef.fullPath);

//       imageRef
//       .delete().then(
//         ()=>{
//          console.log(`${ImageUrl} has been Deleted Sucessfully ` );
//          deleteAdFirestore(AdId);

//          setAdUpadated(true);
//       })
//       .catch(
//         (err) =>{
//          console.log("Error While Deleting Image ",err);
         
//       })
//     }
//   }
// })

// }

const deleteAdFirestore =(docId) =>{
 
  firestore()
  .collection('userAds')
  .doc(docId)
  .delete()
  .then(
    ()=>{
      setAdUpadated(true);
      
      Alert.alert(
        "Ad Deleted",
        "Ad deleted Successfully  !",
        [
          
          { text: "OK",  }

        ],
        
      );
  })
  .catch((err) =>{
    console.log("Error while Deleting Post data  =>", err)
  })

}





  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
      }}>
      <Text style={globalStyles.text}> My Ads </Text>
        <FlatList

          data={myAds}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}

          renderItem={({ item, index }) => {


            return (

              <View>


                <Card style={globalStyles.MyAdsCardStyle} key={index}>

                  <Card.Cover source={{ uri: item.ImageUrl }} style={globalStyles.MyAdsCardImageStyle} />

                  <Card.Content>
                    <Title>{item.Make}</Title>
                    <Paragraph>{item.Discription}</Paragraph>
                    <Paragraph>{item.Price}</Paragraph>

                  </Card.Content>
                       
                  {/* Checking if the user can edit or delete his own Ads */}

                  {user.uid == item.AdId ?
                  <View style={{ justifyContent: "space-around", flexDirection: "row", marginBottom: 5 }}>
                     
                     

                       <TouchableOpacity onPress={
                        ()=>{
                            navigation.navigate('MakeAdd', {item: item})
                          }}>
                       <Text><Icon name="edit" size={25} />Edit</Text>
                       </TouchableOpacity>
                      
                    <TouchableOpacity onPress={ 
                      ()=>
                      Alert.alert(
                        "Want to Delete Ad ?",
                        "This can't be undone !",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Ad Deletion cancel !"),
                            style: "cancel"
                          },
                          { text: "OK", onPress: () =>deleteAdFirestore(item.id) }
                        ],
                        { cancelable: false }

                       )
                      }
                    >
                    <Text><Icon name="trash" size={25} />Delete</Text>
                    </TouchableOpacity>
                        
                     
                  </View>  

                  : null}

                </Card>

                
              </View>


            )

          }}

        />
      
    </View>
  )
};

export default Ads;

