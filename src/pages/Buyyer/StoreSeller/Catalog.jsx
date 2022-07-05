import React, { useEffect, useState } from "react";
import { getProductSeller } from "../../../services/productService";
import ListProduct from "../../../components/ListProductCard";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductSeller().then((response) => setProducts(response.data.data));
    }, []);
    return (
        <>
            <div class="container mt-4 mb-4">
                <div class="row g-4">
                    <ListProduct data={products} action={false} link="/seller/product/" />
                </div>
            </div>
        </>
    );
};

export default Catalog;
