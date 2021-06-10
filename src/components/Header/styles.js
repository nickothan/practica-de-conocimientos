import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  background-color: royalblue;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  nav {
    display: flex;
    align-items: center;
  }
  a {
    color: white;
    text-decoration: none;
    margin-right: 30px;
  }
`

export const Description = styled.h1`
  text-align: center;
  color: white;
`
export const Btn = styled.div`
  letter-spacing: 1px;
`
