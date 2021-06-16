import React from 'react';
import { Text, View } from 'react-native';
import { ContainerButton, Item } from './styles';
import { Feather } from '@expo/vector-icons';

export default function ListItem({ data, selectedItem }) {
  return (
    <View>
      <ContainerButton activeOpacity={ 0.8 } onPress={ () => selectedItem(data) }>
        <Feather
          name='link'
          color='#fff'
          size={ 24 }
        />
        <Item numberOfLines={ 1 }>{ data.long_url }</Item>
      </ContainerButton>
    </View>
  )
}