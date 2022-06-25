import React from 'react';
import casioWOne from '../../assets/images/Rectangle_23.png'

const Index = ({optionCol}) => {
    return (
        <>
            <div class={`col-6 col-md-4 ${optionCol}`}>
                <div class="card catalog-card">
                    <img src={casioWOne} class="card-img-top" alt="jam-tangan" />
                    <div class="card-body">
                        <h5 className='catalog-title'>Jam Tangan Casio</h5>
                        <p class="card-text text-muted">Aksesoris</p>
                        <h5>Rp. 250.000</h5>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Index;
