import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Provider
import { ProfileProvider } from "../../../provider/profileProvider";

// Layout
import MainLayout from "../../../layouts/Main.layout";

// Component
import CardSeller from "./CardSeller";
import Catalog from "./Catalog";
import Profile from "./Profile";
import WishList from "./WishList";
import Sold from "./Sold";
import Trash from "./Trash";
import Alert from "../../../components/Alert";

// owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Wrapper = styled.div`
  @media only screen and (max-width: 767px) {
    position: relative;
    top: 80px;
  }
`

export const messageContext = React.createContext();
export const alertContext = React.createContext();

const Index = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState([]);
  let { hash } = useLocation();

  const handleToggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <ProfileProvider>
      <messageContext.Provider value={{ status, setStatus, message, setMessage }}>
        <alertContext.Provider value={{ showAlert, setShowAlert }}>
          <MainLayout>
            <Wrapper>
              <section className="store-content">
                <Alert show={showAlert} close={handleToggleAlert} type={status} message={message} optionClass={"ms-5"} />
                <CardSeller />
                <div class="container">
                  <div class="row">
                    <div class="col-12">
                      <p class="fw-bold mt-4 d-block d-md-none">Kategori</p>
                      {/* Desktop View */}
                      <OwlCarousel
                        className="owl-theme d-block d-md-none"
                        margin={0}
                        nav={false}
                        dots={false}
                        items={8}
                        autoWidth={true}
                        merge={true}
                      >
                        <a href="#profile" class="item btn filter-btn">
                          <i class="bi bi-person me-2 text-black"></i>
                          Profile
                        </a>
                        <a href="#catalog" class="item btn filter-btn">
                          <i class="bi bi-box me-2 text-dark"></i>
                          Semua Produk
                        </a>
                        <a href="#wishlist" class="item btn filter-btn">
                          <i class="bi bi-heart me-2 text-dark"></i>
                          Diminati
                        </a>
                        <a href="#sold" class="item btn filter-btn">
                          <i class="bi bi-currency-dollar me-2 text-dark"></i>
                          Terjual
                        </a>
                        <a href="#trash" class="item btn filter-btn">
                        <i class="bi bi-trash me-2 text-dark"></i>
                          Sampah
                        </a>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>

                <div class="container mt-4 mb-5">
                  <div className="row g-4 mt-4">
                    <div class="col-md-3">
                      <div class="card card-detail d-none d-md-block">
                        <div class="card-body">
                          <p class="fw-bold">Kategori</p>
                          <div class="">
                            <div class="row">
                              {/* profile */}
                              <div class="col-12">
                                <a
                                  href="#profile"
                                  class="d-flex text-decoration-none justify-content-between align-items-center"
                                >
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
                            </div>
                            {/* End of profile */}

                            {/* catalog */}
                            <div class="col-12">
                              <a
                                href="#catalog"
                                class="d-flex text-decoration-none justify-content-between align-items-center"
                              >
                                <div class="d-flex justify-content-between align-items-center gap-2">
                                  <i class="bi bi-box fs-4 text-dark"></i>
                                  <p href="#profile" class="text-decoration-none text-dark m-0">
                                    Semua Produk
                                  </p>
                                </div>
                                <i class="bi bi-chevron-right text-dark"></i>
                              </a>
                              <hr class="w-100 text-black mt-0" />
                            </div>
                            {/* End of catalog */}

                            {/* Wishlist */}
                            <div class="col-12">
                              <a
                                href="#wishlist"
                                class="d-flex text-decoration-none justify-content-between align-items-center"
                              >
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

                            {/* Sold */}
                            <div class="col-12">
                              <a
                                href="#sold"
                                class="d-flex text-decoration-none justify-content-between align-items-center"
                              >
                                <div class="d-flex justify-content-between align-items-center gap-2">
                                  <i class="bi bi-currency-dollar fs-4 text-dark"></i>
                                  <p href="#profile" class="text-decoration-none text-dark m-0">
                                    Terjual
                                  </p>
                                </div>
                                <i class="bi bi-chevron-right text-dark"></i>
                              </a>
                              <hr class="w-100 text-black mt-0" />
                            </div>
                            {/* End Sold */}

                            {/* Trash */}
                            <div class="col-12 mb-5">
                              <a
                                href="#trash"
                                class="d-flex text-decoration-none justify-content-between align-items-center"
                              >
                                <div class="d-flex justify-content-between align-items-center gap-2">
                                  <i class="bi bi-trash fs-4 text-dark"></i>
                                  <p href="#profile" class="text-decoration-none text-dark m-0">
                                    Sampah
                                  </p>
                                </div>
                                <i class="bi bi-chevron-right text-dark"></i>
                              </a>
                              <hr class="w-100 text-black mt-0" />
                            </div>
                            {/* End Trash */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-9">
                      <div class="row g-4">
                        {hash === "#catalog" ? <Catalog /> : <></>}
                        {hash === "#profile" ? <Profile /> : <></>}
                        {hash === "#wishlist" ? <WishList /> : <></>}
                        {hash === "#sold" ? <Sold /> : <></>}
                        {hash === "#trash" ? <Trash /> : <></>}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Wrapper>
          </MainLayout>
        </alertContext.Provider>
      </messageContext.Provider>
    </ProfileProvider>
  );
};

export default Index;
