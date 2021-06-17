import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, ListLinks, Title, ContainerEmpty, WarningText } from './styles';
import { useIsFocused } from '@react-navigation/native';
import { getLinksSave, deleteLink } from '../../utils/storeLinks';
import ModalLink from '../../components/ModalLink';
import { ActivityIndicator, Modal } from 'react-native';

export default function MyLinks() {
  const isFocused = useIsFocused();

  const [ links, setLinks ] = useState([]);
  const [ data, setData ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('sujeitolinks');
      setLinks(result);
      setLoading(false);
    }

    getLinks();

  }, [ isFocused ]);

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  return (
    <Container>
      <StatusBarPage
        barStyle='light-content'
        backgroundColor='#132742'
      />

      <Menu />

      <Title>Meus Links</Title>

      {
        loading && (
          <ContainerEmpty>
            <ActivityIndicator color='#fff' size={ 30 } />
          </ContainerEmpty>
        )
      }

      {
        !loading && links.length === 0 && (
          <ContainerEmpty>
            <WarningText>Você ainda não salvou nenhum link 😢</WarningText>
          </ContainerEmpty>
        )
      }

      <ListLinks
        data={ links }
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) =>
          <ListItem data={ item } selectedItem={ handleItem } deleteItem={ handleDelete } />
        }
        contentContainerStyle={ { paddingBottom: 30 } }
        showsVerticalScrollIndicator={ false }
      />

      <Modal
        visible={ modalVisible }
        transparent
        animationType='slide'
      >
        <ModalLink onClose={ () => setModalVisible(false) } data={ data } />
      </Modal>

    </Container>
  )
}