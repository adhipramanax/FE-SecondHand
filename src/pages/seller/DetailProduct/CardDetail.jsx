import React from 'react';
import casio from '../../../assets/images/Rectangle_134.png'
import SellerCard from '../../../components/seller card/SellerCard';


const CardDetail = () => {
    return (
        <>
            <section class="card-detail-product">
                <div class='container'>
                    <div class='row'>
                        <div class='col-12 col-lg-8 mt-4'>
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src={casio} class="d-block w-100" alt="item-img" />
                                    </div>
                                    <div class="carousel-item">
                                    <img src={casio} class="d-block w-100" alt="item-img" />
                                    </div>
                                    <div class="carousel-item">
                                    <img src={casio} class="d-block w-100" alt="item-img" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div class='col-12 col-lg-4 mt-4'>
                            <div class="card card-detail">
                                <div class="card-body">
                                    <h5 class="card-title">Jam Tangan Casio</h5>
                                    <p class="card-text text-muted">Aksesoris</p>
                                    <h5 class="card-title">Rp. 250.000</h5>
                                    <a href="#" class="btn btn-color-purple w-100 mt-3">Terbitkan</a>
                                    <a href="#" class="btn btn-color-white w-100 mt-3">Edit</a>
                                
                                </div>
                            </div>
                            <SellerCard />
                        </div>
                    </div>
                </div>

                <div class='container mt-4 mb-4'>
                    <div class='row'>
                        <div class='col-12 col-lg-8'>
                            <div class="card card-detail">
                                <div class="card-body">
                                    <p class="card-text fw-bold">Deskripsi</p>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CardDetail;
