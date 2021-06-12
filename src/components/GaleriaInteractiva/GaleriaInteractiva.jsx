import {
  GaleriaInteractivaContainer,
  GaleriaInteractivaContent,
  ImagContent
} from './styles'

import { dataGaleria } from '../../assets/imagenes'

export default function GaleriaInteractiva() {
  return (
    <GaleriaInteractivaContainer>
      <h3>Galeria Interactiva</h3>
      <GaleriaInteractivaContent>
        <ul>
          <li>
            <div>
              <h3>title 1</h3>
              {console.log('data galeria : ', dataGaleria)}
              <img src={dataGaleria[0].img} alt='' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                sunt ut sapiente perspiciatis consectetur, voluptatum nisi
              </p>
            </div>
          </li>
          {dataGaleria.map(({ img, title, idBtn, idGaleria }) => {
            return (
              <ImagContent
                key={Math.random() * 10}
                idGaleria={idGaleria}
                idBtn={idBtn}>
                <input type='radio' name='entrada' id={idBtn} />
                <label htmlFor={idBtn}>
                  <img src={img} alt={`${title}-mini`} />
                </label>
                <div id={idGaleria}>
                  <h3>title 1</h3>
                  <img src={img} alt={title} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio sunt ut sapiente perspiciatis consectetur, voluptatum
                    nisi
                  </p>
                </div>
              </ImagContent>
            )
          })}
        </ul>
      </GaleriaInteractivaContent>
    </GaleriaInteractivaContainer>
  )
}
