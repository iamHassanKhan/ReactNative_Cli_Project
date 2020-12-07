import database, { firebase } from '@react-native-firebase/database';
import Storage from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';
import { exp } from 'react-native/Libraries/Animated/src/Easing';

//==== Function to Ad Post in Database =====//

export const PostAd =(Id,Make,Price,Year,Driven,Condition,Discription) => {

    return new Promise(function(resolve ,reject) {
    let key;
    if(Id!=null){
        key=Id;
    }else{
        key=database()
        .ref()
        .push().key;  
        
    }
    let Addata={
        Id:key,
        Make:Make,
        Price:Price,
        Year:Year,
        Condition:Condition,
        Driven:Driven,
        Discription:Discription,
        Time:Date.now()
        
    };
    database()
    .ref('Ads/')
    .push(Addata)
    .then(snapshot=>{
    resolve(snapshot);
    })
    .catch(error =>{
    reject(error);
    });
});
}

//===========================//
 





//=======Function to delete Ad =========//

export const DellAllAds =() =>{
     
    database().ref('Ads').remove();
};

//==== Function to fetch data and show in feed ====//
  
export async function getAds(foodRetrevied){

var DATAsnapshot = await firebase.database()
.ref('Ads')



}