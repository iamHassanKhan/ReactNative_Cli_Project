import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

export const AuthContext = createContext();


export const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        //Login with Email and Password
        login: async (email, password) => {
          
          try {
            await auth().signInWithEmailAndPassword(email, password);

          } catch (e) {
            alert("Email and Password are Incorrect");
          }
        },
        //Register with Email 
        register: async (email, password ,displayName) => {

          try {
            await auth().createUserWithEmailAndPassword(email, password);
        
            
           
          } catch (e) {
            alert("Use valid Email and Passowrd")
          }
        },
       // Logout function
        logout: async () => {
          try {
            await auth().signOut();

          } catch (e) {
            console.log(e);
          }
        },
        // login for Guest User 
        guestuser: async () => {
          try {
            await auth().signInAnonymously();
            
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

//  database Functions below

