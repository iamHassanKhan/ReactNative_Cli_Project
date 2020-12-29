import database, { firebase } from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';


//==== Function to Ad Photo in Storge and getting url to put in Realtime database =====//


//  uploadPhotosync = async uri =>{

//     const path = `Ads/${Date.now() }.jpg`
//     return new Promise (async(res,rej)=>{

//         const response = await fetch(uri)
//         const file = await response.blob()

//         let upload = storage().ref(path).put(file)
//         upload.on('state_changed' , snapshot=>{

//         }),err=>{
//             rej(err)
//         },async()=>{
//             const url = await upload.snapshot.ref.getDownloadURL()
//            return  res(url)
//         }
//     })
// }


// const remoteUri = await  uploadPhotosync(localUri);
//==== Function to Ad Post in Database =====//  



export const PostAd = async (Id,Make,Price,Year,Driven,Condition,Discription,Location,localUri) => {
     

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
        Location:Location,
        Price:Price,
        Year:Year,
        Condition:Condition,
        Driven:Driven,
        Discription:Discription,
       
        Time:Date.now(),

        //image:localUri,
         
        
    };
    database()
    .ref('Ads/'+key)
    .update(Addata)
    .then(snapshot=>{
    resolve(snapshot);
    })
    .catch(error =>{
    reject(error);
    });
});
}

//======================================//
 





//=======Function to delete Ad =========//





//====================================================//

  ///==== Function To Report an Ad =====/////



