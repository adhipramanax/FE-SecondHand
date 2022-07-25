import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import io from 'socket.io-client';

// Provider
import { productContext } from '../../provider/productProvider';
import { notifContext } from "../../provider/notificationProvider";

// Service
import { searchProduct } from "../../services/productService";

// Component
import ActionButton from "../../components/ActionButton";
import TextLink from "../../components/TextLink";
import IconButton from "../../components/IconButton";
import Notif from "../Notif";

// Image
import logo from "../../assets/images/logo.png";
import fiLogin from "../../assets/images/fi_log-in.png";
import offCanvas from "../../assets/images/Frame_133.png";

// CSS
import "../../assets/css/navbar.style.css";

// const socket = io("http://localhost:8080");

const Index = () => {
    const navigate = useNavigate();
    const notifValue = React.useContext(notifContext);
    const productsValue = React.useContext(productContext);
    const role = localStorage.getItem("role");
    const payload = JSON.parse(localStorage.getItem("payload"));

    // const [isConnected, setIsConnected] = useState(socket.connected);

    const handleOnClick = (url, setRole) => {
        navigate(url)
        localStorage.setItem("role", setRole);
    };

    const handleSearch = (e) => {
        searchProduct(e.target.value).then((response) => productsValue.setProducts(response.data.data));
    }

    // useEffect(() => {
    //     socket.on('connect', () => {
    //         setIsConnected(true);
    //     });

    //     socket.on(payload?.id.toString(), (msg) => {
            
    //     })

    // }, [message])

    return (
        <>
            <nav class="navbar navbar-expand-lg top-navbar top-bar">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img class="logo me-4 d-none d-md-block" src={logo} alt="logo" />
                        <a class="d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <img src={offCanvas} alt="off-canvas-image" />
                        </a>
                    </a>
                    <input type="text" class="input-search" placeholder="cari di sini.." onChange={(value => handleSearch(value))}/>

                    {/* Desktop Nav Item */}
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            {role === "buyer" ? (
                                <>
                                    <IconButton icon={"bi bi-house-door"} onClick={() => navigate('/')} />

                                    <Notif data={notifValue.notif} />

                                    <IconButton icon={"bi bi-person"} onClick={() => navigate('/my-account#profile')}/>

                                    <ActionButton color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Toko"} onClick={() => handleOnClick("/seller/store#catalog", "seller")} />
                                </>
                            ) : role === "seller" ? (
                                <>
                                    <IconButton icon={"bi bi-list-ul"} onClick={() => navigate('/seller/store#catalog')} />

                                    <Notif data={notifValue.notif} />

                                    <ActionButton color={"#ffffff"} bg={"#4B1979"} text={"Beranda"} onClick={() => handleOnClick("/", "buyer")} />
                                </>
                            ) : (
                                <>
                                    <ActionButton color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Masuk"} onClick={() => navigate('/login')} />
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

                            <Notif mobile={true} />

                            <TextLink to={"/my-account"} text={"Akun Saya"} />

                            <ActionButton color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Toko"} onClick={() => handleOnClick("/seller/store#catalog", "seller")} />
                        </>
                    ) : role === "seller" ? (
                        <>
                            <TextLink to={"/seller/store#catalog"} text={"Dashboard"} />

                            <Notif mobile={true} />

                            <ActionButton color={"#ffffff"} bg={"#4B1979"} text={"Beranda"} onClick={() => handleOnClick("/", "buyer")} />
                        </>
                    ) : (
                        <>
                            <ActionButton color={"#ffffff"} bg={"#4B1979"} icon={fiLogin} text={"Masuk"} onClick={() => console.log('hello')} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Index;
