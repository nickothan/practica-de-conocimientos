import styled from 'styled-components/macro';

export const Container = styled.div`
    margin: 20px 0 ;
    padding: 5px;
    border-radius: 8px ;
    box-shadow: 0 0 3px 1px #a6b1ff;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`;

export const slide = styled.div`
    padding: 7px;
    width: 120px;
    margin: 1em;
    background-color: salmon;
    text-align: center;
    transition: all 1s;
    border-radius: 8px;

    &:hover {
        color: #fff;
    }
`;

export const SlideLeftRight = styled(slide)`
    box-shadow: inset 5px 0 1px royalblue;

    &:hover {
        box-shadow: inset 150px 0 1px royalblue;
    }
`;
export const SlideRightLeft = styled(slide)`
    box-shadow: inset -5px 0 1px royalblue;

    &:hover {
        box-shadow: inset -150px 0 1px royalblue;
    }
`;
export const SlideTopBottom = styled(slide)`
    box-shadow: inset 0 5px 1px royalblue;

    &:hover {
        box-shadow: inset 0 60px 1px royalblue;
    }
`;
export const SlideBottomTop = styled(slide)`
    box-shadow: inset 0 -5px  1px royalblue;

    &:hover {
        box-shadow: inset 0 -60px  1px royalblue;
    }
`;
export const DobleSlideHorizontal = styled(slide)`
    
    &:hover {
        box-shadow: inset 150px 0 1px royalblue,
                    inset -150px 0 1px royalblue;
    }
`;
export const DobleSlideVertical = styled(slide)`

    &:hover {
        box-shadow: inset 0 50px  1px royalblue,
        inset 0 -50px  1px royalblue;
    }
`;