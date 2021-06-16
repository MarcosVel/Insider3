import styled from 'styled-components/native';

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: rgba(255, 255, 255, .21);
  margin: 7px 20px;
  padding: 12px;
  border-radius: 7px;
  align-items: center;
`;

export const Item = styled.Text`
  color: #fff;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 18px;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: 13%;
  background-color: #ff5555;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin: 7px 15px 7px -10px;
`;
