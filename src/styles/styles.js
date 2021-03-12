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
  height: 120px;
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

export const TextWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-left: 24px;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #8C98A0;
`;

export const Description = styled.Text`
  max-width: 220px;
  line-height: 22px;
  color: #21264C;
`;

export const Hours = styled.Text`
  color: #8257E5;
  background: #F0F0F7;
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
`;

export const List = styled.View`
  width: 320px;
  height: 480px;
  display: flex;
  margin-bottom: 24px;
`;
