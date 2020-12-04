import database, { firebase } from '@react-native-firebase/database';
import Storage from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';

//==== Function to Ad Post in Database =====//

export const PostAd =(Id,Make,Year,Driven,Discrip,Condition,Price) =>{
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
        Year:Year,
        Driven:Driven,
        Discription:Discrip,
        Condition:Condition,
        Price:Price,
        
    };
    database()
    .ref('Ads/' + key)
    .update(Addata)
    .then(snapshot=>{
    resolve(snapshot);
    })
    .catch(error =>{s
    reject(error);
    });
});
}



//=======Function to delete Ad =========//

export const DellAllAds =() =>{
     
    database().ref('Ads').remove();
};

//==== Function to fetch data and show in feed ====//
  

