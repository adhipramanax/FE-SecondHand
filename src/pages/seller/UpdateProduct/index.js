import React from 'react';
import styled from 'styled-components';

// Component
import InputForm from './InputForm';

// Layout
import MainLayout from '../../../layouts/Main.layout';

const Wrapper = styled.div`
    @media only screen and (max-width: 767px) {
        position: relative;
        top: 80px;
    }
`

const Index = () => {
    return (
        <>
            <MainLayout>
                <Wrapper>
                    <InputForm />
                </Wrapper>
            </MainLayout>  
        </>
    );
}

export default Index;
