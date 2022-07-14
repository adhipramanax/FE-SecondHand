import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../services/productService";
import ListProduct from "../../../components/ListProductCard";
import { productContext } from '../../../provider/productProvider';

const Catalog = () => {
    const productsValue = React.useContext(productContext);

    useEffect(() => {
        getAllProduct().then((response) => productsValue.setProducts(response.data.data));
    }, []);

    return (
        <>
            <section className="catalog">
                <div class="container mt-4 mb-5">
                    <ListProduct data={productsValue.products} link="/product/" />
                </div>
            </section>
        </>
    );
};

export default Catalog;
