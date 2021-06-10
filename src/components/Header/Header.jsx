import { Link } from 'react-router-dom'

import { HeaderContainer, Description, Btn } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Description>Practica de conocimientos</Description>
      <nav>
        <Link to='/'>
          <Btn>Home</Btn>
        </Link>
        <Link to='/estilos'>
          <Btn>Estilos</Btn>
        </Link>
        <Link to='/animaciones'>
          <Btn>Animaciones</Btn>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
