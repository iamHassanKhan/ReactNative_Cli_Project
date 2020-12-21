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
  
  const {user,login, guestuser ,googleLogin} = useContext(AuthContext);
 
  //If Email and Password hasn't wrriten by user
  
  const inputdata =()=>{

    if(email==''||password=='')
    {
      Alert.alert(
        "Login Failed",
        "Please Enter Email and Password Correctly !!",
        [
          
          { text: "OK",  }
        ],
        //{ cancelable: false }
      );
     
    }else
    {
      
     alert("Well come back Again!!",login(email, password));
      
    }
  }


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>

      <Image style={globalStyles.logo} source={require('../assets/car1.jpg')} />
      <Text style={globalStyles.text}>CarFinder</Text>

    
      
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
        // login(email, password)
      }
    />

      <LinkButton
        title="Forget Password ?"
        onPress={() => {alert('Forget Password function clicked');} 
          
        }
      />

      <FlatButton2
        btnType="chevron-right"
        title="Sign In with Gmail"
        onPress={() => googleLogin()
        
        }
      />

      {/* <FlatButton2
        btnType="chevron-right"
        title="Sign In with Phone No"
        onPress={() => navigation.navigate("LoginPhoneNo")}
      />  */}
      
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
  );
};

export default Login;
