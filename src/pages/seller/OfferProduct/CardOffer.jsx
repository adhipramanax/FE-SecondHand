import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getDetailProductOffer } from "../../../services/productService";
import { updateStatusOffer } from "../../../services/offerService";

import ListOfferCard from '../../../components/ListOfferCard';

import backBtn from "../../../assets/images/fi_arrow-left.png";
import profile from "../../../assets/images/Rectangle_32.png";
import ModalCall from "./ModalCall";
import ModalStatus from "./ModalStatus";

const CardOffer = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [offerProduct, setOfferProduct] = useState([]);
    const [index, setIndex] = useState(null);

    const handleBack = () => {
        navigate(-1);
    }

    const handleOffer = (e) => {
        const index = e.target.getAttribute('data-index')

        if(e.target.innerText === 'Terima'){
            const data = {
                offer_status: true,
            }

            updateStatusOffer(data, offerProduct[index].id).then( (res) => {
                getDetailProductOffer(params.id).then(response => setOfferProduct(response.data.data))
            })
        }else{
            const data = {
                offer_status: false,
            }

            updateStatusOffer(data, offerProduct[index].id).then( (res) => {
                getDetailProductOffer(params.id).then(response => setOfferProduct(response.data.data))
            })
        }
    }

    const handleGetIndex = (e) => {
        setIndex(e.target.getAttribute('data-index'))
    }

    useEffect(() => {
        getDetailProductOffer(params.id).then(response => setOfferProduct(response.data.data)); 
    }, []);

    return (
        <>
            <div class="container">
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
                                        <img src={profile} alt="profile" />
                                    </div>

                                    <div class="col-11 ps-5 pe-0">
                                        <h5 class="mb-0">{offerProduct[0]?.User.name}</h5>
                                        <p class="card-text text-muted mb-0">{offerProduct[0]?.User.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 class="mt-4">Daftar Produkmu yang Ditawar</h5>
                        <ListOfferCard data={offerProduct} onClick={(e) => offerProduct[e.target.getAttribute('data-index')].offer_status ? handleGetIndex(e) : handleOffer(e) } />
                        <ModalCall data={offerProduct[index]} param={params.id} />
                        <ModalStatus data={offerProduct[index]} param={params.id} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default CardOffer;
