import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,Alert,
  Text,TextInput,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatButton from '../SharedFunctions/button';
import FlatButton2 from '../SharedFunctions/button2';
import LinkButton from '../SharedFunctions/linkButton';
import Forminput from '../SharedFunctions/Forminput';


import {AuthContext} from '../Navigation/AuthProviders';


const Login = ({navigation}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {login, guestuser ,googleLogin} = useContext(AuthContext);
 
  //If Email and Password hasn't wrriten by user
  
  const inputdata =()=>{

    if(email==''||password=='')
    {
      Alert.alert(
        "Login Failed",
        "Please Enter Required Email and Password Feilds!",
        [
          
          { text: "OK",  }
        ],
        
      );
     
    }else
    {
      
     login(email, password).then(function(){
      Alert.alert(
        "Login Successfully",
        " Well come back Again",
        [ 

          { text: "OK",  }

        ],
        
      );
     })
      
    }
  }


  return (
    <View
      style={{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
        
      }}>
         
        <View>

        <Text style={globalStyles.text3}>Well come to </Text>

        </View>
        
       <View style={{flexDirection:"row",
       alignContent:"space-around", 
       
       }}>

       <Text style={globalStyles.text}>CarFinder</Text>
       <TouchableOpacity>
       <Image style={globalStyles.logo} source={require('../assets/carlogo.png')} />
       </TouchableOpacity>
       
 
       </View>
    
       <View style={{ alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,}}>

      <Forminput
        valuetxt={email}
        ontextChnage={ (userEmail) =>setEmail(userEmail)}
        placeholdertxt="Email i.e example1@email.com"
        iconType="user"
        keyboard="email-address"
        autoCap="none"
        autoCorr={false}
      
      />

      <Forminput
        valuetxt={password}
        ontextChnage={(userPassword) => setPassword(userPassword)}
        placeholdertxt="Password"
        iconType="lock"
        secureTxtEntry={true}
      />

      <FlatButton title="Sign In" 
      onPress={ () => inputdata()
       
      }
    />

      <LinkButton

        title="Forget Password ?"
        onPress={() => navigation.navigate('ForgetPassword')} 
          
      />

      <FlatButton2
        btnType="chevron-right"
        title="Sign In with Gmail"
        onPress={() => googleLogin() }
      />

      
      <FlatButton2
        btnType="chevron-right"
        title="Login as Guest "
        onPress={() => guestuser()}
      />
      <LinkButton
        title="Don't Have an Account ? Click here"
        onPress={() => navigation.navigate('Signup')}
      />

    </View>
</View>
  );
};

export default Login;
