import React from 'react';
import CardCatalog from '../../../components/card/CardCatalog';

const Catalog = () => {
    return (
        <>
            <section className="catalog">
                <div class="container mt-4 mb-5">
                    <div className="row g-4">
                        <CardCatalog />
                        <CardCatalog />
                        <CardCatalog />
                        <CardCatalog />
                        <CardCatalog />
                        <CardCatalog />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Catalog;
