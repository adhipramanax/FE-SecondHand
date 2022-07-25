import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Provider
import { detailOfferContext, messageContext, alertContext, modalContext } from "./"

// Service
import { getDetailProductOffer } from "../../../services/productService";
import { updateStatusOffer } from "../../../services/offerService";

// Component
import Alert from "../../../components/Alert";
import ListOfferCard from '../../../components/ListOfferCard';
import ModalCall from "./ModalCall";
import ModalStatus from "./ModalStatus";

// Image
import backBtn from "../../../assets/images/fi_arrow-left.png";

const CardOffer = () => {
    const detailOfferValue = React.useContext(detailOfferContext);
    const messageContextValue = React.useContext(messageContext)
    const alertContextValue = React.useContext(alertContext)
    const modalContextValue = React.useContext(modalContext)
    const params = useParams();
    const navigate = useNavigate();

    const [index, setIndex] = useState(null);
    const [target, setTarget] = useState('');

    const handleBack = () => {
        navigate(-1);
    }
    
    const handleToggleAlert = () => {
        alertContextValue.setShowAlert(!alertContextValue.showAlert);
    };

    const fetchDetailOffer = () => {
        getDetailProductOffer(params.id, params.user).then(response => {
            detailOfferValue.setOfferProduct(response.data.data)
        })
    }

    const handleOffer = async (e) => {
        const index = e.target.getAttribute('data-index')

        if(e.target.innerText === 'Terima'){
            let apiRes;
            const data = {
                offer_status: true,
            }

            try {
                apiRes = await updateStatusOffer(data, detailOfferValue?.offerProduct[index].id)
            } finally {
                alertContextValue.setShowAlert(true);

                if (apiRes.data.meta.status === "success") {
                    messageContextValue.setStatusError("success");
                    messageContextValue.setMessage(`Penawaran dari ${detailOfferValue?.offerProduct[0]?.User.name} diterima`);
                    fetchDetailOffer()
                }else{
                    messageContextValue.setStatusError("error");
                    messageContextValue.setMessage("terjadi kesalahan ulangi lagi nanti");
                }
            }

        }else{
            let apiRes;
            const data = {
                offer_status: false,
            }

            try {
                apiRes = await updateStatusOffer(data, detailOfferValue?.offerProduct[index].id)
            } finally {
                alertContextValue.setShowAlert(true);

                if (apiRes.data.meta.status === "success") {
                    messageContextValue.setStatusError("success");
                    messageContextValue.setMessage(`Penawaran dari ${detailOfferValue?.offerProduct[0]?.User.name} ditolak`);
                    fetchDetailOffer()
                }else{
                    messageContextValue.setStatusError("error");
                    messageContextValue.setMessage("terjadi kesalahan ulangi lagi nanti");
                }   
            }
        }
    }

    const handleGetIndex = (e) => {
        setTarget(e.target.getAttribute('data-target'))
        setIndex(e.target.getAttribute('data-index'))
        modalContextValue.setShowModal(!alertContextValue.showModal);
    }

    useEffect(() => {
        fetchDetailOffer()
    }, []);

    return (
        <>
            <div class="container">
                <Alert show={alertContextValue.showAlert} close={handleToggleAlert} type={messageContextValue.statusError} message={messageContextValue.message} optionClass={'ms-5'} />
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-1 mt-4">
                        <button class="btn" onClick={() => handleBack()}>
                            <img src={backBtn} alt="back-button" />
                        </button>
                    </div>

                    <div class="col-12 col-lg-7 mt-4">
                        <div class="card card-detail">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1 pe-0">
                                        <img src={detailOfferValue?.offerProduct[0]?.User.url_photo} alt="profile" width={70} />
                                    </div>

                                    <div class="col-11 ps-5 pe-0">
                                        <h5 class="mb-0">{detailOfferValue?.offerProduct[0]?.User.name}</h5>
                                        <p class="card-text text-muted mb-0">{detailOfferValue?.offerProduct[0]?.User.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 class="mt-4">Daftar Produkmu yang Ditawar</h5>
                        <ListOfferCard data={detailOfferValue?.offerProduct} onClick={(e) => detailOfferValue?.offerProduct[e.target.getAttribute('data-index')].offer_status ? handleGetIndex(e) : handleOffer(e) } />
                        {target === 'modalCall' ?(
                            <ModalCall data={detailOfferValue?.offerProduct[index]} param={params.id} />
                        ):(
                            <ModalStatus data={detailOfferValue?.offerProduct[index]} param={params.id} />
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default CardOffer;
