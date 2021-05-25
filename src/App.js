import React from 'react';
import { Container, Description, Content } from './styles';

import Textos from './components/Textos/Textos';
import BackgroundSlice from './components/BackgroundSlide/BackgroundSlide'
import IconsMenu from './components/IconsMenu/IconsMenu'
import Botones from './components/Botones/Botones'

function App() {
  
  return ( 
    <Container>
      <Description>
      Practica de conocimientos
      </Description>
      <Content>
      <IconsMenu />
      <Botones />
      <BackgroundSlice/>
      <Textos />
      </Content>
    </Container>
  );
}

export default App;
