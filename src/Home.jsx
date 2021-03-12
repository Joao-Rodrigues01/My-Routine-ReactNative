import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Container, 
  List, 
  Title, 
  ItemWrapper, 
  ItemText, 
  Title2, 
  Description, 
  Hours,
  TextWrapper } from './styles/styles';

const DATA = [
  {
    id:'1',
    title: 'Escovar os dentes',
    description: 'Levanto e logo vou escovar meus dentes.',
    image: "tooth",
    hours: '6h50 às 7h',
  },
  {
    id:'2',
    title: 'Tomar Café',
    description: 'Após escovar os dentes tomo meu café da manhã.',
    image: 'coffee',
    hours: '7h às 7h20',
  },
  {
    id:'3',
    title: 'Assitir as aulas online',
    description: 'Depois vou assistir a aulas online.',
    image: 'desktop',
    hours: '7h às 12h20',
  },
  {
    id:'4',
    title: 'Almoçar',
    description: 'Após as aulas eu almoço.',
    image: 'utensils',
    hours: '12h20 às 12h40',
  },
  {
    id:'5',
    title: 'Estudar programação',
    description: 'Depois da refeição vou para o Pc estudar programação.',
    image: 'react',
    hours: '13h às 15h30',
  },
  {
    id:'6',
    title: 'Lazer',
    description: 'Após os estudos vou jogar alguns games.',
    image: 'gamepad',
    hours: '16h às 18h',
  },
  {
    id:'7',
    title: 'Jantar',
    description: 'Depois do lazer eu janto.',
    image: 'utensils',
    hours: '18h às 18h30',
  },
  {
    id:'8',
    title: 'Dormir',
    description: 'Depois de todas essas atividades eu vou dormir.',
    image: 'bed',
    hours: '22h às 6h50',
  },
]

const Item = ({ title, description, image, hours }) => (
  <ItemWrapper>
    <Icon name={image} color="#07bed6" size={34}/>
    <TextWrapper>
      <ItemText>{title}</ItemText>
      <Description>{description}</Description>
      <Hours>{hours}</Hours>
    </TextWrapper>
  </ItemWrapper>
);

export default function Home(){
  const renderItem = ({ item }) => 
  <Item 
    title={item.title} 
    description={item.description} 
    image={item.image} 
    hours={item.hours} 
  />;

  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Minha rotina</Title>
      <List>
        <FlatList 
          data={DATA} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          style={{ flex: 1}}
          showsVerticalScrollIndicator={false}
        />
      </List>

      <Title2>Role a lista para baixo <Icon name="hand-point-down" size={24}/> </Title2>
    </Container>
  );
}
