import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';

import { Feather } from '@expo/vector-icons';

export default function ModalLink() {
  return (
    <ModalContainer>
      <View style={ { flex: 1 } }></View>
        <Container>

          <Header>
            <TouchableOpacity>
              <Feather
                name="x"
                color="#212743"
                size={ 30 }
              />
            </TouchableOpacity>
            <TouchableOpacity>
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

            <ShortLinkArea activeOpacity={ 0.8 }>
              <ShortLinkUrl numberOfLines={ 1 }>https://sujprog.com</ShortLinkUrl>
              <TouchableOpacity>
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