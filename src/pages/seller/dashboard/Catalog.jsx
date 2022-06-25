import React from 'react';
import casioWOne from '../../../assets/images/Rectangle_24.png'

const Catalog = () => {
    return (
        <>
            <div class="col-6 col-md-4">
                <a href="/seller/create-product" class="btn-add-product text-decoration-none mb-4">
                    <div class="btn-add-product-icon">
                        +
                    </div>
                    <div class="btn-add-product-text">
                        Tambah Produk
                    </div>
                </a>
            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className='catalog-title'>Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className='catalog-title'>Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className='catalog-title'>Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className='catalog-title'>Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-6 col-md-4">
                <a href="/seller/detail-product" class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <div class="card-body pt-2">
                                <h5 className='catalog-title'>Jam Tangan Casio</h5>
                                <p class="card-text text-muted">Aksesoris</p>
                                <h5>Rp. 250.000</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Catalog;
