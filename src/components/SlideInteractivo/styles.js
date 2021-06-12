import styled from 'styled-components/macro'

import slide1 from '../../assets/img/slide1.jpg'

export const SlideInteractivoContainer = styled.div`
  h3 {
    text-align: center;
  }
`

export const SlideInteractivoContent = styled.div`
  position: relative;
  margin: 5px auto;
  margin-bottom: 10px;
  padding: 5px;
  width: 540px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 3px 1px #a6b1ff;

  ul {
    position: relative;
    top: 0;
    left: 0;
    height: 320px;
    list-style: none;
    background-image: url(slide1);
  }
`
export const Licontent = styled.li`
  input {
    display: none;

    &#${(props) => props.boton}:checked ~ #${(props) => props.idImg} {
      opacity: 1;
    }
  }

  img {
    position: absolute;
    left: 0;
    opacity: 0;
    width: 540px;
    height: 320px;
    transition: opacity 1s ease-out;
  }

  label {
    position: relative;
    z-index: 3;
    top: 290px;
    left: 190px;
    float: left;
    margin: 0 5px;
    width: 15px;
    height: 15px;
    background-color: salmon;
    border: 2px solid blue;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #aaa;
    }
  }
`
