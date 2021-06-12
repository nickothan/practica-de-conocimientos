import styled from 'styled-components/macro'

export const GaleriaInteractivaContainer = styled.div`
  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`

export const GaleriaInteractivaContent = styled.div`
  margin: 20px 0;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 0 3px 1px #a6b1ff;
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  ul {
    position: relative;
    margin: auto;
    width: 80%;
    height: 400px;
    list-style: none;
  }

  div:first-child {
    opacity: 1;
  }
  div {
    position: absolute;
    opacity: 0;
    top: 10px;
    right: 5px;
    width: auto;
    height: auto;
    color: white;
    transition: all 0.6s ease-out;
  }

  h3 {
    position: absolute;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  p {
    padding: 10px 20px;
    position: absolute;
    text-align: center;
    width: 93%;
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  div > img {
    width: 100%;
    height: 380px;
    border-radius: 8px;
  }
`

export const ImagContent = styled.li`
  input {
    display: none;

    &#${({ idBtn }) => idBtn}:checked ~ #${({ idGaleria }) => idGaleria} {
      opacity: 1;
    }
  }

  label {
    position: relative;
    display: block;
    top: 22px;
    left: 10px;
    margin-bottom: 10px;
    width: 80px;
    height: auto;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }

  label > img {
    width: 100%;
    border-radius: 3px;
  }
`
