import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselHero = (props) => {
    return (
        <>
            <OwlCarousel className={`owl-theme ${props.mobile ? 'd-block d-md-none' : 'd-none d-md-block'}`} loop margin={10} center={true} items={props.mobile ? 1 : 2} nav={false} dots={false}>
                {props.children}
            </OwlCarousel>   
        </>
    );
}

export default CarouselHero;