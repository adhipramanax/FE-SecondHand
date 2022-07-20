import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/Main.layout";
import Carousel from "./Carousel";
import Category from "./Category";
import Catalog from "./Catalog";
import ModalAlert from "../../../components/ModalAlert"
import "../../../assets/css/home.style.css";

import { ProductProvider } from '../../../provider/productProvider';

const Index = () => {
    const isLogin = localStorage.getItem("isLogin");
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    const handleNavigate = () => {
        navigate("/seller/create-product");
    };

    return (
        <ProductProvider>
            <MainLayout>
                <div className="page-home">
                    <Carousel />
                    <Category />
                    <Catalog />
                    <div class="container">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center align-content-end">
                                <button class="btn btn-color-purple button-jual" onClick={isLogin ? handleNavigate : handleToggleModal}>+ Jual</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalAlert 
                    show={showModal} 
                    close={handleToggleModal} 
                    message={"Untuk melakukan aksi ini silakan masuk terlebih dahulu"} 
                />
            </MainLayout>
        </ProductProvider>
    );
};

export default Index;
