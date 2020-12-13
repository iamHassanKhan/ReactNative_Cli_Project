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
    marginBottom: 5,
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
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  userlogo: {
    height: 80,
    width: 80,
    marginLeft: 1,
    resizeMode: 'cover',
    borderRadius: 100,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  SearcView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  userView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  usertext: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    margin: 20,
  },

// buttons Styles

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
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    alignContent:"center",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"black",
    marginBottom: 5,
    borderWidth:1,
    width:"70%"

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
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formtxtinput: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    borderRadius: 8,

    fontSize: 16,
  },
  //textinput Styling for Search page

  
  SearchtxtinputView: {
    marginTop: 5,
    marginBottom: 5,
    height: 45,
    borderColor: 'green',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:"center",
    justifyContent:"center",
    backgroundColor: 'white',
    
  },
  Searchtxtinput: {
    backgroundColor:"white",
    padding: 10,
    width: 300,
    fontSize: 16,
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center"
    
  },

  //icon Style for login ,signup and Search pages

  formiconstyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: 'grey',
    borderLeftWidth: 1,
    width: 50,
  },

  searchiconstyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"lightblue",
    width: 50,
  },
 
  //User Profilee setting styles

  usersettingview: {
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    padding: 10,
    margin: 10,
  },
  usersettingtext: {
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,

    paddingLeft: 30,
  },

  //My Adds view Style
  addsettingview: {
    marginBottom: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,

    padding: 10,
    margin: 10,
  },
  //image view style

  avatarimage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginLeft: 140,
    backgroundColor: 'white',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  

  //CardStyles in Feed from database

  cardStyles: {

    
    borderWidth:1,
    borderRadius:10,
    marginBottom:5,
    marginHorizontal:8,
    backgroundColor:"lightblue",
    justifyContent:"space-around"
    
  },

  //=============//

  postdetailStyles:{

    
    justifyContent:"center", 
    width:200,
    height:200,
    
    
  },
  posttext:{

    fontSize:16,
    fontWeight:"bold",
    
   },


  Postimage:{
  
  borderRadius:5,
  width:200,
  height:200,

  },
 
  //======================
  //make an Add commponent in form styles
  //======================
  // addformOpt: {
  //   borderWidth: 0.5,
  //   marginTop: 8,
  //   marginBottom: 5,
  //   borderRadius: 10,
  //   marginHorizontal: 20,
  //   padding: 10,
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   borderColor: 'green',
  // },
  // textinput styles for Ads Form styles

  Formtxtinput: {
    width: 350,
    height: 50,
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 50,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    borderColor: "green",
    backgroundColor:"white",
    color:"black"
    
    
  },

  // TxtiNform: {
  //   marginHorizontal: 20,
  //   padding: 5,
  //   fontSize: 15,
  //   marginBottom: 10,
  //   color:"red"
  // },
  
  FeeditemImage: {
    width:400 ,
    height:200
    
  },
  AdPostScreen:{

    flex:1,
    marginBottom:5,
    alignItems:"center"
    
  },
  AdimageStyle: {
    width: 400,
    height: 200,
    margin: 5,
  },
  Adimagecontainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  AdtextStyle: {
    padding: 10,
    color: 'black'
  },


});
