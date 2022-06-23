import React from 'react';
import { useLocation } from 'react-router-dom';
import casioWOne from '../../../assets/images/Rectangle_24.png';
import fiSearch from '../../../assets/images/fi_search.png';
import fiUser from '../../../assets/images/fi_user.png';
import fiBox from '../../../assets/images/fi_box.png';
import vector from '../../../assets/images/Vector.png';
import fiDollar from '../../../assets/images/fi_dollar-sign.png';
import fiLeft from '../../../assets/images/fi_chevron-right.png';


// owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardSeller from './CardSeller';
import StoreCard from '../../../components/store card/StoreCard';
import Catalog from './Catalog';
import Profile from './Profile';
import WishList from './WishList';
import Sold from './Sold';


const filter_btn = {
    display: "inline-block",
    width: "25px"
};

const ContentProductSale = () => {

    let { hash } = useLocation()

    return (
        <>
            <section className="store-content">
                <CardSeller />

                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p class="fw-bold mt-4 d-block d-md-none">Kategori</p>
                            {/* Desktop View */}
                            <OwlCarousel className='owl-theme d-block d-md-none' margin={0} nav={false} dots={false} items={8} autoWidth={true} merge={true}>
                                <a href="#profile" class='item btn filter-btn'>
                                    <img src={fiUser} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Profile
                                </a>
                                <a href="#catalog" class='item btn filter-btn active'>
                                    <img src={fiBox} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Semua Produk
                                </a>
                                <a href="#wishlist" class='item btn filter-btn'>
                                    <img src={vector} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Diminati
                                </a>
                                <a href="#sold" class='item btn filter-btn'>
                                    <img src={fiDollar} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Terjual
                                </a>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>


                <div class="container mt-4 mb-5">
                    <div className="row g-4 mt-4">
                        <div class="col-md-3">
                            <div class="card card-detail d-none d-md-block">
                                <div class="card-body">
                                    <p class="fw-bold">Kategori</p>
                                    <div class="">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <a href="#profile" class="">
                                                    <img class="pe-2" src={fiUser} alt="fi-user" />
                                                </a>
                                            </div>

                                            <div class="col-lg-8">
                                                <a href="#profile" class="text-decoration-none text-dark">Profile</a>
                                            </div>

                                            <div class="col-lg-1 pe-0">
                                                <a href="#profile" class="">
                                                    <img class="pe-0" src={fiLeft} alt="fi-left" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-lg-2">
                                                <a href="#catalog" class="">
                                                    <img class="pe-2" src={fiBox} alt="fi-box" />
                                                </a>
                                            </div>

                                            <div class="col-lg-8">
                                                <a href="#catalog" class="text-decoration-none text-dark">Semua Produk</a>
                                            </div>

                                            <div class="col-lg-1 pe-0">
                                                <a href="#catalog" class="">
                                                    <img class="pe-0" src={fiLeft} alt="fi-left" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-lg-2">
                                                <a href="#wishlist" class="">
                                                    <img class="pe-2" src={vector} alt="vector" />
                                                </a>
                                            </div>

                                            <div class="col-lg-8">
                                                <a href="#wishlist" class="text-decoration-none text-dark">Diminati</a>
                                            </div>

                                            <div class="col-lg-1 pe-0">
                                                <a href="#wishlist" class="">
                                                    <img class="pe-0" src={fiLeft} alt="fi-left" />
                                                </a>
                                            </div>
                                        </div>

                                        <div class="row mt-2 mb-5">
                                            <div class="col-lg-2 mb-5">
                                                <a href="#sold" class=" mb-5">
                                                    <img class="pe-2 mb-5" src={fiDollar} alt="fi-dollar" />
                                                </a>
                                            </div>

                                            <div class="col-lg-8 mb-5">
                                                <a href="#sold" class="text-decoration-none text-dark mb-5">Terjual</a>
                                            </div>

                                            <div class="col-lg-1 pe-0 mb-5">
                                                <a href="#sold" class=" mb-5">
                                                    <img class="pe-0 mb-5" src={fiLeft} alt="fi-left" />
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-9">
                            <div class="row g-4">
                                {hash === '#catalog' ? <Catalog /> : <></>}
                                {hash === '#profile' ? <Profile /> : <></>}
                                {hash === '#wishlist' ? <WishList /> : <></>}
                                {hash === '#sold' ? <Sold /> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContentProductSale;
