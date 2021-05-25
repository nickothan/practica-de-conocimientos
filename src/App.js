import React from 'react';
import Textos from './components/Textos/Textos';
import { Container, Description, Content } from './styles';

function App() {
  
  return ( 
    <Container>
      <Description>
      Practica de conocimientos
      </Description>
      <Content>
      <Textos />
      </Content>
    </Container>
  );
}

export default App;
