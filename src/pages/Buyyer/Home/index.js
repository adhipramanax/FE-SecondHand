import React from "react";
import MainLayout from "../../../layouts/Main.layout";
import Carousel from "./Carousel";
import Category from "./Category";
import Catalog from "./Catalog";
import "../../../assets/css/home.style.css";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className="page-home">
                    <Carousel />
                    <Category />
                    <Catalog />
                    <div class="container">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center align-content-end">
                                <button class="btn btn-color-purple button-jual">+ Jual</button>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;
