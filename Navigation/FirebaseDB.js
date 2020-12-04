import database, { firebase } from '@react-native-firebase/database';
import Storage from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';

//==== Function to Ad Post in Database =====//

export const PostAd =(Id,Make,Price,Year,Driven,Condition,Discription,image) =>{
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
        Driven:Driven,
        Condition:Condition,
        Discription:Discription,
        pictures:image,
        
    };
    database()
    .ref('Ads/' + key)
    .push(Addata)
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
  

