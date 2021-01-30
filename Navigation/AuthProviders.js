import React, {createContext, useState} from 'react';
import {
  Alert,
  
} from 'react-native';
import auth from '@react-native-firebase/auth';

// import { GoogleSignin } from '@react-native-community/google-signin';

export const AuthContext = createContext();


export const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
    
      value={{
        user,
        setUser,

        // Login with Email and Password

        login: async (email, password) => {
          
          try {
            await auth().signInWithEmailAndPassword(email, password);

          } catch (e) {

            Alert.alert(
              "Login Failed",
              "Something went Wrong Try again with valid Email & Password!!",
              [
                
                { text: "OK",  }
              ],
              
            );
          }
        },

        //Register with Email 

        register: async (email, password ,displayName) => {

          try {
            await auth().createUserWithEmailAndPassword(email, password);
        
            
           
          } catch (e) {
            Alert.alert(
              "Registration Failed",
              "Something went Wrong ,Email already been Registed!!"
              [    
                { text: "OK",  }
              ],
              
            );
          }
        },

        //Google login

        //  googleLogin: async () =>{
        //    try{
        //     const { idToken } = await GoogleSignin.signIn();

        //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
            
        //     await auth().signInWithCredential(googleCredential);
        //    }catch(e){


        //     console.log("Error => ",e)
           
        //    }

        //  },


       // Logout function

        logout: async () => {
          try {
            await auth().signOut();

          } catch (e) {
            Alert.alert(
              "Signout Failed",
              "Something went Wrong!!"
              [
                
                { text: "OK",  }
              ],
              
            );
          }
        },
        // login for Guest User 
        guestuser: async () => {
          try {
            await auth().signInAnonymously();
            
          } catch (e) {
            Alert.alert(
              "Login Failed",
              "Something went Wrong Try Again!!"
              [
                
                { text: "OK",  }
              ],
              
            );
          }
        },
      }}>

      {children}

    </AuthContext.Provider>
  );
};



