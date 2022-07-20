import React from "react";
import styled from "styled-components";
import banner from "../../../assets/images/img_banner.png";
import mobileBanner from "../../../assets/images/mobile-banner.png";

// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Wrapper = styled.div`
  @media only screen and (max-width: 767px) {
    position: absolute;
    width: 100%;

    .container-fluid {
      padding: 0 !important;
    }
  }
`;

const Carousel = () => {
  return (
    <Wrapper>
      <section className="carousel">
        <div class="container-fluid">
          {/* Desktop View */}
          <OwlCarousel
            className="owl-theme d-none d-md-block mt-5"
            loop
            margin={10}
            center={true}
            items={2}
            nav={false}
            dots={false}
          >
            <div class="item">
              <img src={banner} class="d-block w-100" alt="banner-2" />
            </div>
            <div class="item">
              <img src={banner} class="d-block w-100" alt="banner-2" />
            </div>
            <div class="item">
              <img src={banner} class="d-block w-100" alt="banner-2" />
            </div>
          </OwlCarousel>

          {/* Mobile View */}
          {/* <OwlCarousel className='owl-theme d-block d-md-none' loop margin={10} center={true} items={1} nav={false} dots={false}>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                            <div class='item'>
                                <img src={banner} class="d-block w-100" alt="banner-2" />
                            </div>
                    </OwlCarousel> */}

          <div class="banner-hero d-block d-md-none">
            <img src={mobileBanner} class="w-100" alt="banner-hero" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Carousel;
