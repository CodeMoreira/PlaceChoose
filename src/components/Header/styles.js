import styled from 'styled-components/native';

export const Container = styled.View`
  width:100%;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

  padding:10px;
  margin-bottom:15px;

  background:${props => props.bgColor ? props.bgColor : 'white' };
`;

export const Title = styled.Text`
  font-size:20px;
  color:${props => props.color ? props.color : 'black'};
`;

export const Perfil = styled.Image`
  width:40px;
  height:40px;
  background:black;
  border-radius:100px;
`;