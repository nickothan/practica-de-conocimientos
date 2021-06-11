import { BotoneraMovilContainer } from './styles'

import { ReactComponent as Menu } from '../../assets/menu.svg'

export default function BotoneraMovil() {
  return (
    <BotoneraMovilContainer>
      <input type='checkbox' name='' id='botonMovil' />
      <label for='botonMovil' id='labelMovil'>
        <span>
          <Menu />
          <h2>Menú</h2>
        </span>
      </label>
      <nav>
        <ul>
          <a href='#'>
            <li>Boton 1</li>
          </a>
          <a href='#'>
            <li>Boton 2</li>
          </a>
          <a href='#'>
            <li>Boton 3</li>
          </a>
          <a href='#'>
            <li>Boton 4</li>
          </a>
        </ul>
      </nav>
    </BotoneraMovilContainer>
  )
}
