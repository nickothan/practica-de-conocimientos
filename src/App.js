import React from 'react';
import { Container, Description, Content } from './styles';

import Textos from './components/Textos/Textos';
import BackgroundSlice from './components/BackgroundSlide/BackgroundSlide'

function App() {
  
  return ( 
    <Container>
      <Description>
      Practica de conocimientos
      </Description>
      <Content>
      <Textos />
      <BackgroundSlice/>
      </Content>
    </Container>
  );
}

export default App;
