import React from "react";
import profile from "../../../assets/images/Rectangle_33.png";

const CardSeller = () => {
    return (
        <>
            <section class="seller-card">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="fw-bold mt-4">Daftar Jual Saya</h5>

                            <div class="card mt-4 card-detail">
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-9 col-lg-10 d-flex gap-2">
                                            <img src={profile} alt="profile" />
                                            <div>
                                                <h5 class="mb-0">Eko</h5>
                                                <p class="card-text text-muted mb-0">Bekasi</p>
                                            </div>
                                        </div>

                                        <div class="col-3 col-lg-2 text-end">
                                            <a href="" class="btn btn-color-white px-2">
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardSeller;
