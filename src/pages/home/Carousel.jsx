import React from 'react';
import banner from '../../assets/images/img_banner.png';
import lBanner from '../../assets/images/Rectangle_129.png';
import rBanner from '../../assets/images/Rectangle_130.png';

// owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// css
import '../../assets/css/carousel.style.css'

const Carousel = () => {
    return (
        <>
            <section className="carousel mt-5">
                <div class="container-fluid">
                    {/* Desktop View */}
                    <OwlCarousel className='owl-theme d-none d-md-block' loop margin={10} center={true} items={2} nav={false} dots={false}>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                    </OwlCarousel>

                    {/* Mobile View */}
                    <OwlCarousel className='owl-theme d-block d-md-none' loop margin={10} center={true} items={1} nav={false} dots={false}>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}

export default Carousel;
