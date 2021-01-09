import React, {useContext, useState} from 'react';
import {
  ScrollView,
  View,
  Text,Alert,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
import SearchtxtInput from '../SharedFunctions/SearchtxtInput';

const Search = ({navigation}) => {

  const [search,setSearch] = useState("");


  return (
    <View
      style={{
        flex: 1,
        
      }}>
      <HeaderButtonsTab
        icon="angle-left"
        coler="blue"
        title1="Home"
        onPress={() => navigation.goBack()}
      />
      <Text style={globalStyles.text2}>
        Search Car's Here
      </Text>

      <View style={{justifyContent:"center",marginHorizontal:20}}>

      <SearchtxtInput placeholdertxt="Search" iconType="search"
      valuetxt={search} ontextChnage={(content)=>setSearch(content)}
      onPress={()=>{
        alert(search)
        setSearch("")
      }  
        } />
      
      </View>
      
      
 
    </View>
  );
};

export default Search;
