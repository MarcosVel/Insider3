import React from 'react';
import { Share, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';

import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

export default function ModalLink({ onClose }) {

  function copyLink() {
    Clipboard.setString('https://google.com');
    alert('Link copiado com sucesso!');
  }
  
  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: https://google.com`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType');
        } else {
          // Compartilhou
          console.log('Compartilhado com sucesso')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Modal Compartilhar fechado')
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={ onClose }>
        <View style={ { flex: 1 } }></View>
      </TouchableWithoutFeedback>
      <Container>

        <Header>
          <TouchableOpacity onPress={ onClose }>
            <Feather
              name="x"
              color="#212743"
              size={ 30 }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ handleShare }>
            <Feather
              name="share"
              color="#212743"
              size={ 30 }
            />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={ 1 }>https://sujeitoprogramador.com.br</LongUrl>

          <ShortLinkArea
            activeOpacity={ 0.8 }
            onPress={ copyLink }
          >
            <ShortLinkUrl numberOfLines={ 1 }>https://sujprog.com</ShortLinkUrl>
            <TouchableOpacity onPress={ copyLink }>
              <Feather
                name='copy'
                color='#fff'
                size={ 25 }
              />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>

      </Container>
    </ModalContainer>
  )
}