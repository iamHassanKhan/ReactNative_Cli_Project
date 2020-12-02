import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {globalStyles} from '../SharedFunctions/global';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';


const MyAds = ({navigation}) => {

 
  return (
    <View style={globalStyles.addsettingview}>
      <Card>
        <Card.Cover source={require('../assets/car.jpg')} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              alert('Add Editted');
            }}>
            Edit
          </Button>
          <Button
            onPress={() => {
              alert('Add Deleted Successfully');
            }}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};
export default MyAds;
