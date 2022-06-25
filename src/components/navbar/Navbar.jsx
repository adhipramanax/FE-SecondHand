import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import fiLogin from '../../assets/images/fi_log-in.png';
import offCanvas from '../../assets/images/Frame_133.png';
import { Link } from "react-router-dom";

import '../../assets/css/navbar.style.css';
import Notif from '../Notif';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light top-navbar top-bar">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img class='logo me-4 d-none d-md-block' src={logo} alt="logo" />
                        <a class="d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <img src={offCanvas} alt="off-canvas-image" />
                        </a>
                    </a>
                    <input type="text" class='input-search' placeholder='cari di sini..' />

                    {/* Desktop Nav Item */}
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Notif />
                            <Link to="/login" class="btn btn-color-purple"><img src={fiLogin} alt="logo" class='me-2' />Masuk</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Item */}
            <div class="offcanvas offcanvas-start w-50" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Second Hand</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <Link to="/login" class="btn btn-color-purple"><img src={fiLogin} alt="logo" class='me-2' />Masuk</Link>
                </div>
            </div>

        </>
    );
}

export default Navbar;


