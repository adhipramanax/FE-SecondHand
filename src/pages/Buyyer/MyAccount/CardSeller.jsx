import React from "react";

// Provider
import { profileContext } from "../../../provider/profileProvider";

const CardSeller = () => {
    const profilevalue = React.useContext(profileContext)

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }


    return (
        <>
            <section class="seller-card">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="fw-bold mt-4">Akun Saya</h5>

                            <div class="card mt-4 card-detail">
                                <div class="card-body">
                                    <div class="row justify-content-between">
                                        <div class="col-9 col-lg-10 d-flex gap-2">
                                            <img src={profilevalue?.profile?.url_photo} alt="profile" width={50}/>
                                            <div>
                                                <h5 class="mb-0">{profilevalue?.profile?.name}</h5>
                                                <p class="card-text text-muted mb-0">{profilevalue?.profile?.city}</p>
                                            </div>
                                        </div>

                                        <div class="col-3 col-lg-2 text-end">
                                            <button type="button" class="btn btn-color-white px-2" onClick={() => handleLogout()}>
                                                Logout
                                            </button>
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
