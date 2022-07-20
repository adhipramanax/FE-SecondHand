import React from 'react';
import styled from "styled-components";
import Navbar from '../components/navbar/Navbar';

const Wrapper = styled.div`
    @media only screen and (max-width: 767px) {
        position: absolute;
        width: 100%;
        top: 0;
    }
`

const MainLayout = (props) => {
    return (
        <>
            <Navbar />

            <Wrapper>
                {/* <!-- Any content --> */}
                {props.children}
            </Wrapper>
        </>
    );
}

export default MainLayout;
