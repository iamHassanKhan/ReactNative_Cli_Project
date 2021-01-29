import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  StatusBar,
  Button,
  Image, Alert,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
import Header from '../SharedFunctions/Header';
import { globalStyles } from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SearchButton from '../SharedFunctions/SearchButton';
import FlatButton from '../SharedFunctions/button';
import { Card, CardItem, Text, Left, Right, Body } from 'native-base';
import LinkButton from '../SharedFunctions/linkButton';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import Share from 'react-native-share';
import SearchtxtInput from '../SharedFunctions/SearchtxtInput';
import Geolocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoder';
import {AuthContext} from '../Navigation/AuthProviders';

import moment from 'moment';

const Home = ({ navigation }) => {

  const [userAds, setUserAds] = useState([]);
  const [like, setLike] = useState("grey");
  const [search, setSearch] = useState("");
  const [selectedValue, setSelectedValue] = useState('');
  const [ city, setCity] = useState('')
  const [Favorite,setFavorites] = useState([])
  const {user} = useContext(AuthContext);


  // Share Ad
  const Search = async (val) => {
    let a = [];
     a = await search.filter(x => {
        return (x.Make.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    });
    console.log(a);
    let tempAds = []
    a.map((data,index) => {
      if (city == data.Location) {
        tempAds.push(data)
      }
    })
    setSearch(tempAds)
    setUserAds(tempAds)
  }

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

      }
  } catch (err) {
      alert(err, "catch 2");
  }
  }

  const ShareAd = async (item) => {


    const shareOptions = {

      title:"CarFinder" ,
      message: "Download App to Find Your Desired Car",
      url: item.ImageUrl,
     
      
    }
    try {

      const shareResponse = await Share.open(shareOptions);

    } catch (err) {

      Alert.alert(
        "Share Canceled",
        "Didn't want to Share",
        [
          { text: "OK", }

        ],

      );
    }
  }

  ///////////////////
  //Getting data from Firestore
  /////////////////

  const GetFav = async () => {

    try {

      const tempFavorite = [];

      await firestore()
        .collection('favorites')
        .get()
        .then((querySnapshot) => {

          //How much ads are available in database in console

          // console.log("Total Post  => ",querySnapshot.size);

          querySnapshot.forEach(doc => {

            const { Make, Year, Price, Driven, Discription, Condition, Time, Location, ImageUrl, AdId, } = doc.data();

            tempFavorite.push(doc.data());

          })

        })

      console.log('tempFavorites    => ' , tempFavorite);
      // console.log('userAds array =>' ,userAds );
      setFavorites(tempFavorite);
      GetAds(tempFavorite);

    } catch (err) {

      console.log(err)

    }

  }

  const GetAds = async (Fav) => {

    try {

      const AdsList = [];

      await firestore()
        .collection('userAds')
        .get()
        .then((querySnapshot) => {

          //How much ads are available in database in console

          // console.log("Total Post  => ",querySnapshot.size);

          querySnapshot.forEach(doc => {

            const { Make, Year, Price, Driven, Discription, Condition, Time, Location, ImageUrl, AdId,likes } = doc.data();

            AdsList.push({
              id: doc.id,
              Time: Time,
              Make,
              Price,
              Year,
              Condition,
              Discription,
              Driven,
              Location,
              ImageUrl,
              AdId,
              likes
            });
          })
        })
        let tempAds = [];
          AdsList.map((data,i) => {
            if (data.likes && data.likes.includes(auth().currentUser.uid)) {
              tempAds.push({
                id: data.id,
                Time: data.Time,
                Make : data.Make,
                Price : data.Price,
                Year : data.Year,
                Condition : data.Condition,
                Discription : data.Discription,
                Driven : data.Driven,
                Location : data.Location,
                ImageUrl : data.ImageUrl,
                AdId : data.AdId,
                likes : data.likes,
                fav : true 
              })
            }
            else {
              tempAds.push({
                id: data.id,
                Time: data.Time,
                Make : data.Make,
                Price : data.Price,
                Year : data.Year,
                Condition : data.Condition,
                Discription : data.Discription,
                Driven : data.Driven,
                Location : data.Location,
                ImageUrl : data.ImageUrl,
                AdId : data.AdId,
                likes : data.likes,
                fav : false 
              })
            }
          })
        console.log(tempAds)
      setUserAds(tempAds);
      setSearch(tempAds);

      // console.log('AdsList    => ' , AdsList);
      // console.log('userAds array =>' ,userAds );



    } catch (err) {

      console.log(err)

    }

  }

  //Rendering Data from fireStore

  useEffect(() => {
    getLocation();
    GetFav();


  }, []);

  //Getting data/Ads from fireStore code Above

  // sent ids to firesStore for favrouite

  const getFavouriteData = async (AdId,data,index) => {
    // setIsLoading(true)
    const favData = await firestore()
      .collection('favorites')
      .where("uid", "==", auth().currentUser.uid)
      .where("DocId", "==", AdId)
      .get()
    console.log(favData, "sldksfjldkflsajdlj;aslkdfliki")
    if (favData && favData._docs.length == 0) {
      firestore()
        .collection('favorites')
        .add({
          uid: auth().currentUser.uid,
          DocId: AdId,
        })

        .then(response => {
          console.log(response);
          const a = Object.assign([], userAds);
          a[index] = {
            id: data.id,
            Time: data.Time,
            Make : data.Make,
            Price : data.Price,
            Year : data.Year,
            Condition : data.Condition,
            Discription : data.Discription,
            Driven : data.Driven,
            Location : data.Location,
            ImageUrl : data.ImageUrl,
            AdId : data.AdId,
            fav : true 
          };
          setUserAds(a)
          setSearch(a)
          alert("Added to favourites");
          // setIsLoading(false)
        })
        .catch(error => {
          alert(error.message);
          // setIsLoading(false)

        })
        .catch(error => {
          alert(error.message);
          // setIsLoading(false)

        })
    }
    else {
      
  firestore()
  .collection('favorites')
  .where("uid", "==", auth().currentUser.uid)
  .where("DocId", "==", AdId)
  .delete()
    }
  }

  const FavClick = async (id,data,index) => {

    let tempLike = [];
    tempLike.push(auth().currentUser.uid)
  firestore()
  .collection('userAds')
  .doc(id)
  .update({
    likes:tempLike,
  })
  .then(() => {
    const a = Object.assign([], userAds);
    a[index] = {
      id: data.AdId,
      Time: data.Time,
      Make : data.Make,
      Price : data.Price,
      Year : data.Year,
      Condition : data.Condition,
      Discription : data.Discription,
      Driven : data.Driven,
      Location : data.Location,
      ImageUrl : data.ImageUrl,
      AdId : data.AdId,
      likes:tempLike,
      fav : true 
    };
    GetFav();
  });
  }

  const unFavClick = async (id,data,index) => {

    let tempLike = data.likes;
    console.log(data)
    tempLike.splice(data.likes.indexOf(auth().currentUser.uid),1);
  firestore()
  .collection('userAds')
  .doc(id)
  .update({
    likes:tempLike,
  })
  .then(() => {
    const a = Object.assign([], userAds);
    a[index] = {
      id: data.AdId,
      Time: data.Time,
      Make : data.Make,
      Price : data.Price,
      Year : data.Year,
      Condition : data.Condition,
      Discription : data.Discription,
      Driven : data.Driven,
      Location : data.Location,
      ImageUrl : data.ImageUrl,
      AdId : data.AdId,
      likes:tempLike,
      fav : false 
    };
    GetFav();
  });
  }

  return (
    <View
      style={{
        flex: 1,
      }}>

      <Header
        title="Home"
        icon="home"
        coler="white"
        onPress={() => navigation.jumpTo('Setting')}
      />

      <View style={{ justifyContent: "center", marginHorizontal: 20 }}>

        <SearchtxtInput placeholdertxt="Search" iconType="search"
           ontextChnage={(val) => {
            if (val == "") {
              GetAds();
            }
            else {
              Search(val)
            }
          }}
          // onPress={() => {
          //   alert(search)
          //   setSearch("")
          // }
          // } 
          />

      </View>

      {/* //Go For categories */}

      <View style={{ flexDirection: "row", justifyContent: "space-around", }}>

        <Text style={globalStyles.text2}>
          Browse Categories
            </Text>

        <LinkButton title="See more" onPress={() => navigation.push("Category")} />

      </View>
        <FlatList

          data={search}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}

          renderItem={({item, index}) => {

            console.log(item)
            return (
              // item.selectedValue ?
              <View>

                <TouchableOpacity onPress={() => {
                  navigation.navigate("AdDetail",
                    { item: item }
                  );
                }}>

                  <CardItem style={globalStyles.cardStyles} key={index} >

                    <Image source={{ uri: item.ImageUrl}} style={globalStyles.Cardimage} />

                    <Right >

                      <View style={globalStyles.CardIcon}>

                        <Icon active name="share" size={25} color="grey" onPress={()=>ShareAd(item)} />
                        <TouchableOpacity  onPress={
                          () => {
                            if (item.fav) {
                              unFavClick(search[index].id,item,index)
                            }
                            else {
                            FavClick(search[index].id,item,index)
                            }
                          }
                        }>

                        <Icon active name="heart" size={25} color={item.fav ? 'red' : like} />
                        </TouchableOpacity>

                      </View>


                      <Text style={globalStyles.Cardtext}>{item.Make}</Text>

                      <Text style={globalStyles.Cardtext}>{item.Year}</Text>


                      <Text ><Icon name="location-arrow" size={15} />{'  '}{item.Location}</Text>


                      <Text style={{ color: "black", fontSize: 10 }}>{moment(item.Time.toDate()).fromNow()}</Text>

                    </Right>

                  </CardItem>

                </TouchableOpacity>

              </View>
              // :
              // null


            )

          }}

        />

    </View>
  );
};

export default Home;
