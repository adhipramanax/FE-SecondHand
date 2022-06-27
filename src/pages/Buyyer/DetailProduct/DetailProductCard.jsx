import React from 'react';
import casio from '../../../assets/images/Rectangle_134.png'
import SellerCard from '../../../components/seller card/SellerCard';

import profile from '../../../assets/images/Rectangle_32.png';
import profileImg from '../../../assets/images/Rectangle-33.png';
import whatsApp from '../../../assets/images/Whatsapp.png'


const DetailProductCard = () => {
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
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-color-purple w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Saya tertarik dan ingin nego
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                        <div class="d-flex justify-content-end me-4 mt-4">
                                            <button type="button" class="btn-close justify-content-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h5>Masukkan Harga Tawarmu</h5>
                                            <p class="text-muted">Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
                                            <div class="card offer-modal">
                                                <div class="card-body">
                                                    {/* <h5 class="text-center">Product Match</h5> */}
                                                    <div class="row">
                                                            <div class="col-1 pe-0">
                                                                <img src={profileImg} alt="profile" />
                                                            </div>

                                                            <div class="col-11 ps-5 pe-0">
                                                                <h5 class="mb-0">Jam Tangan Casio</h5>
                                                                <p class="card-text text-muted mb-0">Rp. 250.000</p>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="my-2">Harga Tawar</p>
                                            <input type="text" class="input-style mt-0" placeholder='Rp. 0,00' />
                                        </div>
                                        <div class="m-4">
                                            <button type="button" class="btn btn-color-purple w-100">Kirim</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                
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

export default DetailProductCard;
