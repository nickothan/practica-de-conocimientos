import styled from 'styled-components/macro';

export const Container = styled.div`
    padding: 10px;
    border-radius: 8px ;
    box-shadow: 0 0 3px 1px #a6b1ff;   
 `;

export const TxtDegradado = styled.p`
    position: relative;
    margin: 0;
    font-size: 2em;
    text-align: center;
    font-weight: 700;
    z-index: 1;
    
    
    &::before {
        color: transparent;
        background: linear-gradient( 65deg, yellow, red);
        -webkit-background-clip: text;
        content: "Texto con fondo degradado";
        position: absolute;
        width: 100%;
        top: -3px;
        left: -2px;
        z-index: 0;
    }
 `;