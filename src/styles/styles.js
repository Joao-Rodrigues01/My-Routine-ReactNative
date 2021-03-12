import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #F0F0F7;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.View`
  width: 320px;
  height: 54px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background: #FAFAFC;
  margin-bottom: 12px;
  padding-left: 10px;

  border-radius: 12px;
  border: 4px solid #E6E6F0;
`;

export const Title = styled.Text`
    color: #32264C;
    font-size: 30px;
    font-weight: bold;

    margin-bottom: 12px;
`;

export const Title2 = styled.Text`
  font-size: 20px;
  color: #8257E5;
  font-weight: bold; 
`;

export const ItemText = styled.Text`
  font-size: 18px;
  margin-left: 12px;
  color: #8C98A0;
`;


export const List = styled.View`
  max-height: 340px;
  width: 320px;
  display: flex;
  margin-bottom: 24px;
`;
