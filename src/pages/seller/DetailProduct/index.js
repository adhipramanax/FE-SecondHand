import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate} from "react-router-dom";

// Service
import { findProduct, moveProductToTrash, updateStatusProduct } from "../../../services/productService";

// Component
import ActionButton from "../../../components/ActionButton";
import OutlineButton from "../../../components/OutlineButton";
import Alert from "../../../components/Alert";
import ProductCardDetail from "../../../components/ProductCardDetail";

// Layout
import MainLayout from "../../../layouts/Main.layout";

const Wrapper = styled.div`
    @media only screen and (max-width: 767px) {
        position: relative;
        top: 80px;
    }
`

const Index = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [product, setProduct] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleToggleAlert = () => {
        setShowAlert(!showAlert);
    };

    const handleNavigate = () => {
        navigate(`/seller/product/update/${params.id}`);
    }

    const handleDrafted = async () => {
        setIsLoading(true);
        const data = {
            status_product: false
        }

        let apiRes = await updateStatusProduct(data, params.id)

        try {
            
        } finally {
            setIsLoading(false);
            setShowAlert(true);

            if (apiRes.data.meta.status === "success") {
                setStatus("success");
                setMessage("Product berhasil disembunyikan");
                setTimeout(() => {
                    window.location.reload();
                }, 700);
            } else {
                setStatus("error");
                setMessage("terjadi kesalahan ulangi lagi nanti");
            }
        }
    }

    const handlePublished = async () => {
        setIsLoading(true);
        const data = {
            status_product: true
        }

        let apiRes = await updateStatusProduct(data, params.id)

        try {
            
        } finally {
            setIsLoading(false);
            setShowAlert(true);

            if (apiRes.data.meta.status === "success") {
                setStatus("success");
                setMessage("Product berhasil diterbitkan");
                setTimeout(() => {
                    window.location.reload();
                }, 700);
            } else {
                setStatus("error");
                setMessage("terjadi kesalahan ulangi lagi nanti");
            }
        }
    }

    const handleToTrash = async () => {
        setIsLoading(true);

        let apiRes = await moveProductToTrash(params.id)

        try {
            
        } finally {
            setIsLoading(false);
            setShowAlert(true);

            if (apiRes.data.meta.status === "success") {
                setStatus("success");
                setMessage("Product berhasil dipindahkan ke sampah");
                setTimeout(() => {
                    window.location.href = "/seller/store#catalog";
                }, 700);
            } else {
                setStatus("error");
                setMessage("terjadi kesalahan ulangi lagi nanti");
            }
        }
    }

    useEffect(() => {
        findProduct(params.id).then((response) => setProduct(response.data.data));
    }, []);

    return (
        <>
            <MainLayout>
                <Wrapper>
                    <section class="card-detail-product">
                        <div class="container">
                            <Alert show={showAlert} close={handleToggleAlert} type={status} message={message} optionClass={'ms-5'} />
                            <ProductCardDetail data={product}>
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        {product.status_product ?(
                                            <>
                                                {isLoading ? (
                                                    <ActionButton 
                                                        color="#FFFFFF" 
                                                        bg="#4B1979" 
                                                        width="100%" 
                                                        icon={'https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e47l4kvh3wbfq7ekl58oelu5421j48s9fyiu5k8cf8n&rid=giphy.gif&ct=s'}
                                                        disabled />
                                                ):(
                                                    <ActionButton 
                                                        color="#FFFFFF" 
                                                        bg="#4B1979" 
                                                        width="100%" 
                                                        text="Sembunyikan" 
                                                        onClick={handleDrafted} />
                                                )}
                                            </>
                                        ):(
                                            <>
                                                {isLoading ? (
                                                    <ActionButton 
                                                        color="#FFFFFF" 
                                                        bg="#4B1979" 
                                                        width="100%" 
                                                        icon={'https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e47l4kvh3wbfq7ekl58oelu5421j48s9fyiu5k8cf8n&rid=giphy.gif&ct=s'}
                                                        disabled />
                                                ):(
                                                    <ActionButton 
                                                        color="#FFFFFF" 
                                                        bg="#4B1979" 
                                                        width="100%" 
                                                        text="Terbitkan" 
                                                        onClick={handlePublished} />
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 col-md-6 mb-3 mb-md-0">
                                                <OutlineButton color="#4B1979" bg="#4B1979" width="100%" text="Edit" onClick={handleNavigate} />
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <OutlineButton color="#4B1979" bg="#4B1979" width="100%" text="Hapus" onClick={handleToTrash} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ProductCardDetail>
                        </div>
                    </section>
                </Wrapper>
            </MainLayout>
        </>
    );
};

export default Index;
