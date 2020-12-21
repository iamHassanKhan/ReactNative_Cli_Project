import database, { firebase } from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';


//==== Function to Ad Photo in Storge and getting url to put in Realtime database =====//

// uploadPhotosync = async uri =>{

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
//             res(url)
//         }
//     })
// }



//==== Function to Ad Post in Database =====//



export const PostAd = async (Id,Make,Price,Year,Driven,Condition,Discription) => {
     
    //const remoteUri = await  this.uploadPhotosync(localUri)
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
       // image:remoteUri,
        Time:Date.now()
        
        //image:geturl from above functon
        
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

//===========================//
 





//=======Function to delete Ad =========//



//==== Function to fetch data and show in feed ====//


//====================================================//

  ///==== Function To Report an Ad =====/////


export const ReportAd =(Id,ComplainMsg) => {

    return new Promise(function(resolve ,reject) {
    let key;
    if(Id!=null){
        key=Id;
    }else{
        key=database()
        .ref()
        .push().key;  
        
    }
    let Report={
        //Id:key,
        ComplainMsg:ComplainMsg,
        Time:Date.now()
        
    };
    database()
    .ref('Reports/')
    .push(Report)
    .then(snapshot=>{
    resolve(snapshot);
    })
    .catch(error =>{
    reject(error);
    });
});
}

//=====================///