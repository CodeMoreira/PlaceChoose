import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;

  background: ${props => props.bgColor ? props.bgColor : '#f5f5f5'};
`;

export const Text = styled.Text`
  font-size:20px;
  color:${props => props.color ? props.color : 'black' } ;

  margin-left:30px;
`;