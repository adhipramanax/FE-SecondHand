import React from 'react';
import CardCatalog from '../../../components/card/CardCatalog';
import MainLayout from '../../../layouts/Main.layout';
import CardSeller from './CardSeller';
import Catalog from './Catalog';

const Index = () => {
    return (
        <>
            <MainLayout>
                <CardSeller />
                <Catalog />
                <Catalog />
            </MainLayout>            
        </>
    );
}

export default Index;
