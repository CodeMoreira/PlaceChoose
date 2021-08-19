import React from 'react'
import { Container, Perfil, Logo, ContainerSwitch } from './style' 
import { Switch } from 'react-native'
import Foto from '../../assets/perfil.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ darkMode, changeDarkMode, colorIcon }) => {

   return(
      <Container>
         <Logo>Places</Logo>
         <ContainerSwitch>
            <Icon name="sunny" size={20} color={colorIcon}></Icon>
            <Switch 
               value={darkMode}
               onValueChange={changeDarkMode}
               thumbColor="#c4c4c4"
            />
            <Icon name="moon" size={20} color={colorIcon}></Icon>
         </ContainerSwitch>
         <Perfil source={Foto} />
      </Container>
   );
}

export default Header;