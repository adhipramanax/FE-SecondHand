import React from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../../layouts/Main.layout";

// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardSeller from "./CardSeller";
import Profile from "./Profile";
import WishList from "./WishList";
import HistoryTransaction from "./HistoryTransaction";

// const filter_btn = {
//     display: "inline-block",
//     width: "25px",
// };

const Index = () => {
    let { hash } = useLocation();

    return (
        <>
            <MainLayout>
                <section className="store-content">
                    <CardSeller />
                    {/* navigation */}
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p class="fw-bold mt-4 d-block d-md-none">Kategori</p>
                                {/* Mobile View */}
                                <OwlCarousel className="owl-theme d-block d-md-none" margin={0} nav={false} dots={false} items={8} autoWidth={true} merge={true}>
                                    <a href="#profile" class="item btn filter-btn">
                                        <i class="bi bi-person fs-4 text-black">Profile</i>
                                    </a>
                                    <a href="#wishlist" class="item btn filter-btn active ">
                                        <i class="bi bi-heart fs-4 text-light">Diminati</i>
                                    </a>
                                    <a href="#HistoryTransaction" class="item btn filter-btn">
                                        <i class="bi bi-arrow-counterclockwise fs-4 text-black">Histori Transaksi</i>
                                    </a>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                    {/* End Navigation */}

                    {/* Menu Category */}
                    <div class="container mt-4 mb-5">
                        <div className="row g-4 mt-4">
                            <div class="col-md-3">
                                <div class="card card-detail d-none d-md-block">
                                    <div class="card-body">
                                        <p class="fw-bold">Kategori</p>
                                        <div class="row">
                                            {/* Profile */}
                                            <div class="col-12">
                                                <a href="#profile" class="d-flex text-decoration-none justify-content-between align-items-center">
                                                    <div class="d-flex justify-content-between align-items-center gap-2">
                                                        <i class="bi bi-person fs-4 text-black"></i>
                                                        <p href="#profile" class="text-decoration-none text-dark m-0">
                                                            Profile
                                                        </p>
                                                    </div>
                                                    <i class="bi bi-chevron-right text-dark"></i>
                                                </a>
                                                <hr class="w-100 text-black mt-0" />
                                            </div>
                                            {/* End Profile */}
                                            {/* Wishlist */}
                                            <div class="col-12">
                                                <a href="#wishlist" class="d-flex text-decoration-none justify-content-between align-items-center">
                                                    <div class="d-flex justify-content-between align-items-center gap-2">
                                                        <i class="bi bi-heart fs-4 text-dark"></i>
                                                        <p href="#profile" class="text-decoration-none text-dark m-0">
                                                            Diminati
                                                        </p>
                                                    </div>
                                                    <i class="bi bi-chevron-right text-dark"></i>
                                                </a>
                                                <hr class="w-100 text-black mt-0" />
                                            </div>
                                            {/* End Wishlist */}
                                            {/* History Transactio */}
                                            <div class="col-12">
                                                <a href="#HistoryTransaction" class="d-flex text-decoration-none justify-content-between align-items-center">
                                                    <div class="d-flex justify-content-between align-items-center gap-2">
                                                        <i class="bi bi-arrow-counterclockwise fs-4 text-black"></i>
                                                        <p href="#profile" class="text-decoration-none text-dark m-0">
                                                            Riwayat Transaksi
                                                        </p>
                                                    </div>
                                                    <i class="bi bi-chevron-right text-dark"></i>
                                                </a>
                                                <hr class="w-100 text-black mt-0" />
                                            </div>
                                            {/* End History Transactio */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-9">
                                <div class="row g-4">
                                    {hash === "#profile" ? <Profile /> : <></>}
                                    {hash === "#wishlist" ? <WishList /> : <></>}
                                    {hash === "#HistoryTransaction" ? <HistoryTransaction /> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
};

export default Index;
