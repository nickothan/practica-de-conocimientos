import {
  SlideInteractivoContainer,
  SlideInteractivoContent,
  Licontent
} from './styles'

import slide1 from '../../assets/img/slide1.jpg'
import slide2 from '../../assets/img/slide2.jpg'
import slide3 from '../../assets/img/slide3.jpg'
import slide4 from '../../assets/img/slide4.jpg'
import slide5 from '../../assets/img/slide5.jpg'
import slide6 from '../../assets/img/slide6.jpg'

const data = [
  {
    title: 'slide 1',
    img: slide1,
    boton: 'boton-1',
    idImg: 'foto1'
  },
  {
    title: 'slide 2',
    img: slide2,
    boton: 'boton-2',
    idImg: 'foto2'
  },
  {
    title: 'slide 3',
    img: slide3,
    boton: 'boton-3',
    idImg: 'foto3'
  },
  {
    title: 'slide 4',
    img: slide4,
    boton: 'boton-4',
    idImg: 'foto4'
  },
  {
    title: 'slide 5',
    img: slide5,
    slide: 'slid-5',
    boton: 'boton-5',
    idImg: 'foto5'
  },
  {
    title: 'slide 6',
    img: slide6,
    boton: 'boton-6',
    idImg: 'foto6'
  }
]

export default function SlideInteractivo() {
  return (
    <SlideInteractivoContainer>
      <h3>Slider Interactivo</h3>
      <SlideInteractivoContent>
        <ul>
          {data.map(({ boton, img, title, idImg }) => {
            return (
              <Licontent key={Math.random() * 10} boton={boton} idImg={idImg}>
                <input type='radio' name='in' id={boton} name='in' />
                <label htmlFor={boton}></label>
                <img src={img} alt={title} id={idImg} />
              </Licontent>
            )
          })}
        </ul>
      </SlideInteractivoContent>
    </SlideInteractivoContainer>
  )
}
