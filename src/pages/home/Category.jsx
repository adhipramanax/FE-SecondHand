import React from 'react';
import fiSearch from '../../assets/images/fi_search.png';

// owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const filter_btn = {
    display: "inline-block",
    width: "25px"
};

const Category = () => {
    return (
        <>
            <section className="filter">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <p className='fw-bold'>Telusuri Kategori</p>
                        </div>
                        <div className="col-12 mt-0">
                            {/* Desktop View */}
                            <OwlCarousel className='owl-theme d-none d-md-block' margin={0} nav={false} dots={false} items={8} autoWidth={true} merge={true}>
                                    <button class='item btn filter-btn active'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Semua
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Kendaraan
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Baju
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Elektronik
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Kesehatan
                                    </button>
                            </OwlCarousel>
                            
                            {/* Mobile View */}
                            <OwlCarousel className='owl-theme d-block d-md-none' margin={0} nav={false} dots={false} items={3} autoWidth={true} merge={true}>
                                    <button class='item btn filter-btn active'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Semua
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Kendaraan
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Baju
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Elektronik
                                    </button>
                                    <button class='item btn filter-btn'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Kesehatan
                                    </button>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;
