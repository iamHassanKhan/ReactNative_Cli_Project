// import React, { useContext, useState,Component } from 'react';
// import {
//   SafeAreaView,
//   FlatList,
//   View,
//   Text,
//   ActivityIndicator,
//   Button,
//   Image,
//   TextInput,TouchableOpacity,
// } from 'react-native';
// import { globalStyles } from '../SharedFunctions/global';
// import HeaderButtonsTab from '../SharedFunctions/HeaderButtonsTab';
// import FlatButton from '../SharedFunctions/button';
// import {Card,Title,Paragraph, List} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';

// import database, { firebase } from '@react-native-firebase/database';


// // const posts = [ 
// //   {
// //     id: '1',
// //     name: 'Hassan Khan',
// //     description: 'My Car ,iam Looking forward to sell it ',
// //     price: '20,00000',
// //     timestamp: 1122020,
// //     make: 'Farari',
// //     driven: '2000km',
// //     condition: 'Used',
// //     year: '2012',
// //     avatar: require('../assets/car2.png'),
// //     addimage: require('../assets/car4.jpg'),
// //     loction: 'Lahore',
// //   },
// //   {
// //     id: '2',
// //     name: 'Hassan Khan',
// //     description: 'My Car ,iam Looking forward to sell it',
// //     price: '20,00000',
// //     timestamp: 1122020,
// //     make: 'Farari',
// //     driven: '2000km',
// //     condition: 'Used',
// //     year: '2012',
// //     avatar: require('../assets/car.jpg'),
// //     addimage: require('../assets/car.jpg'),
// //     loction: 'Lahore',
// //   },
// //   {
// //     id: '3',
// //     name: 'Hassan Khan',
// //     description: 'My Car ,iam Looking forward to sell it',
// //     price: '20,00000',
// //     timestamp: 1122020,
// //     make: 'Farari',
// //     driven: '2000km',
// //     condition: 'Used',
// //     year: '2012',
// //     avatar: require('../assets/car.jpg'),
// //     addimage: require('../assets/car.jpg'),
// //     loction: 'Lahore',
// //   },
 
// // ];


// export default class Feed extends Component {

  
//    constructor(props){
//      super(props);
//    }

//    state ={
     
//      MyAdsList:[]

//    }

//    componentDidMount(){

//     const myAds = firebase.database().ref("Ads");

//     myAds.on("value",dataSnap=>{

//       // console.log(Object.values(dataSnap.val()))

//       this.setState({MyAdsList:Object.values((dataSnap.val()))})
//     })
    
    
//   }

 


//   render() {
   
//     console.log(this.state)
   

//     // const MyList = this.state.MyAdsList.map(item=>{


//     //   <Card.Content>
//     //           <Title>
//     //            {item.Price}
//     //           </Title>
//     //   </Card.Content>
     
//     // })


  
//     //================//
 
//     return(
//       <View>
//        <Text style={globalStyles.text2}>
//          Feed items
//        </Text> 
//        <View style={globalStyles.feedPosts}>


      
//        {/* <FlatList
//         scrollEnabled
//         data={MyList}
//         keyExtractor={(item) => {
//           return `${item.Id} `
//         }}
//         renderItem={

//           <Card>
//             <Card.Content>
//         <Title>{Price}</Title>
//             </Card.Content>

//           </Card>
//         }
      
//         />  */}

//        </View>
      
//       </View>
//     )

// };
// }
    


