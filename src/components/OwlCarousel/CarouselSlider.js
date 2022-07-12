import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselSlider = ({mobile = false, children}) => {
    return (
        <>
            <OwlCarousel className={`owl-theme ${mobile ? 'd-block d-md-none' : 'd-none d-md-block'}`} margin={0} nav={false} dots={false} items={mobile ? 3 : 8 } autoWidth={true} merge={true}>
                {children}
            </OwlCarousel>   
        </>
    );
}

export default CarouselSlider;
