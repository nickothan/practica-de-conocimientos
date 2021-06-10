import styled from 'styled-components/macro';

export const Container = styled.div`
    margin: 20px 0 ;
    padding: 5px;
    border-radius: 8px ;
    box-shadow: 0 0 3px 1px #a6b1ff;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    
    h3 {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }
`;

const btn = styled.button`
margin: 1em;
display: inline-block;
background-color: green;
height: 3em;
line-height: 3em;
padding: 0 1.5em;
color: #fff;
text-decoration: none;
cursor: pointer;
`;

export const BotonNormal = styled(btn)`
    border: none;
    text-transform: uppercase;
    border-radius: 1.5em;

    &:hover {
        background-color: darken(green, 20);
    }

    &:active {
        transform: scale(.95);
    }
`;

export const BotonRealista = styled(btn)`
    box-sizing: border-box;
    border: 1px solid darken(green, 20);
    border-bottom-width: 4px;
    line-height: 2.8em;
    border-radius: .3em;
    box-shadow:  0 0  1px rgba(green, .1) inset;
    
    &:active {
        line-height: 3em;

    }
`;