import React from 'react';
import Navbar from '../components/navbar/Navbar';

const MainLayout = (props) => {
    return (
        <>
            <Navbar />

            <div class='wrapper'>
                {/* <!-- Any content --> */}
                {props.children}
            </div>
        </>
    );
}

export default MainLayout;
