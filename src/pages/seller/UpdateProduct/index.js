import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../../layouts/Main.layout';
import InputForm from './InputForm';

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
