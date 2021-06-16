import React from 'react';
import { View } from 'react-native';
import { ContainerButton, Item, ActionContainer } from './styles';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ data, selectedItem }) {

  function RightActions() {
    return (
      <ActionContainer>
        <Feather
          name="trash"
          color="#fff"
          size={ 24 }
        />
      </ActionContainer>
    )
  }

  return (
    <View>
      <Swipeable renderRightActions={ RightActions } >
        <ContainerButton activeOpacity={ 0.8 } onPress={ () => selectedItem(data) }>
          <Feather
            name='link'
            color='#fff'
            size={ 24 }
          />
          <Item numberOfLines={ 1 }>{ data.long_url }</Item>
        </ContainerButton>
      </Swipeable>
    </View>
  )
}