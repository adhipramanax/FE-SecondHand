import React from 'react';
import styled from "styled-components";
import Navbar from '../components/navbar/Navbar';

// Provider
import { NotifProvider } from "../provider/notificationProvider";

const Wrapper = styled.div`
    @media only screen and (max-width: 767px) {
        position: absolute;
        width: 100%;
        top: 0;
    }
`

const MainLayout = (props) => {
    return (
        <NotifProvider>
            <Navbar />

            <Wrapper>
                {/* <!-- Any content --> */}
                {props.children}
            </Wrapper>
        </NotifProvider>
    );
}

export default MainLayout;
