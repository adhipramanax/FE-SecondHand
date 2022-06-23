import React from 'react';
import profile from '../../assets/images/Rectangle_33.png';

const SellerCard = () => {
    return (
        <div>
            <div class="card mt-4 card-detail">
                <div class="card-body">
                    <div class="row">
                        
                        <div class="col-2 col-lg-2 col-md-1">
                            <img src={profile} alt="profile" />
                        </div>

                        <div class="col-10 col-lg-9 col-md-10">
                            <h5 class="mb-0">Eko</h5>
                            <p class="card-text text-muted mb-0">Bekasi</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerCard;
