import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';

// librray for first Screeens Below
//=========================

import Onboarding from 'react-native-onboarding-swiper';

//===================
//===================

const firstScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: 'lightblue',
          image: <Image source={require('../assets/f2.jpg')} />,
          title: 'Wellcome',
          subtitle: 'to CarFinder',
        },
        {
          backgroundColor: 'grey',
          image: <Image source={require('../assets/f01.jpg')} />,
          title: ' Easy to find',
          subtitle: 'Easy to Find Your Desired Cars at your nearest Place.',
        },
        {
          backgroundColor: 'lightpink',
          image: <Image source={require('../assets/f0.jpg')} />,
          title: 'Time Saving',
          subtitle: 'Find Desired Cars with no Time ',
        },
      ]}
    />
  );
};

export default firstScreen;
