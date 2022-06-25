import React from 'react';
import CardCatalog from './CardCatalog';

const Catalog = () => {
    return (
        <>
            <div class="container mt-4 mb-4">
                <div class="row g-4">
                        <CardCatalog />
                        <CardCatalog />
                        <CardCatalog />
                        <CardCatalog />
                </div>    
            </div>            
        </>
    );
}

export default Catalog;
