import { MenuAcordeonContainer, Content } from './styles'

export default function MenuAcordeon() {
  return (
    <MenuAcordeonContainer>
      <section>
        <input type='checkbox' id='bloque1' />
        <label id='btnBloque1' for='bloque1'>
          Bloque1
        </label>
        <Content id='content1'>
          <h2>titulo 1</h2>
          <div>
            <img src='' alt='' />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nam
              excepturi veritatis, eos necessitatibus et asperiores.
            </span>
          </div>
        </Content>
        <input type='checkbox' id='bloque2' />
        <label id='btnBloque2' for='bloque2'>
          Bloque2
        </label>
        <Content id='content2'>
          <h2>titulo 2</h2>
          <div>
            <img src='' alt='' />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nam
              excepturi veritatis, eos necessitatibus et asperiores.
            </span>
          </div>
        </Content>
        <input type='checkbox' id='bloque3' />
        <label id='btnBloque3' for='bloque3'>
          Bloque3
        </label>
        <Content id='content3'>
          <h2>titulo 2</h2>
          <div>
            <img src='' alt='' />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nam
              excepturi veritatis, eos necessitatibus et asperiores.
            </span>
          </div>
        </Content>
      </section>
    </MenuAcordeonContainer>
  )
}
