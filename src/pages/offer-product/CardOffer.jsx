import React from 'react';
import backBtn from '../../assets/images/fi_arrow-left.png';
import profile from '../../assets/images/Rectangle_32.png';
import profileImg from '../../assets/images/Rectangle-33.png';
import whatsApp from '../../assets/images/Whatsapp.png'

const CardOffer = () => {
    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-1 mt-4">
                        <button class="btn"><img src={backBtn} alt="back-button" /></button>                            
                    </div>

                    <div class="col-12 col-lg-7 mt-4">
                        <div class="card card-detail">
                            <div class="card-body">
                                <div class="row">
                                        <div class="col-1 pe-0">
                                            <img src={profile} alt="profile" />
                                        </div>

                                        <div class="col-11 ps-5 pe-0">
                                            <h5 class="mb-0">Putri</h5>
                                            <p class="card-text text-muted mb-0">Jakarta</p>
                                        </div>
                                </div> 
                            </div>
                        </div>

                        {/* Penawaran Produk */}
                        <h5 class="mt-4">Daftar Produkmu yang Ditawar</h5>
                        <div class="card card-detail mt-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-2 col-lg-1">
                                        <img src={profileImg} alt="item-profile-img" />
                                    </div>

                                    <div class="col-10 col-lg-11">
                                        <div class="row">
                                            <div class="d-flex justify-content-between">
                                                <p class="text-muted">Penawaran produk</p>
                                                <p class="text-muted">17 Jun, 20:52</p>
                                            </div>
                                        </div>
                                        <h5 class="mb-0">Jam Tangan Casio</h5>
                                        <h5 class="mb-0">Rp. 250.000</h5>
                                        <h5 class="mb-0">Ditawar Rp. 200.000</h5>

                                        <div class="row mt-4">
                                            <div class="d-flex justify-content-end">
                                                <button class="btn btn-color-white w-50">Tolak</button>
                                                {/* <!-- Button trigger modal --> */}
                                                <button type="button" class="btn btn-color-purple w-50" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    Terima
                                                    </button>

                                                    {/* <!-- Modal --> */}
                                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                        <div class="d-flex justify-content-end me-4 mt-4">
                                                            <button type="button" class="btn-close justify-content-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <h5>Yeay kamu berhasil mendapat harga yang sesuai</h5>
                                                            <p class="text-muted">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
                                                            <div class="card offer-modal">
                                                                <div class="card-body">
                                                                    <h5 class="text-center">Product Match</h5>
                                                                    <div class="row">
                                                                            <div class="col-1 pe-0">
                                                                                <img src={profile} alt="profile" />
                                                                            </div>

                                                                            <div class="col-11 ps-5 pe-0">
                                                                                <h5 class="mb-0">Putri</h5>
                                                                                <p class="card-text text-muted mb-0">Jakarta</p>
                                                                            </div>
                                                                    </div>

                                                                    <div class="row mt-4">
                                                                        <div class="col-1 pe-0">
                                                                            <img src={profileImg} alt="profile-img" />
                                                                        </div>

                                                                        <div class="col-11 ps-5 pe-0">
                                                                            <h5 class="mb-0">Jam Tangan Casio</h5>
                                                                            <p class="text-decoration-line-through mb-0">Rp. 250.000</p>
                                                                            <p class="mb-0">Ditawar Rp. 200.000</p>
                                                                        </div>
                                                                    </div>  
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="m-4">
                                                            <button type="button" class="btn btn-color-purple w-100">Hubungi Via WhatsApp <img class="ms-2" src={whatsApp} alt="whats-app-icon" /></button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* End of Penawaran Produk */}
                    </div>    
                </div>    
            </div>
        </>
    );
}

export default CardOffer;
