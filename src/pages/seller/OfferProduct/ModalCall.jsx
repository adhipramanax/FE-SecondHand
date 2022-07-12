import React from 'react';

import Modal from '../../../components/Modal';
import ActionButton from '../../../components/ActionButton';

import profile from "../../../assets/images/Rectangle_32.png";
import profileImg from "../../../assets/images/Rectangle-33.png";
import whatsApp from "../../../assets/images/Whatsapp.png";

const ModalCall = ({data}) => {
    return (
        <>
            <Modal target={`modalCall`}>
                <h5>Yeay kamu berhasil mendapat harga yang sesuai</h5>
                <p class="text-muted">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya.</p>
                <div class="card offer-modal mb-4">
                    <div class="card-body">
                        <h5 class="text-center">Product Match</h5>
                        <div class="row">
                            <div class="col-1 pe-0">
                                <img src={profile} alt="profile" />
                            </div>

                            <div class="col-11 ps-5 pe-0">
                                <h5 class="mb-0">{data?.User?.name}</h5>
                                <p class="card-text text-muted mb-0">{data?.User?.city}</p>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-1 pe-0">
                                <img src={profileImg} alt="profile-img" />
                            </div>

                            <div class="col-11 ps-5 pe-0">
                                <h5 class="mb-0">{data?.Product?.name}</h5>
                                <p class="mb-0">Rp. {data?.Product?.price}</p>
                                <p class="mb-0">Ditawar Rp. {data?.offer_price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <ActionButton color="#FFFFFF" bg="#4B1979" width="100%" text="Hubungi Via WhatsApp" icon={whatsApp} />
                </div>
            </Modal>   
        </>
    );
}

export default ModalCall;
