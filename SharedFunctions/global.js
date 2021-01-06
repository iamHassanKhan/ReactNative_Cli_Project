import {StyleSheet} from 'react-native';
import Dimention, {
  windowHeight,
  windowWidth,
} from '../SharedFunctions/Dimention';
export const globalStyles = StyleSheet.create({
  
  //Login and Signup styles
  loginScreen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  
  //Top Text styling in pages 

  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 15,
    flexDirection:"row",
    
  },
  text2: {
    marginBottom:5,
    marginTop:5,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    flexDirection:"row",
    
  },
  text3: {
    marginBottom:5,
    marginTop:5,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    flexDirection:"row",
    
  },

  //Search page styles

  searchpage: {
    marginBottom: 1,
    borderBottomWidth: 0.5,
    padding: 10,

    margin: 10,
  },

  //flat list Styles for  Search Suggestion

  flatlistcontainer: {
    paddingTop: 2,
    margin: 5,
    padding: 5,
  },
  flatlistitem: {
    borderBottomWidth: 0.5,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    paddingTop: 5,
  },
  //login Screen Stylee

  //Buttons Style

  //logo styles for UserLogin and user Setting view
  logo: {
    height: 100,
    width: 100,
    borderRadius: 80,
    resizeMode:"contain",
    
  },
  userImglogo: {

    height: 60,
    width: 60,
    borderRadius:80,
    backgroundColor:"grey"
  },
  // Touchableopsity Setting user View Styles

  userView: {
    flexDirection: 'row',
    justifyContent: "space-around",
    backgroundColor: 'white',
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 20,
    borderRadius:20,
    elevation:20
  },

  usertext: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    margin: 20,
  },


//Customize buttons Styles

  buttonview: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 30,
    padding: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  button2view: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'blue',
    borderRadius: 30,
  },

  Searchbuttonview: {

    flexDirection:"row",
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 10,
    marginTop: 5,
    alignContent:"center",
    justifyContent: "center",
    marginBottom: 5,
    width:"80%",
    elevation:20,

  },
  // Style for going to and other page button

  linkbtn: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  GotoPage: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:"lightblue",
    borderRadius:90,
    width:"100%",
    height:30,
  
  },

  //textinput Styling fror Login and Signup 

  formtxtinputView: {
   
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: 'grey',
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  formtxtinput: {

    marginTop:5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    borderRadius: 8,

    fontSize: 16,
  },

  // Search View and Textinput Styling for Search page

  
  SearchtxtinputView: {

    marginTop: 5,
    marginBottom: 10,
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation:30,
    alignItems:"center",
    justifyContent:"space-around",
    borderRadius:40,
    
    
  },

  //icon Style for login ,signup and Search pages

  formiconstyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    width: 50,
    
  },
// Home Search button view Style

SearchViewHome:{

  marginTop:10,
  alignItems:"center"

},
 
  //CardStyles in Feed from database

  cardStyles: {

    borderRadius:10,
    marginBottom:8,
    marginHorizontal:10,
    backgroundColor:"lightblue",
    justifyContent:"space-between",
   // elevation:5,
    
  },

 
  Cardtext:{

    fontSize:16,
    fontWeight:"bold",
    
   },


  Cardimage:{
  
  borderRadius:5,
  width:200,
  height:200,

  },


  // Textinput styles for Ads Form styles

  Formtxtinput: {

    width: 350,
    height: 60,
    borderWidth: 0.5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: 'center', 
    flexDirection: 'row',
    backgroundColor:"lightgrey",
    elevation:150,
    textAlign:"center",
    fontSize:15,
    fontWeight:"bold",
    
    
    
  },

  //Make Ads form page view Styles

  AdPostScreen:{

    flex:1,
    alignItems:"center"
    
  },
  AdimageStyle: {
    width: "100%",
    height: "100%",
    
  },
  
  Adimagecontainer: {
   flex:1,
   marginTop:5,
   backgroundColor:"lightgrey",
   height:150,
   width:350,
   elevation:10,

  },

  //Simple  Page Container style

  ContainerStyle: {
   flex:1,
   justifyContent:"center",
   alignItems:"center",
   alignContent:"center",
   backgroundColor:"grey",
   
   
  },

//image in categeory Styles


ImageCategoriestylesView:{
  
 marginHorizontal:20,
 height:100,
 justifyContent:"center" ,
 
 
  },

  //my ads Styles

  MyAdsCardStyle:{

   marginHorizontal:10,
   marginBottom:5,
   marginTop:5, 
   backgroundColor:"white",
   borderRadius:20,
   elevation:10,
   borderWidth:0.5
  },
  IndicatorStyle:{

    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    

   
   }

});


 
  //User Profilee setting styles

  // usersettingview: {
  //   flexDirection: 'row',
  //   marginBottom: 5,
  //   borderBottomWidth: 0.5,
  //   borderTopWidth: 0.5,
  //   padding: 10,
  //   margin: 10,
  // },

  // usersettingtext: {
  //   alignContent: 'center',
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 20,

  //   paddingLeft: 30,
  // },

  // //My Ads view Style

  // addsettingview: {
  //   marginBottom: 5,
  //   borderTopWidth: 0.5,
  //   borderBottomWidth: 0.5,

  //   padding: 10,
  //   margin: 10,
  // },

  //image view style

  // avatarimage: {
  //   borderRadius: 50,
  //   width: 100,
  //   height: 100,
  //   marginLeft: 140,
  //   backgroundColor: 'white',
  //   marginTop: 5,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
