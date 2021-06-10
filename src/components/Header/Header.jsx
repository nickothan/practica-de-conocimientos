import { Link } from 'react-router-dom'

import { HeaderContainer, Description } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Description>Practica de conocimientos</Description>
      <nav>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/estilos'>
          <button>Estilos</button>
        </Link>
        <Link to='/animaciones'>
          <button>Animaciones</button>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
