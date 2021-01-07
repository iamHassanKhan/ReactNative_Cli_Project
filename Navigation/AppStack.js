import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../Screens/Home';
import Sell from '../Screens/Sell';
import Ads from '../Screens/Ads';
import Setting from '../Screens/Setting';
import MakeAdd from '../Screens/MakeAdd';
import Search from '../Screens/Search';
import UpdateAd from '../Screens/UpdateAd';
// import UserSetting from '../Screens/UserSetting';
import SearchResult from '../Screens/SearchResult';
import FeedItems from '../Screens/FeedItems';
import Category from '../Screens/Category';
import ReportAds from '../Screens/ReportAds';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Objects  for Navigations

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const FeedStack = createStackNavigator();


const AppStack = () => {
 

  return (

    <Stack.Navigator headerMode="none">

      <Stack.Screen name="Hometabs" component={HomeTabs} />
     
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="MakeAdd" component={MakeAdd} />
      <Stack.Screen name="ReportAd" component={ReportAds} />
      <Stack.Screen name="UpdateAd" component={UpdateAd} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="ReprtAds" component={ReportAds} />
      


      {/* <Stack.Screen name="UserSetting" component={UserSetting} /> */}

    </Stack.Navigator>
  );
};

export default AppStack;

//===============================//

// Home Bottom Tabs Function Below



function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',

        inactiveTintColor: 'grey',

        activeBackgroundColor: 'skyblue',

        inactiveBackgroundColor: 'skyblue',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={25} color={color} />,
        }}
      />
      
    

      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarIcon: ({color}) => <Icon name="edit" size={25} color={color} />,
        }}
      />

      <Tab.Screen
        name="Ads"
        component={Ads}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="camera" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// ========================================//

//Feed items and Item Detaail function 

