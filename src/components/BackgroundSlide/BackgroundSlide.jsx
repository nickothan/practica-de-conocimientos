import { Container, Content, SlideLeftRight, SlideRightLeft, SlideTopBottom, SlideBottomTop, DobleSlideHorizontal, DobleSlideVertical } from './styles';

export default function BackgroundSlide() {

    return (
        <Container>
            <h3>Background slide</h3>
            <Content>
                <SlideLeftRight>Left to Right</SlideLeftRight>
                <SlideRightLeft>Right to Left</SlideRightLeft>
                <SlideTopBottom>Top to Bottom</SlideTopBottom>
                <SlideBottomTop>Bottom to Top</SlideBottomTop>
                <DobleSlideHorizontal>Doble slide Horizontal</DobleSlideHorizontal>
                <DobleSlideVertical>Doble slide vertical</DobleSlideVertical>
            </Content>
        </Container>
    );
}