import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, List, Title, ItemWrapper, ItemText, Title2 } from './styles/styles';

const DATA = [
  {
    id:'1',
    title: 'Escovar os dentes',
  },
  {
    id:'2',
    title: 'Tomar Café',
  },
  {
    id:'3',
    title: 'Assitir as aulas online',
  },
  {
    id:'4',
    title: 'Almoçar',
  },
  {
    id:'5',
    title: 'Estudar React'
  },
  {
    id:'6',
    title: 'Terminar tarefas do teams'
  },
  {
    id:'7',
    title: 'Jantar'
  },
  {
    id:'8',
    title: 'Jogar',
  },
  {
    id:'9',
    title: 'Dormir'
  },
  
]

const Item = ({ title }) => (
  <ItemWrapper>
    <Icon name="check-circle" color="#04D361" size={20}/>
    <ItemText>{title}</ItemText>
  </ItemWrapper>
);

export default function Home(){
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Rotina</Title>
      <List>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
      </List>

      <Title2>Role a lista para baixo <Icon name="hand-point-down" size={24}/> </Title2>
    </Container>
  );
}
