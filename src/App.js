import React from 'react'
<<<<<<< HEAD

import { Container } from './styles'
import Router from './Router'
=======
import { Container, Description, Content } from './styles'

import Textos from './components/Textos/Textos'
import BackgroundSlice from './components/BackgroundSlide/BackgroundSlide'
import IconsMenu from './components/IconsMenu/IconsMenu'
import Botones from './components/Botones/Botones'
import Animacion from './components/animaciones'
>>>>>>> Componente animaciones, archivos base y importacion en app

function App() {
  return (
    <Container>
<<<<<<< HEAD
      <Router />
=======
      <Description>Practica de conocimientos</Description>
      <Content>
        <Animacion></Animacion>
        <IconsMenu />
        <Botones />
        <BackgroundSlice />
        <Textos />
      </Content>
>>>>>>> Componente animaciones, archivos base y importacion en app
    </Container>
  )
}

export default App
