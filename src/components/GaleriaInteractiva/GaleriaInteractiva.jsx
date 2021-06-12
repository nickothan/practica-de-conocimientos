import {
  GaleriaInteractivaContainer,
  GaleriaInteractivaContent
} from './styles'

import { dataGaleria } from '../../assets/imagenes'

export default function GaleriaInteractiva() {
  console.log('Data : ', dataGaleria)
  return (
    <GaleriaInteractivaContainer>
      <h3>Galeria Interactiva</h3>
      <GaleriaInteractivaContent>
        <ul>
          <li>
            <div>
              <input type='radio' name='entrada' id='btn01' />
              <label htmlFor='btn1'>
                <img src='' alt='' />
              </label>
            </div>
          </li>
          <li>
            <div>
              <input type='radio' name='entrada' id='btn01' />
              <label htmlFor='btn1'>
                <img src='' alt='' />
              </label>
            </div>
          </li>
          <li>
            <div>
              <input type='radio' name='entrada' id='btn01' />
              <label htmlFor='btn1'>
                <img src='' alt='' />
              </label>
            </div>
          </li>
          <li>
            <div>
              <input type='radio' name='entrada' id='btn01' />
              <label htmlFor='btn1'>
                <img src='' alt='' />
              </label>
            </div>
          </li>
        </ul>
      </GaleriaInteractivaContent>
    </GaleriaInteractivaContainer>
  )
}
