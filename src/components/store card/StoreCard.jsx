import React from 'react';
import casioWOne from '../../assets/images/Rectangle_24.png';

const StoreCard = () => {
    return (
        <>
           <div class="col-6 col-lg-3">
                <div class="card catalog-card">
                    <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                    <div class="card-body pt-2">
                        <h5 className='catalog-title'>Jam Tangan Casio</h5>
                        <p class="card-text text-muted">Aksesoris</p>
                        <h5>Rp. 250.000</h5>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="card catalog-card">
                    <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                    <div class="card-body pt-2">
                        <h5 className='catalog-title'>Jam Tangan Casio</h5>
                        <p class="card-text text-muted">Aksesoris</p>
                        <h5>Rp. 250.000</h5>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="card catalog-card">
                    <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                    <div class="card-body pt-2">
                        <h5 className='catalog-title'>Jam Tangan Casio</h5>
                        <p class="card-text text-muted">Aksesoris</p>
                        <h5>Rp. 250.000</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoreCard;
