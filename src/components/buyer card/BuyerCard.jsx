import React from 'react';
import profile from '../../assets/images/Rectangle_32.png';

const BuyerCard = () => {
    return (
        <>
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
        </>
    );
}

export default BuyerCard;
