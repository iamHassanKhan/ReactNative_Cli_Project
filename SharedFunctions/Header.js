import React from 'react';
import {
 
  Button,
  Text,
  
} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

export default function Header({title, icon, onPress, coler}) {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: 'skyblue',
          justifyContent: 'center',
          textAlign: 'center',
        },
      }}>
      <Title
        style={{
          marginLeft: 150,
          color: 'white',
          fontSize: 25,
          fontWeight: 'normal',
          textAlign: 'center',
          justifyContent: 'center',
        }}>
        {title}
      </Title>

      {/* used button in Header for any Action */}
      <Appbar.Action
        style={{marginLeft: 0}}
        icon={icon}
        color={coler}
        onPress={onPress}
      />
    </Appbar.Header>
  );
}
