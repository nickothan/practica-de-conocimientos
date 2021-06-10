import styled from 'styled-components/macro';

export const Container = styled.div`
margin: 20px 0 ;
padding: 5px;
border-radius: 8px ;
box-shadow: 0 0 3px 1px #a6b1ff;
text-align: center;
`;

export const Content = styled.div`
display: flex;
flex-flow: wrap;
justify-content: center;
`;

export const menu = styled.div`
    box-sizing: border-box;    
    width: 25%;
    margin: 1em auto;
    font-size: 1em;
    color: royalblue;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 755px) {
        width: 30%;
    }

    @media screen and (max-width: 600px) {
        width: 45%;
    }

    @media screen and (max-width: 424px) {
        width: 70%;
    }

    &::before {
        content: "";
        display: block;
        height: .2em;
        background: royalblue;
        position: absolute;
        left: 0;
        box-shadow: 0 .4em ,
                    0 .8em ;
    }


`;

export const MenuPrincipal = styled(menu)`
    padding-left: 1.8em;
    
    @media screen and (max-width: 424px) {
        padding-left: 1.4em;
        
    }

    &::before {
        width: 1.4em;
    }

`;

export const MenuSecundario = styled(menu)`
    padding-left: .6em;
    
    @media screen and (max-width: 424px) {
        padding-left: .4em;
        
    }

    &::before {
        width:.2em;
        border-radius: 50%;
    }
`;