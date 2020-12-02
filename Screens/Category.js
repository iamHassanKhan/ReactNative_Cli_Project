import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
  Modal,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import FlatButton from '../SharedFunctions/button';

import {globalStyles} from '../SharedFunctions/global';
import FlatButton2 from '../SharedFunctions/button2';


//=====================================//
const posts = [ 
  {
    id: '1',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'Used',
    year: '2012',
    avatar: require('../assets/car2.png'),
    addimage: require('../assets/car4.jpg'),
    loction: 'Lahore',
  },
  {
    id: '2',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'Used',
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '3',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used',
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '4',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '5',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '6',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '7',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '8',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
  {
    id: '9',
    name: 'Hassan Khan',
    description: 'My Car ,iam Looking forward to sell it',
    price: '20,00000',
    timestamp: 1122020,
    make: 'Farari',
    driven: '2000km',
    condition: 'used', 
    year: '2012',
    avatar: require('../assets/car.jpg'),
    addimage: require('../assets/car.jpg'),
    loction: 'Lahore',
  },
];

const Category = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
      }}>
     <Text style={globalStyles.text2}>
       Car Categories will shown here
     </Text>
     <FlatButton  title="Cancel" onPress={() => navigation.goBack()}/>
    </View>
  );
};

export default Category;