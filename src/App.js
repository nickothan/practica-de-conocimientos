import React from 'react';
import { Container, Description, Content } from './styles';

import Textos from './components/Textos/Textos';
import BackgroundSlice from './components/BackgroundSlide/BackgroundSlide'
import IconsMenu from './components/IconsMenu/IconsMenu'

function App() {
  
  return ( 
    <Container>
      <Description>
      Practica de conocimientos
      </Description>
      <Content>
      <Textos />
      <BackgroundSlice/>
      <IconsMenu />
      </Content>
    </Container>
  );
}

export default App;
