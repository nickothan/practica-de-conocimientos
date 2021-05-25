import { Container, SlideLeftRight, SlideRightLeft, SlideTopBottom, SlideBottomTop, DobleSlideHorizontal, DobleSlideVertical } from './styles';

export default function BackgroundSlide() {

    return (
        <Container>
            <h1>Background slide</h1>
            <SlideLeftRight>Left to Right</SlideLeftRight>
            <SlideRightLeft>Right to Left</SlideRightLeft>
            <SlideTopBottom>Top to Bottom</SlideTopBottom>
            <SlideBottomTop>Bottom to Top</SlideBottomTop>
            <DobleSlideHorizontal>Doble slide Horizontal</DobleSlideHorizontal>
            <DobleSlideVertical>Doble slide vertical</DobleSlideVertical>
        </Container>
    );
}