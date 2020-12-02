import database, { firebase } from '@react-native-firebase/database';
import Storage, {firebase} from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';


export const PostAd =(Id,make,year,driven,discrip,condition,price) =>{

    let key;
    if(Id!=null){
        key=Id;
    }else{
        key=database()
        .ref()
        .push().key;  
        
    }
}