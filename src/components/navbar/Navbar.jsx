import React, {useState} from "react";
import { Link } from "react-router-dom";

import { searchProduct } from "../../services/productService";
import { productContext } from '../../provider/productProvider';

// Component
import LinkButton from "../../components/LinkButton";
import TextLink from "../../components/TextLink";
import IconButton from "../../components/IconButton";
import Notif from "../Notif";

import logo from "../../assets/images/logo.png";
import fiLogin from "../../assets/images/fi_log-in.png";
import offCanvas from "../../assets/images/Frame_133.png";

import "../../assets/css/navbar.style.css";

const Index = () => {
    const productsValue = React.useContext(productContext);
    const role = localStorage.getItem("role");

    const handleOnClick = (url, setRole) => {
        window.location.href = url;
        localStorage.setItem("role", setRole);
    };

    const handleSearch = (e) => {
        searchProduct(e.target.value).then((response) => productsValue.setProducts(response.data.data));
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light top-navbar top-bar">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img class="logo me-4 d-none d-md-block" src={logo} alt="logo" />
                        <a class="d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <img src={offCanvas} alt="off-canvas-image" />
                        </a>
                    </a>
                    <input type="text" class="input-search" placeholder="cari di sini.." onChange={value => handleSearch(value)}/>

                    {/* Desktop Nav Item */}
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            {role === "buyer" ? (
                                <>
                                    <IconButton to={"/"} icon={"bi bi-house-door"} />

                                    <Notif />

                                    <IconButton to={"/my-account"} icon={"bi bi-person"} />

                                    <LinkButton color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Toko"} onClick={() => handleOnClick("/seller/store#catalog", "seller")} />
                                </>
                            ) : role === "seller" ? (
                                <>
                                    <IconButton to={"/seller/store#catalog"} icon={"bi bi-list-ul"} />

                                    <Notif />

                                    <LinkButton color={"#ffffff"} bg={"#4B1979"} text={"Beranda"} onClick={() => handleOnClick("/", "buyer")} />
                                </>
                            ) : (
                                <>
                                    <LinkButton to={"/login"} color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Masuk"} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Item */}
            <div class="offcanvas offcanvas-start w-50" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        Second Hand
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {role === "buyer" ? (
                        <>
                            <TextLink to={"/"} text={"Beranda"} />

                            <Notif />

                            <TextLink to={"/my-account"} text={"Akun Saya"} />

                            <LinkButton color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Toko"} onClick={() => handleOnClick("/seller/store#catalog", "seller")} />
                        </>
                    ) : role === "seller" ? (
                        <>
                            <TextLink to={"/seller/store#catalog"} text={"Dashboard"} />

                            <Notif />

                            <LinkButton color={"#ffffff"} bg={"#4B1979"} text={"Beranda"} onClick={() => handleOnClick("/", "buyer")} />
                        </>
                    ) : (
                        <>
                            <LinkButton to={"/login"} color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Masuk"} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Index;
