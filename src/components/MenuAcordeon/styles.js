import styled from 'styled-components/macro'

export const MenuAcordeonContainer = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 5px;
  width: 50%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 3px 1px #a6b1ff;

  input {
    display: none;

    &#bloque1:checked ~ #btnBloque1 {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &#bloque1:checked ~ #content1 {
      padding: 3%;
      height: 100px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &#bloque2:checked ~ #btnBloque2 {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &#bloque2:checked ~ #content2 {
      padding: 3%;
      height: 100px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &#bloque3:checked ~ #btnBloque3 {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &#bloque3:checked ~ #content3 {
      padding: 3%;
      height: 100px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  label {
    display: block;
    width: 100%;
    line-height: 30px;
    text-align: center;
    background-color: #f5f5f5;
    box-shadow: inset 0 0 0 2px #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
  }
`
export const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  background-color: white;
  box-shadow: inset 0 0 0 1px #ccc;
  border-radius: 8px;
  transition: 0.5s;

  h2 {
    display: block;
    margin-bottom: 8px;
    padding: 2%;
    line-height: 0;
    height: 0;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 60px;
    width: 60px;
    background-color: salmon;
    border-radius: 50%;
  }

  span {
    display: block;
    margin: 0px;
    padding: 2%;
    width: 85%;
    text-align: justify;
  }
`
