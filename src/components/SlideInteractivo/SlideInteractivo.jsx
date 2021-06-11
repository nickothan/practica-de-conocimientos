import { SlideInteractivoContainer } from './styles'

export default function SlideInteractivo() {
  return (
    <SlideInteractivoContainer>
      <h1>Slider Interactivo</h1>
      <ul>
        <li>
          <input type='radio' name='in' id='boton-1' onClick />
          <label for='boton-1'></label>
          <img src='' alt='' />
        </li>
        <li>
          <input type='radio' name='in' id='boton-2' onClick />
          <label for='boton-2'></label>
          <img src='' alt='' />
        </li>
        <li>
          <input type='radio' name='in' id='boton-3' onClick />
          <label for='boton-3'></label>
          <img src='' alt='' />
        </li>
        <li>
          <input type='radio' name='in' id='boton-4' onClick />
          <label for='boton-4'></label>
          <img src='' alt='' />
        </li>
        <li>
          <input type='radio' name='in' id='boton-5' onClick />
          <label for='boton-5'></label>
          <img src='' alt='' />
        </li>
        <li>
          <input type='radio' name='in' id='boton-6' onClick />
          <label for='boton-6'></label>
          <img src='' alt='' />
        </li>
      </ul>
    </SlideInteractivoContainer>
  )
}
