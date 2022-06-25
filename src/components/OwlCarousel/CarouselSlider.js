import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselSlider = (props) => {
    return (
        <>
            <OwlCarousel className={`owl-theme ${props.mobile ? 'd-block d-md-none' : 'd-none d-md-block'}`} margin={0} nav={false} dots={false} items={props.mobile ? 3 : 8 } autoWidth={true} merge={true}>
                {props.children}
            </OwlCarousel>   
        </>
    );
}

export default CarouselSlider;
