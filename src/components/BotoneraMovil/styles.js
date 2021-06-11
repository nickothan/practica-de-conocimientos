import styled from 'styled-components/macro'

export const BotoneraMovilContainer = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 5px;
  width: 50%;
  height: 230px;
  border-radius: 8px;
  box-shadow: 0 0 3px 1px #a6b1ff;
  overflow-y: hidden;

  @media screen and (max-width: 999px) {
    width: 70%;
  }

  nav {
    position: absolute;
    top: 60px;
    left: -100%;
    width: 50%;
    height: auto;
    transition: left 0.5s;

    @media screen and (max-width: 999px) {
      width: 40%;
    }

    @media screen and (max-width: 768px) {
      width: 80%;
    }
  }

  a {
    text-decoration: none;
  }

  li {
    margin: 2px 0;
    width: 100%;
    line-height: 40px;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: 8px;

    &:hover {
      background-color: #f0f0f0;
      box-shadow: inset 0 -2px 1px red;
    }
  }

  span {
    display: inline-flex;
    align-items: center;

    padding: 5px;
    cursor: pointer;
    box-shadow: 0 0 5px 1px blue;
    border-radius: 8px;

    &:hover {
      fill: royalblue;
      color: royalblue;
      box-shadow: 0 0 3px 1px blue;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  input#botonMovil {
    display: none;

    &:checked + label > span {
      box-shadow: 0 0 1px 1px blue;
    }
    &:checked ~ nav {
      left: 0;
    }
  }
`
