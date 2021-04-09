import React from 'react';
import { Container, Title, Perfil } from './styles';

const Header = () => {
  return(
    <Container bgColor='#f5f5f5'>
      <Title color='black'>
        AlugarMe
      </Title>
      <Perfil />
    </Container>
  );
}

export default Header;